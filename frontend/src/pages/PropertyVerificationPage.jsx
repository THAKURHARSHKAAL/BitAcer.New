const PropertyVerificationPage = () => (
  <div className="mx-auto mt-10 max-w-3xl card">
    <h1 className="text-2xl font-semibold">Property Verification Rules</h1>
    <ul className="mt-4 list-disc pl-5">
      <li>One property can belong to only one verified owner.</li>
      <li>Duplicate registration by survey number + address + pincode is blocked.</li>
      <li>Each property receives a SHA-256 hash and optional blockchain transaction record.</li>
    </ul>
  </div>
);

export default PropertyVerificationPage;
