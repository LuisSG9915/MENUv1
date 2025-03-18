import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container pattern-bg">
      <Navbar />
      <main className="main-content">
        <div className="content-container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
