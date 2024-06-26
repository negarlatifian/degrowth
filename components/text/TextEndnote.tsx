import React from 'react';

const TextEndnote = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <p
      className={
        'font-text  xs:text-[1rem] md:tex-[1.15rem] text-[0.75rem] mt-[1rem] xs:leading-5 leading-4 xs:w-[38rem] w-[89%]' +
        ' ' +
        className
      }
    >
      {children}
    </p>
  );
};

export default TextEndnote;
