'use client';
import { useState, useEffect } from 'react';

export default function Queries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetch('/api/queries')
      .then(res => res.json())
      .then(data => setQueries(data));
  }, []);

  return (
    <div className="queries-page">
      <header className="page-header">
        <h1>User Queries</h1>
        <p>Manage customer enquiries and requests.</p>
      </header>

      <div className="queries-list">
        {queries.map(query => (
          <div key={query.id} className="card query-card">
            <div className="query-header">
              <h3>{query.name}</h3>
              <span className={`status-badge ${query.status}`}>{query.status}</span>
            </div>
            <p className="query-email">{query.email}</p>
            <p className="query-message">{query.message}</p>
            <div className="query-footer">
              <small>{new Date(query.date).toLocaleDateString()}</small>
              <button className="btn btn-primary">Reply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
