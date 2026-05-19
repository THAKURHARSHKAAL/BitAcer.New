import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import client from '../api/client';
import { useAuth } from '../context/AuthContext';

const LoginPage = ({ signup = false }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const endpoint = signup ? '/auth/signup' : '/auth/login';
      const payload = signup ? form : { email: form.email, password: form.password };
      const { data } = await client.post(endpoint, payload);
      login(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Request failed');
    }
  };

  return (
    <div className="mx-auto mt-20 max-w-md card">
      <h1 className="mb-4 text-2xl font-semibold">{signup ? 'Create account' : 'Login'}</h1>
      <form onSubmit={submit} className="space-y-3">
        {signup && <input className="input" placeholder="Full name" onChange={(e) => setForm({ ...form, name: e.target.value })} required />}
        <input className="input" type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="input" type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="btn w-full">{signup ? 'Signup' : 'Login'}</button>
      </form>
      <p className="mt-4 text-sm">
        {signup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <Link className="text-blue-600" to={signup ? '/login' : '/signup'}>{signup ? 'Login' : 'Signup'}</Link>
      </p>
    </div>
  );
};

export default LoginPage;
