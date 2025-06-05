// /pages/login.jsx
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push('/crm');
  };

  return (
    <div className="max-w-md mx-auto mt-32 p-6 shadow-lg rounded bg-white">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input name="email" type="email" placeholder="Email" required className="p-2 border" />
        <input name="password" type="password" placeholder="Password" required className="p-2 border" />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}
