import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DataChartLineType } from './types';
import { useChart } from './hooks/useChart';
import { Formatter, NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

type Props<T extends string> = {
  data?: DataChartLineType<T>[];
  linesIds: T[];
  formatterTooltipValue?: Formatter<ValueType, NameType>;
};

export function Chart<T extends string>({ data, linesIds, formatterTooltipValue }: Props<T>) {
  const { parentRef, parentSize, dataChart, secondaryColor } = useChart({ data, linesIds });
  return (
    <div className="flex min-h-[100px] w-full flex-1" ref={parentRef}>
      <LineChart width={parentSize.width} height={parentSize.height} data={dataChart}>
        <CartesianGrid horizontal={false} strokeDasharray="2" />
        <XAxis
          dataKey="axisXId"
          axisLine={false}
          strokeOpacity={0}
          interval={'equidistantPreserveStart'}
        />
        <YAxis hide />
        <Tooltip formatter={formatterTooltipValue} />
        {linesIds.map((lineId) => (
          <Line
            key={lineId}
            dot={{ style: { display: 'none' } }}
            strokeWidth={2}
            type="linear"
            dataKey={lineId}
            stroke={secondaryColor}
          ></Line>
        ))}
      </LineChart>
    </div>
  );
}
