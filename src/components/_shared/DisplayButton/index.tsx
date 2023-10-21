'use client';

import React, { ReactNode } from 'react';

import { useDisplayButton } from './hooks/useDisplayButton';
import ArrowLeftIcon from '@/assets/icons/ArrowLeft';
import { DefaultModal } from '../DefaultModal';
import { Text3, Text5 } from '../Texts';
import {
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Popover,
  PopoverHeader,
} from '@chakra-ui/react';
import CrossIcon from '@/assets/icons/Cross';
import { twMerge } from 'tailwind-merge';

type Props = {
  children:
    | ReactNode
    | (({ handleClose, isOpen }: { handleClose: () => void; isOpen: boolean }) => ReactNode);
  label: string;
  titleContent?: string;
  contentClassNameMobileModal?: string;
};

export function DisplayButton({
  children,
  label,
  titleContent,
  contentClassNameMobileModal,
}: Props) {
  const { isOpen, handleClose, toggleIsOpen, isWideVersion, lightColor, getAnimation } =
    useDisplayButton();

  return (
    <div className="flex min-w-fit w-full">
      <DefaultModal
        contentClassName={contentClassNameMobileModal}
        show={!isWideVersion && isOpen}
        closeModal={handleClose}
        customTitle={titleContent}
        titleClassName='text-brand-primary font-bold text-lg items-center justify-center pl-2'
      >
        {typeof children === 'function' ? children({ handleClose, isOpen }) : children}
      </DefaultModal>
      <button
        className={`flex justify-center items-center w-full border p-2 border-borderColor-light 
          rounded-md gap-1 pr-4 transform transition-all duration-150
          ${isOpen ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary '}
        `}
        onClick={toggleIsOpen}
      >
        <Text5 className={' font-semibold lg:w-full min-w-[120px]'}>{label}</Text5>
        <span className={`transform transition ${isOpen ? 'rotate-90' : '-rotate-90'}`}>
          <ArrowLeftIcon height="12" width="12" />
        </span>
      </button>
      <Popover
        isOpen={isWideVersion ? isOpen : false}
        placement={'bottom-end'}
        closeOnBlur={false}
        onClose={handleClose}
        offset={[20, 15]}
        arrowSize={20}
      >
        <PopoverTrigger>
          <span className={'relative right-6 bottom-4'} />
        </PopoverTrigger>
        <PopoverContent
          zIndex={60}
          color={'text.semiLight'}
          borderRadius={'md'}
          shadow={'dark-lg'}
          w={'fit-content'}
          bg={'white'}
          p={2}
          pt={0}
        >
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            <div className="flex justify-between items-center">
              <Text3 className="text-brand-primary">{titleContent}</Text3>
              <button
                style={{ width: 20, height: 20 }}
                className={twMerge('flex justify-center items-center', getAnimation())}
                onClick={handleClose}
              >
                <CrossIcon height="15" width="15" fill={lightColor} />
              </button>
            </div>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverBody w={'fit-content'}>
            {typeof children === 'function' ? children({ handleClose, isOpen }) : children}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}
