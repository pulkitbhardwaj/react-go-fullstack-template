import React from "react";

import styled from "styled-components";

/* eslint-disable-next-line */
export interface ModalProps {}

const StyledModal = styled.div`
  color: pink;
`;

export function Modal(props: ModalProps) {
  return (
    <StyledModal>
      <h1>Welcome to modal!</h1>
    </StyledModal>
  );
}

export default Modal;
