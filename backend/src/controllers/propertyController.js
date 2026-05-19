import Property from '../models/Property.js';
import { generatePropertyHash } from '../utils/hash.js';
import { writeHashToBlockchain } from '../services/blockchainService.js';

export const createProperty = async (req, res) => {
  const { ownerName, aadharNumber, propertyAddress, city, state, pincode, surveyNumber, areaSqFt, walletAddress } = req.body;

  const uniqueSelector = { surveyNumber, propertyAddress, pincode };
  const exists = await Property.findOne(uniqueSelector);
  if (exists) return res.status(409).json({ message: 'Property already registered by an owner' });

  const hashPayload = { ...uniqueSelector, ownerName, aadharNumber, city, state, areaSqFt };
  const propertyHash = generatePropertyHash(hashPayload);

  const txHash = await writeHashToBlockchain(propertyHash);
  const property = await Property.create({
    owner: req.user._id,
    ownerName,
    aadharNumber,
    propertyAddress,
    city,
    state,
    pincode,
    surveyNumber,
    areaSqFt,
    documentUrl: req.file?.path,
    propertyHash,
    blockchainTxHash: txHash,
    walletAddress
  });

  return res.status(201).json(property);
};

export const myProperties = async (req, res) => {
  const properties = await Property.find({ owner: req.user._id }).sort({ createdAt: -1 });
  res.json(properties);
};

export const allProperties = async (_, res) => {
  const properties = await Property.find().populate('owner', 'name email').sort({ createdAt: -1 });
  res.json(properties);
};

export const verifyProperty = async (req, res) => {
  const { id } = req.params;
  const { status, rejectionReason } = req.body;
  if (!['approved', 'rejected'].includes(status)) return res.status(400).json({ message: 'Invalid verification status' });

  const property = await Property.findByIdAndUpdate(
    id,
    { verificationStatus: status, rejectionReason: status === 'rejected' ? rejectionReason : '' },
    { new: true }
  );

  if (!property) return res.status(404).json({ message: 'Property not found' });
  res.json(property);
};
