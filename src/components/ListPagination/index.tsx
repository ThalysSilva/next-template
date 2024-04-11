'use client';

import React, { Dispatch, SetStateAction } from 'react';

import { useListPagination } from './hooks/useListPagination';
import { ButtonArrow } from './components/ButtonArrow';
import { ButtonPage } from './components/ButtonPage';
import { ThreeDots } from '../ThreeDots';
import { When } from '../When';

type Props = {
  setPageItems: Dispatch<SetStateAction<any[]>>;
  itemsPerPage?: number;
  scrollToId?: string;
  items?: any[];
};

export function ListPagination({ itemsPerPage, items, setPageItems, scrollToId }: Props) {
  const {
    shouldDisplayDots,
    firstThreePages,
    lastThreePages,
    pageNumbers,
    currentPage,
    totalPages,
    changePage,
  } = useListPagination({ itemsPerPage, items, setPageItems, scrollToId });

  return (
    <When value={!!itemsPerPage && (items?.length??0) > itemsPerPage}>
      <div className="flex items-center w-fit gap-3 text-text-primary select-none">
        <ButtonArrow onClick={() => changePage(currentPage - 1)} direction="left" />
        <When value={totalPages > 6}>
          {firstThreePages.map((page) => (
            <ButtonPage
              isSelected={page === currentPage}
              onClick={() => changePage(page)}
              label={page}
              key={page}
            />
          ))}
          <When value={shouldDisplayDots} render={<ThreeDots />} />
          {lastThreePages.map((page) => (
            <ButtonPage
              isSelected={page === currentPage}
              onClick={() => changePage(page)}
              label={page}
              key={page}
            />
          ))}
        </When>
        <When value={totalPages <= 6}>
          {pageNumbers.map((page) => (
            <ButtonPage
              isSelected={page === currentPage}
              onClick={() => changePage(page)}
              label={page}
              key={page}
            />
          ))}
        </When>
        <ButtonArrow onClick={() => changePage(currentPage + 1)} direction="right" />
      </div>
    </When>
  );
}
