import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { createSequentialArray } from '@/utils/functions/array';

type Props<T = any> = {
  setPageItems: Dispatch<SetStateAction<T[]>>;
  itemsPerPage?: number;
  scrollToId?: string;
  items?: T[];
};

export function useListPagination({ items, itemsPerPage, setPageItems, scrollToId }: Props) {
  const currentItem = items ?? [];
  const defaultFirstThreePages = [1, 2, 3];
  const totalLength = currentItem.length;
  const totalPages = totalLength ? Math.ceil(totalLength / (itemsPerPage ?? 1)) : 1;

  const [firstThreePages, setFirstThreePages] = useState(defaultFirstThreePages);
  const [currentPage, setCurrentPage] = useState(1);

  const shouldDisplayDots = totalPages > 6 && currentPage < totalPages - 4;
  const lastThreePages = [totalPages - 2, totalPages - 1, totalPages];
  const pageNumbers = createSequentialArray(totalPages, 1);

  function handlePageClick(page: number) {
    const startIndex = (page - 1) * (itemsPerPage ?? 1);
    const endIndex = startIndex + (itemsPerPage ?? 0);
    const newItems = currentItem.slice(startIndex, endIndex);
    setPageItems(newItems);

    if (scrollToId) {
      const target = document.getElementById(scrollToId);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function getFirstTreePages(actualPage: number, totalPages: number) {
    if (actualPage <= 3) {
      return defaultFirstThreePages;
    }
    if (actualPage >= totalPages - 3) {
      return [totalPages - 5, totalPages - 4, totalPages - 3];
    }
    return [actualPage - 1, actualPage, actualPage + 1];
  }

  function changePage(page: number) {
    if (page < 1 || page > totalPages) return;

    const newFirstThreePages = getFirstTreePages(page, totalPages);
    setFirstThreePages(newFirstThreePages);
    handlePageClick(page);
    setCurrentPage(page);
  }

  useEffect(() => {
    if (typeof items === 'undefined') return;
    if (itemsPerPage) {
      changePage(1);
    } else {
      setPageItems(currentItem);
    }
  }, [items, itemsPerPage]);

  return {
    shouldDisplayDots,
    firstThreePages,
    lastThreePages,
    pageNumbers,
    currentPage,
    changePage,
    totalPages,
  };
}
