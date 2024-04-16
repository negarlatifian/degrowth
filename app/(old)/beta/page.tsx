'use client';
import './index.css';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import degrowthCopy from '@/components/old/Copy.js';
import { useScrollPosition } from '../../UseScrollPosition';
import HeaderOld from '@/components/old/HeaderOld';
import NavOld from '@/components/old/NavOld';
import SectionWithHeader from '@/components/old/SectionWithHeader';

//TODO debounce window listeners?

// if on small view and nav open -> resize over 750 px -> setOpen(false)

//hover [1]

//turn off scroll position on larger screens

const beta = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return (
    <Wrapper onClick={() => setHideOnScroll(true)}>
      <NavOld content={degrowthCopy.nav} show={hideOnScroll} />

      <HeaderOld text={degrowthCopy.header} navContent={degrowthCopy.nav} />
      <InnerWrapper>
        {degrowthCopy.sections.map((section, i) => {
          return (
            <SectionWithHeader
              key={`SectionWithHeader${i}`}
              section={section.header.section}
              header={section.header.title}
              variant={section.body.variant}
              body={section.body.copy}
            />
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 10vw;
  padding-left: calc(var(--vw, 1vw) * 10);

  @media (max-width: 749px) {
    padding-right: 10vw;
    padding-right: calc(var(--vw, 1vw) * 10);
  }

  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 55%;

  @media (max-width: 749px) {
    width: 100%;
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    width: 70%;
  }
`;

export default beta;
