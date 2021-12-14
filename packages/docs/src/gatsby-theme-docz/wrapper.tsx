import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <>{children}</>;
};

export default Wrapper;
