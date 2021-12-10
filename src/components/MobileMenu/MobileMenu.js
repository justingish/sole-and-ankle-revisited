/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Navigation Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Close</VisuallyHidden>
        </CloseButton>
        <Nav>
          <a href="/sale" className="active">
            Sale
          </a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(96, 100, 108, 0.8); ;
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: var(--color-white);
  width: min(300px, 80vw);
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    text-decoration: none;
    color: var(--color-gray-700);
    font-size: 1.2rem;
  }

  a.active {
    font-weight: bold;
    color: var(--color-primary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    text-decoration: none;
    color: #000;
    font-size: 0.8rem;
  }
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

export default MobileMenu;
