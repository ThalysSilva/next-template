import React from 'react';

import { ColumnConfig, ColumnHeadStyle, ColumnStyle } from './types';
import { ListPagination } from '../ListPagination';
import { DataItem, DataKeys } from '@/utils/types';
import { useTable } from './hooks/useTable';
import colors from '@/styles/Theme/colors';
import { THead } from './components/THead';
import { TRow } from './components/TRow';

type Props<T extends DataItem> = {
  data?: T[];
  columnsHeadStyle?: ColumnHeadStyle<DataKeys<T>>[];
  columnsConfig: ColumnConfig<DataKeys<T>>[];
  columnsStyle?: ColumnStyle<DataKeys<T>>[];
  columnsToFilter?: DataKeys<T>[];
  alternateColor?: string;
  stringToFilter?: string;
  headClassName?: string;
  rowsClassName?: string;
  marginBotton?: number;
  itemsPerPage?: number;
  scrollToId?: string;
  renderEdit?: any;
};

export function Table<T extends DataItem>({
  columnsHeadStyle,
  columnsToFilter,
  stringToFilter,
  alternateColor,
  columnsConfig,
  rowsClassName,
  headClassName,
  marginBotton,
  columnsStyle,
  itemsPerPage,
  renderEdit,
  scrollToId,
  data,
}: Props<T>) {
  const { handleSortingChange, setPaginateItems, paginateItems, columnsHead, tableData } = useTable(
    {
      columnsHeadStyle,
      columnsToFilter,
      stringToFilter,
      columnsConfig,
      data,
    },
  );

  return (
    <div className={`flex flex-col w-full gap-6 ${marginBotton ? `mb-${marginBotton}` : 'mb-10'}`}>

      <div className="flex flex-col">
        <THead<DataKeys<T>>
          handleSortingChange={handleSortingChange}
          className={headClassName}
          columns={columnsHead}
        />
        {paginateItems.map((item, index) => {
          const payload = data?.length ? data[index] : null;
          const columnsRow = columnsConfig.map(({ keyName, render }, idx) => {
            const className = `
          ${columnsStyle?.find((item) => item.keyName === keyName)?.className ?? ''} 
          ${(idx + 1) % 2 === 0 ? '' : colors.background.blueLight}
          `;

            const currentLabel = item[keyName].toString();

            return {
              columnSize: columnsConfig.find((item) => item.keyName === keyName)?.columnSize,
              label: currentLabel,
              className,
              keyName,
              render,
            };
          });

          return (
            <TRow
              alternateColor={alternateColor}
              isOdd={(index + 1) % 2 === 1}
              className={rowsClassName}
              renderEdit={renderEdit}
              columns={columnsRow}
              data={payload}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex justify-end px-6 w-full">
        <ListPagination
          setPageItems={setPaginateItems}
          itemsPerPage={itemsPerPage}
          scrollToId={scrollToId}
          items={tableData}
        />
      </div>
    </div>
  );
}
