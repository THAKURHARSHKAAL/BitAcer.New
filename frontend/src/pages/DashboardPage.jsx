import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../api/client';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const [properties, setProperties] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    client.get('/properties/mine').then(({ data }) => setProperties(data));
  }, []);

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Welcome, {user.name}</h1>
        <button className="btn" onClick={logout}>Logout</button>
      </div>
      <div className="mb-4 flex gap-3">
        <Link to="/properties/new" className="btn">Add Property</Link>
        {user.role === 'admin' && <Link to="/admin" className="btn">Admin Panel</Link>}
      </div>
      <div className="grid gap-4">
        {properties.map((p) => (
          <div key={p._id} className="card">
            <p className="font-medium">{p.propertyAddress}</p>
            <p>Survey: {p.surveyNumber}</p>
            <p>Status: <span className="font-semibold">{p.verificationStatus}</span></p>
            <p className="break-all text-xs">Hash: {p.propertyHash}</p>
            {p.blockchainTxHash && <p className="break-all text-xs">Tx: {p.blockchainTxHash}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
