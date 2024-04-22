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
        'font-text xs:w-[38rem] w-[89%] xs:text-[1rem] text-[0.75rem] mb-[1rem] xs:leading-5 leading-4' +
        ' ' +
        className
      }
    >
      {children}
    </p>
  );
};

export default Text;
