import { useEffect, useState } from 'react';

import { DataItem, DataKeys, SortDirection } from '@/utils/types';
import { ColumnConfig, ColumnHeadStyle } from '../types';
import { validateCPF } from '@/utils/functions/validations';
import { onlyNumber } from '@/utils/formaters/masks';

type Props<T extends DataItem> = {
  columnsHeadStyle?: ColumnHeadStyle<DataKeys<T>>[];
  columnsConfig: ColumnConfig<DataKeys<T>>[];
  columnsToFilter?: DataKeys<T>[];
  stringToFilter?: string;
  data?: T[];
};

export function useTable<T extends DataItem>({
  columnsHeadStyle,
  columnsToFilter,
  stringToFilter,
  columnsConfig,
  data,
}: Props<T>) {
  const [tableData, setTableData] = useState(data);
  const [sortField, setSortField] = useState<DataKeys<T>>('');
  const [order, setOrder] = useState<SortDirection>('asc');
  const [paginateItems, setPaginateItems] = useState<T[]>([]);

  useEffect(() => {
    function getTableDataFiltered() {
      if (stringToFilter && columnsToFilter) {
        const filteredData = [...(data ?? [])].filter((item) => {
          const values = columnsToFilter.map((column) => item[column]);

          return values.some((value) => {
            const formatedValue = value.toString().toLowerCase().trim();
            const formatedFilter = stringToFilter.toLowerCase().trim();

            // se é um cpf a comparação é feita apenas com os números
            if (validateCPF(formatedValue)) {
              // se filtro contém letras retorna falso
              if (/[a-zA-Z]/g.test(formatedFilter)) return false;

              // se filtro não contém números retorna falso
              const numberFilter = onlyNumber(formatedFilter);
              if (numberFilter.length < 1) return false;

              return onlyNumber(formatedValue).includes(numberFilter);
            }

            // qualquer outra coluna é testada normalmente
            return formatedValue.includes(formatedFilter);
          });
        });
        return filteredData;
      }
      return data;
    }

    const filteredData = getTableDataFiltered();
    setTableData(filteredData);
  }, [data, stringToFilter]);

  const handleSortingChange = (keyName: DataKeys<T>) => {
    const sortOrder = keyName === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(keyName);
    setOrder(sortOrder);
    handleSorting(keyName, sortOrder);
  };

  const handleSorting = (sortField: DataKeys<T>, sortOrder: SortDirection) => {
    if (sortField) {
      const sorted = [...(data ?? [])].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'pt-BR', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const columnsHead = columnsConfig.map(({ keyName, label }) => ({
    className: columnsHeadStyle?.find((item) => item.keyName === keyName)?.className ?? '',
    columnSize: columnsConfig.find((item) => item.keyName === keyName)?.columnSize,
    sortable: columnsConfig.find((item) => item.keyName === keyName)?.sortable,
    keyName,
    label,
  }));

  return {
    handleSortingChange,
    setPaginateItems,
    paginateItems,
    columnsHead,
    tableData,
  };
}
