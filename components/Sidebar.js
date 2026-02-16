'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '@/app/globals.css';

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', { method: 'POST' });
      if (res.ok) {
        router.push('/login');
        router.refresh();
      }
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>SVI ADMIN</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/queries">Queries</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <button onClick={handleLogout} className="btn logout-btn">
        Logout
      </button>
    </div>
  );
}
