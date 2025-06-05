// /pages/crm/index.jsx
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CRM() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user]);

  if (!user) return null;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Sparkies CRM Dashboard</h1>
      <p>You're logged in as: {user.email}</p>
      {/* You’ll later list leads and update statuses here */}
    </div>
  );
}
