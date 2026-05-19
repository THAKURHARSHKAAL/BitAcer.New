import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ownerName: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    propertyAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    surveyNumber: { type: String, required: true },
    areaSqFt: { type: Number, required: true },
    documentUrl: { type: String, required: true },
    propertyHash: { type: String, required: true, unique: true },
    blockchainTxHash: { type: String },
    walletAddress: { type: String },
    verificationStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    rejectionReason: { type: String }
  },
  { timestamps: true }
);

propertySchema.index({ surveyNumber: 1, propertyAddress: 1, pincode: 1 }, { unique: true });

export default mongoose.model('Property', propertySchema);
