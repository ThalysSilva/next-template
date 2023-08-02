export type CustomIconProps = {
  hoverAnimate?: boolean;
  height?: string;
  width?: string;
  fill?: string;
};

export type Option = {
  label: string;
  value: string;
};

export type ButtonProps = {
  label?: string;
  onClick: () => void;
};

export type SortDirection = 'asc' | 'desc';

export type DataItem = { [key: string]: string | number };

export type DataKeys<T> = keyof T;

export type OptionList = option[];

export type ObjectRecursiveOf<T> = { [key: string]: ObjectRecursiveOf<T> | T };
