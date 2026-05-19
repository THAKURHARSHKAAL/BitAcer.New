import { useEffect, useState } from 'react';
import client from '../api/client';

const AdminPanelPage = () => {
  const [records, setRecords] = useState([]);

  const load = async () => {
    const { data } = await client.get('/properties/all');
    setRecords(data);
  };

  useEffect(() => { load(); }, []);

  const verify = async (id, status) => {
    await client.patch(`/properties/${id}/verify`, { status });
    load();
  };

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Admin Property Verification</h1>
      <div className="grid gap-4">
        {records.map((r) => (
          <div key={r._id} className="card">
            <p className="font-medium">{r.propertyAddress} ({r.surveyNumber})</p>
            <p>Owner: {r.ownerName} | User: {r.owner?.email}</p>
            <p>Status: {r.verificationStatus}</p>
            <div className="mt-3 flex gap-2">
              <button className="btn" onClick={() => verify(r._id, 'approved')}>Approve</button>
              <button className="rounded bg-red-600 px-4 py-2 text-white" onClick={() => verify(r._id, 'rejected')}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanelPage;
