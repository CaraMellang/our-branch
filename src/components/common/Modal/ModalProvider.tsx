import styled from '@emotion/styled';
import { observer } from 'mobx-react-lite';
import { useStore } from '@src/store';
import { FormEvent, useEffect, useRef, useState } from 'react';
import type { ModalConfig } from '@store/uiModal.d';
import { BackDrop } from '@components/base/BackDrop';

export const ModalProvider = observer(() => {
  const uiModal = useStore().uiModal;
  const [isOpen, setIsOpen] = useState(uiModal.getIsOpen());
  const [config, setConfig] = useState<ModalConfig | null>(null);
  const promiseRef = useRef<{ resolve: (isConfirm: boolean) => void; reject: () => void }>();
  console.log('야', uiModal.getIsOpen());

  const handleClose = (isClose?: boolean) => {
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
    const body = document.querySelector('body') as HTMLBodyElement;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (!uiModal.isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  }, [uiModal.isOpen]);

  if (!uiModal.getIsOpen()) return <></>;

  return (
    <ModalProviderContainer>
      <BackDrop open={uiModal.isOpen} onClose={handleClose} />
      <ModalProviderSection
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          console.dir(e.target);
          console.dir(target.elements);
          const convert = Array.from(target.elements);
          console.log(convert, convert[0]?.name);
        }}
      >
        <ModalProviderWrapper>
          <ModalProviderTitle>타이틀</ModalProviderTitle>
        </ModalProviderWrapper>
        <ModalProviderWrapper>
          <ModalProviderContent>
            내용
            <input name={'하이'} />
            <input name={'하이2'} />
            <input name={'하이3'} />
          </ModalProviderContent>
        </ModalProviderWrapper>
        <ModalProviderActions>
          버튼들 <button type={'submit'}>하이</button>
        </ModalProviderActions>
        <ModalProviderWrapper></ModalProviderWrapper>
      </ModalProviderSection>
    </ModalProviderContainer>
  );
});

const ModalProviderContainer = styled.div`
  z-index: 1000;
  color: white;
`;
const ModalProviderSection = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  max-width: 500px;
  max-height: 500px;
  background-color: orange;
  border-radius: 12px;
  padding: 18px;
`;
const ModalProviderWrapper = styled.div``;
const ModalProviderTitle = styled.div``;
const ModalProviderContent = styled.div``;
const ModalProviderActions = styled.div``;
