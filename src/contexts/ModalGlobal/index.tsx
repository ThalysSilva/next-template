import React, {
  createContext,
  ReactElement,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import { useBreakpointValue } from '@chakra-ui/react';
import { ModalGlobalContextData } from './types';
import colors from '@/styles/Theme/colors';
import { When } from '@/components/_shared/When';
import CrossIcon from '@/assets/icons/Cross';
import { Modal } from '@/components/_shared/Modal';

type ModalGlobalProviderProps = {
  children: ReactNode;
};

export const ModalGlobalContext = createContext({} as ModalGlobalContextData);

export function ModalGlobalProvider({ children }: ModalGlobalProviderProps) {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState<ReactElement | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [customTitle, setCustomTitle] = useState<ReactElement | null>(null);

  function handleOpenModal(content: ReactElement, title?: string, customTitle?: ReactElement) {
    setShow(true);
    setContent(content);
    setTitle(title ? title : null);
    setCustomTitle(customTitle ?? null);
  }

  function handleCloseModal() {
    setShow(false);
    setTimeout(() => setContent(null), 200);
  }

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeEffects, setActiveEffects] = useState<boolean>(false);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    if (show) {
      setIsOpen(show);
      const timeout = setTimeout(() => {
        setActiveEffects(show);
      }, 10);
      return () => clearTimeout(timeout);
    }
    setActiveEffects(show);
    const timeout = setTimeout(() => {
      setIsOpen(show);
    }, 200);

    return () => clearTimeout(timeout);
  }, [show]);

  const { light } = colors.text;

  return (
    <ModalGlobalContext.Provider
      value={{
        handleCloseModal,
        handleOpenModal,
        show,
      }}
    >
      <Modal
        position={isWideVersion ? 'center' : 'bottom'}
        closeModal={handleCloseModal}
        closeOnBackDrop
        show={isOpen}
      >
        <div
          style={{
            minHeight: isWideVersion ? 'fit-content' : '40vh',
            borderRadius: isWideVersion ? '8px' : '0',
            minWidth: isWideVersion ? '510px' : '100vw',
            padding: 24,
            maxWidth: '100%',
          }}
          className={` flex flex-col bg-white items-center bg-white-full ease-linear transform transition-all duration-100 origin-bottom-center lg:origin-center 
      ${activeEffects ? ' max-h-screen opacity-100' : ' max-h-0 opacity-0'}
      `}
        >
          <div className="flex justify-between items-center w-full mb-5">
            <When
              value={title}
              render={<span className={'font-bold text-brand-primary'}>{title}</span>}
              elseRender={<div />}
            />
            <When
              value={customTitle}
              render={<div className='w-full'>{customTitle}</div>}
              elseRender={<div />}
            />
            <button
              style={{ width: 20, height: 20 }}
              className="flex justify-center items-center"
              onClick={handleCloseModal}
            >
              <CrossIcon height="15" width="15" fill={light} />
            </button>
          </div>
          <div className="flex flex-col w-full overflow-y-hidden flex-1">{content}</div>
        </div>
      </Modal>
      {children}
    </ModalGlobalContext.Provider>
  );
}

export const useModalGlobalContext = () => useContext(ModalGlobalContext);
