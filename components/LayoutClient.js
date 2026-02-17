'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

export default function LayoutClient({ children }) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isLoginPage = pathname === '/login';

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    if (isLoginPage) {
        return <>{children}</>;
    }

    return (
        <div className="layout">
            <header className="mobile-header">
                <h2>SVI ADMIN</h2>
                <button className="menu-toggle" onClick={toggleSidebar}>
                    ☰
                </button>
            </header>

            <div
                className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
            />

            <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />

            <main className="main-content">
                {children}
            </main>
        </div>
    );
}
