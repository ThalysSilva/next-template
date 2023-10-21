import React, { ReactElement, ReactNode } from 'react';

type Props = {
  elseRender?: ReactNode | (() => void);
  render?: ReactNode | (() => void);
  children?: ReactNode | (() => void);
  value: any;
};

export function When({ children, value, elseRender, render }: Props) {
  const normalizedRender = (typeof render === 'function' ? render() : render) as ReactElement;

  const normalizedChildren = (
    typeof children === 'function' ? children() : children
  ) as ReactElement;

  const normalizedElseRender = (
    typeof elseRender === 'function' ? elseRender() : elseRender
  ) as ReactElement;

  if (value) {
    return normalizedRender ?? normalizedChildren;
  }

  if (elseRender) {
    return normalizedElseRender;
  }

  return <></>;
}
