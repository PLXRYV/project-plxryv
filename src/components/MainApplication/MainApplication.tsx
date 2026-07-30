import React from 'react';

interface MainApplicationProps {
  children: React.ReactNode;
}

const MainApplication = ({ children }: MainApplicationProps) => {
  return (
    <div className='layout'>
      {children}
    </div>
  );
};

export default MainApplication;
