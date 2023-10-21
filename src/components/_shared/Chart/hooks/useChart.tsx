import { ComponentProps, useEffect, useRef, useState } from 'react';

import { Chart } from '../';
import colors from '@/styles/Theme/colors';

export function useChart({ data }: ComponentProps<typeof Chart>) {
  const { secondary: secondaryColor } = colors.brand;
  const parentRef = useRef<HTMLDivElement>(null);
  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });

  const uniqueCollectionLabels = Array.from(
    new Set(data?.map(({ collectionLabel }) => collectionLabel)),
  );

  const dataChart = uniqueCollectionLabels.map((collectionLabel) => {
    const dataWithCurrentCollectionLabel = data?.filter(
      ({ collectionLabel: collectionLabelData }) => collectionLabelData === collectionLabel,
    );

    const groupByDataLineId = dataWithCurrentCollectionLabel?.reduce(
      (acc, { dataLineId, value }) => {
        return {
          ...acc,
          [dataLineId]: (acc[dataLineId] ?? 0) + value,
        };
      },
      {} as Record<string, number>,
    );

    const groupByDataLineIdArray = Object.entries(groupByDataLineId ?? {});

    const dataGroupByCollectionLabel = {
      axisXId: collectionLabel,
      ...Object.fromEntries(groupByDataLineIdArray),
    } as { axisXId: string } & Record<string, string>;

    return dataGroupByCollectionLabel;
  });

  function getSizeOfParent() {
    if (parentRef.current) {
      const { width, height } = parentRef.current.getBoundingClientRect();
      return { width, height };
    }
    return { width: 0, height: 0 };
  }

  function handleResize() {
    setParentSize(getSizeOfParent());
  }

  useEffect(() => {
    if (!parentRef.current) return;
    handleResize();
  }, [parentRef.current]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    parentRef,
    parentSize,
    dataChart,
    secondaryColor,
  };
}
