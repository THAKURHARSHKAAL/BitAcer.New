import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../api/client';
import { connectWallet } from '../utils/wallet';

const AddPropertyPage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('walletAddress', walletAddress);
    await client.post('/properties', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    navigate('/dashboard');
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl card">
      <h1 className="mb-4 text-2xl font-semibold">Register Property</h1>
      <button className="btn mb-4" type="button" onClick={async () => setWalletAddress(await connectWallet())}>Connect MetaMask</button>
      {walletAddress && <p className="mb-4 text-xs break-all">Wallet: {walletAddress}</p>}
      <form className="grid gap-3" onSubmit={submit}>
        {['ownerName', 'aadharNumber', 'propertyAddress', 'city', 'state', 'pincode', 'surveyNumber', 'areaSqFt'].map((name) => (
          <input key={name} className="input" name={name} placeholder={name} required />
        ))}
        <input type="file" className="input" name="document" accept=".pdf,image/*" required />
        <button className="btn">Submit Property</button>
      </form>
    </div>
  );
};

export default AddPropertyPage;
