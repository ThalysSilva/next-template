import React from 'react';

import { twMerge } from 'tailwind-merge';
import { Text5 } from '../Texts';
import { When } from '../When';

type StepsProps = {
  containerClassName?: string;
  children: React.ReactNode;
  contentClassName?: string;
  currentStep: number;
};

type StepProp = {
  containerTextClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  iconClassName?: string;
  isActive?: boolean;
  icon: JSX.Element;
  hide?: boolean;
  title?: string;
};

export function Steps({ currentStep, children, containerClassName, contentClassName }: StepsProps) {
  return (
    <div className={twMerge('flex justify-center items-center', containerClassName)}>
      <div className={twMerge('flex gap-6 w-full h-fit items-start lg:gap-20', contentClassName)}>
        {React.Children.map(children, (child, index) => {
          const isActive = index + 1 == currentStep;

          return (
            <>
              {React.cloneElement(child as React.ReactElement, {
                isActive,
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}

export function Step({
  containerTextClassName,
  containerClassName,
  titleClassName,
  iconClassName,
  isActive,
  title,
  hide,
  icon,
}: StepProp) {
  return (
    <div
      style={{ display: hide ? 'none' : 'flex' }}
      className={twMerge(
        `flex flex-col  justify-center items-center w-16 h-14 p-3 rounded-lg bg-background-yellowLight lg:w-[120px] lg:h-[70px] lg:font-semibold ${
          isActive ? 'opacity-100' : 'opacity-20'
        }`,
        containerClassName,
      )}
    >
      <div
        className={twMerge(
          'w-5 flex justify-center items-center transform  lg:scale-125',
          iconClassName,
        )}
      >
        {icon}
      </div>
      <When value={title}>
        <div
          className={twMerge(
            'block relative text-center whitespace-nowrap',
            containerTextClassName,
          )}
        >
          <Text5 className={twMerge(' text-center text-text-primary text-[10px]', titleClassName)}>
            {title}
          </Text5>
        </div>
      </When>
    </div>
  );
}
