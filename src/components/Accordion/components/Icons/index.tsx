import ArrowLeftIcon from '@/assets/icons/ArrowLeft';
import { When } from '@/components/When';
import React, { ReactNode } from 'react';

type iconsProps = {
  iconProps?: ReactNode;
  onExpandIcon: ReactNode;
  isExpanded: boolean;
};

export function DefaultIcon() {
  return (
    <span className="-rotate-90 w-fit h-fit justify-center items-center">
      <ArrowLeftIcon />
    </span>
  );
}

export function IconWithoutExpandedIcon({
  iconProps,
  isExpanded,
}: Omit<iconsProps, 'onExpandIcon'>) {
  return (
    <div className={` ${isExpanded ? 'rotate-90' : '-rotate-90'}`}>
      {iconProps ?? <DefaultIcon />}
    </div>
  );
}

export function IconWithExpandedIcon({ iconProps, isExpanded, onExpandIcon }: iconsProps) {
  return (
    <When value={isExpanded} render={onExpandIcon} elseRender={iconProps ?? <DefaultIcon />} />
  );
}

export function Icon(props: iconsProps) {
  return (
    <When
      value={props.onExpandIcon}
      render={<IconWithExpandedIcon {...props} />}
      elseRender={<IconWithoutExpandedIcon {...props} />}
    />
  );
}
