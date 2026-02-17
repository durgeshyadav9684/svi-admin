'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '@/app/globals.css';

export default function Sidebar({ isOpen, toggle }) {
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
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <h2>SVI ADMIN</h2>
        <button className="close-sidebar" onClick={toggle}>
          &times;
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => isOpen && toggle()}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li onClick={() => isOpen && toggle()}>
            <Link href="/queries">Queries</Link>
          </li>
          <li onClick={() => isOpen && toggle()}>
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
