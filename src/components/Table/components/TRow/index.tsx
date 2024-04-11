import React, { useState } from 'react';

import colors from '@/styles/Theme/colors';
import { Column } from '../../types';

type Props<T> = {
  alternateColor?: string;
  columns: Column<T>[];
  className?: string;
  renderEdit?: any;
  isOdd?: boolean;
  data?: any;
};

const { primaryLight } = colors.background;
export function TRow<T = string>({ columns, isOdd, alternateColor = primaryLight, className = '', renderEdit, data }: Props<T>) {
  const [active, setActive] = useState(false);
  const length = columns.reduce((acc, { columnSize }) => acc + (columnSize ?? 1), 0);
  const editable = (renderEdit && renderEdit() && active);

  return (
    <div
      className="flex flex-row max-w-full h-fit"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <div
        style={{
          backgroundColor: isOdd ? alternateColor : '',
          width: '100%',
        }}
        className={`grid grid-cols-${length} items-center justify-center max-w-full h-fit gap-3 rounded-md py-5 px-3 xl:px-8 ${className}`}
      >
        {columns.map(({ label, className = '', columnSize = 1, render }, index) => {

          const renderer = render ? (
            render(label)
          ) : (
            <p className={`text-table-text-normal h-full text-[14px] ${className} `}>{label}</p>
          );

          return (
            <div
              key={index}
              id={'table-column-' + index}
              className={`flex col-span-${columnSize} `}
            >
              {renderer}
            </div>
          );
        })}
      </div>
      {editable ? renderEdit({ columns, data }) : null}
    </div>
  );
}
