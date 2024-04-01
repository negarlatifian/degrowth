import React from 'react';

const Text = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <p
      className={
        'font-text w-[40rem] text-[1.1rem] mb-[1rem] leading-5' +
        ' ' +
        className
      }
    >
      {children}
    </p>
  );
};

export default Text;
