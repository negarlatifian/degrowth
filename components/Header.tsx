import React from 'react';
import styled from 'styled-components';
import { NavLarge } from './Nav';

const Header = ({
  text,
  navContent,
}: {
  text: string[];
  navContent: { section: string; title: string; href: string }[];
}) => {
  return (
    <OuterWrapper>
      {' '}
      {text.map((item, i) => (
        <InnerWrapper key={`HeaderRow${i}`}>
          <Wrapper>
            {item}
            {i === text.length - 1 && <BetaTag>beta</BetaTag>}
          </Wrapper>
          {i === text.length - 1 && (
            <NavOuterWrapper>
              <NavInnerWrapper>
                <NavLarge content={navContent} />
              </NavInnerWrapper>
            </NavOuterWrapper>
          )}
        </InnerWrapper>
      ))}
    </OuterWrapper>
  );
};

const NavOuterWrapper = styled.div`
  position: relative;
`;

const NavInnerWrapper = styled.div`
  position: absolute;
  top: -120%;
`;

const OuterWrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 750px) {
    display: none;
  }

  @media (max-width: 750px) {
    /* display: flex; */
  }
`;

const InnerWrapper = styled.div`
  display: flex;

  justify-content: center;
  width: 65%;
  @media (max-width: 1249px) {
    width: 77%;
  }
`;

const Wrapper = styled.div`
  white-space: nowrap;
  width: 100%;
  text-transform: uppercase;
  font-family: 'Suisse';

  font-size: 7.395vw;
  font-size: calc(var(--vw, 1vw) * 7.395);

  line-height: 7.395vw;
  line-height: calc(var(--vw, 1vw) * 7.395);

  @media (max-width: 749px) {
    font-size: 11.8vw;
    font-size: calc(var(--vw, 1vw) * 11.8);
    line-height: 11.8vw;
    line-height: calc(var(--vw, 1vw) * 11.8);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 9.395vw;
    font-size: calc(var(--vw, 1vw) * 9.395);
    line-height: 9.395vw;
    line-height: calc(var(--vw, 1vw) * 9.395);
  }
`;

const BetaTag = styled.span`
  font-family: 'MG Mono';
  color: #00ff29;
  font-size: 1.041vw;
  font-size: calc(var(--vw, 1vw) * 1.041);

  @media (max-width: 749px) {
    font-size: 2.5vw;
    font-size: calc(var(--vw, 1vw) * 2.5);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.3vw;
    font-size: calc(var(--vw, 1vw) * 1.3);
  }
`;

export default Header;
