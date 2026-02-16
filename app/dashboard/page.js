'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({ queries: 0, products: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const qRes = await fetch('/api/queries');
      const pRes = await fetch('/api/products');
      const qData = await qRes.json();
      const pData = await pRes.json();
      setStats({ queries: qData.length, products: pData.length });
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <header className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back to SVI Admin panel.</p>
      </header>

      <div className="stats-grid">
        <div className="card stat-card">
          <h3>Total Queries</h3>
          <p className="stat-number">{stats.queries}</p>
        </div>
        <div className="card stat-card">
          <h3>Total Products</h3>
          <p className="stat-number">{stats.products}</p>
        </div>
        <div className="card stat-card">
          <h3>Sales Today</h3>
          <p className="stat-number">$1,240</p>
        </div>
      </div>
    </div>
  );
}
