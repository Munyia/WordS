import React, { ReactNode } from 'react';
import Navigation from './Header';
import Footer from './Footer';
import Scroll from './Scroll'; // ✅ import it here

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Scroll /> {/* ✅ Move Scroll here */}
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
