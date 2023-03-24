import styled from '@emotion/styled';
import React, { useState } from 'react';

interface Props {
  open: boolean;
  onClose?: (isClose: boolean) => void;
}

export function BackDrop({ open, onClose }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  if (!isOpen) return <></>;

  return <BackDropContainer onClick={e => onClose && onClose(false)}></BackDropContainer>;
}

const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.4;
`;
