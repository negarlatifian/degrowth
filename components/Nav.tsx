import React, { useState } from 'react';
import styled from 'styled-components';
import { IconHamburger, IconX } from './NavIcons';

const Nav = ({
  content,

  show,
}: {
  content: { section: string; title: string; href: string }[];

  show: boolean;
}) => {
  return (
    <>
      <NavSmall content={content} show={show} />
    </>
  );
};

const NavSmall = ({
  content,
  show,
}: {
  content: {
    section: string;
    title: string;
    href: string;
  }[];
  show: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {!isOpen && (
        <IconWrapper onClick={() => setIsOpen(true)} show={show}>
          <IconHamburger />
        </IconWrapper>
      )}
      <WrapperSmall open={isOpen}>
        <InnerWrapperSmall>
          <NavWrapperSmall>
            {content.map((item, i) => (
              <NavLink
                className='font-text'
                href={item.href}
                key={`NavLink${i}`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </NavWrapperSmall>
        </InnerWrapperSmall>
        <IconWrapper onClick={() => setIsOpen(false)} show={true}>
          <IconX />
        </IconWrapper>
      </WrapperSmall>
    </>
  );
};

export const NavLarge = ({
  content,
}: {
  content: {
    section: string;
    title: string;
    href: string;
  }[];
}) => (
  <Wrapper className='z-10'>
    {/* <Header>nav</Header> */}

    {content.map((item, i) => (
      <NavLink
        className='font-text'
        // href={`#${item.title}`}
        href={item.href}
        key={`NavLinkLarge${i}`}
      >
        {/* <SectionTag className='font-text'>{item.section}</SectionTag> */}
        {item.title}
      </NavLink>
    ))}
  </Wrapper>
);

const WrapperSmall = styled.div<{ open: boolean }>`
  opacity: ${({ open }: { open: any }) => (open ? '1' : '0')};
  transition: all 0.2s ease-in;
  pointer-events: ${({ open }: { open: any }) => !open && 'none'};

  padding: 2vw;
  padding: calc(var(--vw, 1vw) * 2);

  background-color: white;
  position: fixed;
  border: 2px solid black;
  width: 90%;
  height: 90%;
  left: 4vw;
  right: 4vw;
  top: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (min-width: 750px) {
    display: none;
  }
`;

const InnerWrapperSmall = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavWrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div<{ show: boolean }>`
  /* background-color: white; */
  position: fixed;
  cursor: pointer;

  visibility: ${(props: any) => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${(props: any) => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${(props: any) => (props.show ? 'none' : 'translate(100%, 0)')};

  top: 2vw;
  top: calc(var(--vw, 2vw) * 2);

  right: 2vw;
  right: calc(var(--vw, 2vw) * 2);

  width: 9vw;
  width: calc(var(--vw, 1vw) * 9);

  height: 9vw;
  height: calc(var(--vw, 1vw) * 9);

  @media (min-width: 750px) {
    display: none;
  }
`;

const Wrapper = styled.div<{ top?: number | null; height?: number | null }>`
  display: flex;
  flex-direction: column;
  position: fixed;

  @media (max-width: 749px) {
    display: none;
  }

  @media (max-width: 1249px) {
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000000;
  font-family: var(--font-suissIntl);

  /* text-transform: uppercase; */
  position: relative;

  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);

  @media (max-width: 749px) {
    font-size: 7vw;
    font-size: calc(var(--vw, 1vw) * 7);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);
  }
  :hover {
    color: #00ff29;
    text-decoration: underline;
  }
`;

export default Nav;
