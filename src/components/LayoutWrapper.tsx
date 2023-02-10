import NewFooter from '@/components/NewFooter';
import NewHeader from '@/components/NewHeader';
import SectionContainer from '@/components/SectionContainer';
import React from 'react';

const LayoutWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-[#150701]"
      style={{ backgroundImage: 'url("background.webp")' }}
    >
      <div className="wrapper flex flex-col justify-between overflow-hidden rounded-lg border border-main/50 bg-white dark:bg-primary2">
        <NewHeader />

        <main className="h-full w-full self-center overflow-y-auto">
          {children}
        </main>

        <NewFooter />
      </div>
    </div>
  );
};

export default LayoutWrapper;
