import React, { Children } from 'react';

const Endnote = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <p
      className={
        'font-text text-[.6rem] w-[7.5rem] leading-3 mr-[4rem]' +
        ' ' +
        className
      }
    >
      {children}
    </p>
  );
};

export default Endnote;
