'use client';

import React, { ComponentProps, ReactNode } from 'react';

import { useDefaultModal } from './hooks/useDefaultModal';
import CrossIcon from '@/assets/icons/Cross';
import { Modal } from '../Modal';
import { When } from '../When';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<typeof Modal> & {
  contentClassName?: string;
  titleClassName?: string;
  customTitle?: ReactNode;
  title?: string;
};

export function DefaultModal({
  closeOnBackDrop = true,
  contentClassName,
  titleClassName,
  customTitle,
  closeModal,
  children,
  title,
  show,
  zIndex = 998,
  ...modalProps
}: Props) {
  const { isOpen, isWideVersion, light, activeEffects } = useDefaultModal({ show });

  return (
    <Modal
      position={isWideVersion ? 'center' : 'bottom'}
      closeModal={closeModal}
      closeOnBackDrop={closeOnBackDrop}
      show={isOpen}
      zIndex={zIndex}
      {...modalProps}
    >
      <div
        style={{
          minHeight: isWideVersion ? 'fit-content' : '40vh',
          borderRadius: isWideVersion ? '8px' : '0',
          minWidth: isWideVersion ? '510px' : '100vw',
          padding: 24,
          maxWidth: '100%',
        }}
        className={` bg-white-full flex origin-bottom-center transform flex-col items-center bg-white transition-all duration-100 ease-linear lg:origin-center 
      ${activeEffects ? ' max-h-screen opacity-100' : ' max-h-0 opacity-0'}
      `}
      >
        <div className="mb-5 flex w-full items-center justify-between">
          <When
            value={title}
            render={<span className={'font-bold text-brand-primary'}>{title}</span>}
            elseRender={<div />}
          />
          <When
            value={customTitle}
            render={<div className={twMerge('flex w-full', titleClassName)}>{customTitle}</div>}
            elseRender={<div />}
          />
          <button
            type="button"
            style={{ width: 20, height: 20 }}
            className="flex items-center justify-center"
            onClick={closeModal}
          >
            <CrossIcon height="15" width="15" fill={light} />
          </button>
        </div>
        <div className={twMerge('flex w-full flex-1 flex-col overflow-y-hidden', contentClassName)}>
          {children}
        </div>
      </div>
    </Modal>
  );
}
