import React from 'react';

const Sup = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <sup className={'align-baseline font-text text-[0.7rem]' + ' ' + className}>
      {children}
    </sup>
  );
};

export default Sup;
