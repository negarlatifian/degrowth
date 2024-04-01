import React, { useState } from 'react';
import styled from 'styled-components';
import { IconHamburger, IconX } from './NavIcons';

const Nav = ({
  content,

  show,
}: {
  content: { section: string; title: string }[];

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
            <Header>nav</Header>
            {content.map((item, i) => (
              <NavLink
                href={`#${item.title}`}
                key={`NavLink${i}`}
                onClick={() => setIsOpen(false)}
              >
                <SectionTag>{item.section}</SectionTag>
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
  }[];
}) => (
  <Wrapper>
    <Header>nav</Header>

    {content.map((item, i) => (
      <NavLink href={`#${item.title}`} key={`NavLinkLarge${i}`}>
        <SectionTag>{item.section}</SectionTag>
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

  /* background-color: black; */
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;

  @media (min-width: 750px) {
    display: none;
  }
`;

const InnerWrapperSmall = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #00ff29;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavWrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div<{ show: boolean }>`
  /* background-color: black; */
  position: fixed;
  cursor: pointer;

  visibility: ${(props: any) => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${(props: any) => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${(props: any) => (props.show ? 'none' : 'translate(100%, 0)')};

  top: 6.1vw;
  top: calc(var(--vw, 1vw) * 6.1);

  right: 6.1vw;
  right: calc(var(--vw, 1vw) * 6.1);

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

const Header = styled.div`
  color: #00ff29;
  font-family: 'MG Mono';
  text-transform: uppercase;

  font-size: 0.625vw;
  font-size: calc(var(--vw, 1vw) * 0.625);

  padding-bottom: 0.208vw;
  padding-bottom: calc(var(--vw, 1vw) * 0.208);

  @media (max-width: 749px) {
    font-size: 4vw;
    font-size: calc(var(--vw, 1vw) * 4);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1vw;
    font-size: calc(var(--vw, 1vw) * 1);
    padding-bottom: 0vw;
  }
`;

const SectionTag = styled(Header)`
  /* position: absolute;

  left: -1vw;
  left: calc(var(--vw, 1vw) * -1);

  top: 0.475vh;
  top: calc(var(--vh, 1vh) * 0.475); */
  display: none;

  @media (max-width: 749px) {
    font-size: 3vw;
    font-size: calc(var(--vw, 1vw) * 3);

    left: -5vw;
    left: calc(var(--vw, 1vw) * -5);

    top: 1.2vh;
    top: calc(var(--vw, 1vw) * 1.2);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    left: -1.5vw;
    left: calc(var(--vw, 1vw) * -1.5);
    top: 0.3vh;
    top: calc(var(--vh, 1vh) * 0.3);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: 'Suisse';

  text-transform: uppercase;
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
