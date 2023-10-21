import { ReactElement } from 'react';

export type ModalGlobalContextData = {
  handleOpenModal: (content: ReactElement, title?: string, customTitle?: ReactElement) => void;
  handleCloseModal: () => void;
  show: boolean;
};
