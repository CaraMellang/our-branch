import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useStore } from '@src/store';
import { useEffect, useRef, useState } from 'react';
import type { ModalConfig } from '@store/uiModal.d';

export const ModalProvider = observer(() => {
  const uiModal = useStore().uiModal;
  const [isOpen, setIsOpen] = useState(uiModal.getIsOpen());
  const [config, setConfig] = useState<ModalConfig | null>(null);
  const promiseRef = useRef<{ resolve: (isConfirm: boolean) => void; reject: () => void }>();

  const handleClose = () => {
    uiModal.closeModal();
    setConfig(null);
  };

  const handleSubmit = () => {
    uiModal.submitModal();
    setConfig(null);
  };

  useEffect(() => {
    setConfig(uiModal.getModalConfig());
    setIsOpen(uiModal.getIsOpen());
  }, []);

  useEffect(() => {
    if (!uiModal.isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  }, [uiModal.isOpen]);

  if (!isOpen) return <></>;

  return (
    <ModalProviderContainer onClick={handleClose}>
      <ModalProviderSection>
        <ModalProviderTitle>타이틀</ModalProviderTitle>
      </ModalProviderSection>
      <ModalProviderSection>
        <ModalProviderContent>내용</ModalProviderContent>
      </ModalProviderSection>
      <ModalProviderSection>
        <ModalProviderActions>버튼들</ModalProviderActions>
      </ModalProviderSection>
    </ModalProviderContainer>
  );
});

const ModalProviderContainer = styled.div`
  z-index: 1000;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: orange;
  color: white;
`;
const ModalProviderSection = styled.div``;
const ModalProviderTitle = styled.div``;
const ModalProviderContent = styled.div``;
const ModalProviderActions = styled.div``;
