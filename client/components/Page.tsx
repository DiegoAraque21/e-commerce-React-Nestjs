import React from 'react';
import TopBar from './TopBar';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Page({ children }: Props) {
  return (
    <div className="min-h-screen w-[100vw]">
      <TopBar />
      {children}
    </div>
  );
}

export default Page;
