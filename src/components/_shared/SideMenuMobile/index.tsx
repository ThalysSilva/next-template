import React from 'react';

import { useSideMenuMobile } from './hooks/useSideMenuMobile';
import { doNothing } from '@/utils/functions/general';
import Logo from '../../../assets/image/logo.png';
import CrossIcon from '@/assets/icons/Cross';
import { ButtonIcon } from '../ButtonIcon';
import { When } from '../When';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  closeOnBackDrop?: boolean;
  closeMenu: () => void;
  zIndex?: number;
  show: boolean;
};

export function SideMenuMobile({
  closeOnBackDrop,
  zIndex = 9999,
  closeMenu,
  children,
  show,
}: Props) {
  const { isOpen, activeEffects } = useSideMenuMobile({ show });

  return (
    <When value={isOpen}>
      <div style={{ zIndex }} className="fixed inset-0 flex justify-start">
        <div
          className={`${
            activeEffects ? 'opacity-70' : 'opacity-0'
          } fixed top-0 left-0 w-screen h-screen bg-black transition-all ease-linear duration-75`}
          onClick={closeOnBackDrop ? closeMenu : doNothing}
        />
        <div
          className={`absolute w-[90%] h-screen transform transition-all origin-left ease-linear duration-75 bg-[#006869] ${
            activeEffects ? 'scale-x-100 max-w-[9999px]' : 'scale-x-0 max-w-0'
          } overflow-auto`}
        >
          <div
            className={`w-full transform transition-all origin-left ease-linear duration-75 flex flex-col h-full ${
              activeEffects ? 'scale-x-100 max-w-[9999px]' : 'scale-x-0 max-w-0'
            } `}
          >
            <div className="flex w-full items-center justify-between py-6 px-5 transform transition-all origin-left ease-linear duration-75 bg-[#006869]">
              <div className="flex justify-center w-full">
                <Link href="/">
                  <Image src={Logo} alt="logo" />
                </Link>
              </div>
              <div>
                <ButtonIcon bgTransparent onClick={closeMenu}>
                  <CrossIcon />
                </ButtonIcon>
              </div>
            </div>
            <div className="flex flex-col flex-1 py-10 px-5 h-full">{children}</div>
          </div>
        </div>
      </div>
    </When>
  );
}
