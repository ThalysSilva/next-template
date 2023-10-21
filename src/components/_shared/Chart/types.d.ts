export type LineOptions = {
  width: number;
  color: string;
};

export type DataOptions = { lineOptions?: LineOptions };

export type DataChartLineType<T> = {
  collectionLabel: string;
  dataLineId: T;
  value: number;
} & DataOptions;
