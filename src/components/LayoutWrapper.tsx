import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';
import React from 'react';

const LayoutWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div>
        <Header />

        <main className="mb-auto">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
