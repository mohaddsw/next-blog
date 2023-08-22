import { useResizeObserver } from '@mantine/hooks';
import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import type { EChartsType } from 'echarts';

export type ChartMainContainerProps = {
  id: string;
  chart?: EChartsType;
  className?: string;
  isFullScreen?: boolean;
} & PropsWithChildren;

const ChartMainContainer: FC<ChartMainContainerProps> = (props) => {
  const [ref, rect] = useResizeObserver();

  useEffect(() => {
    props.chart?.resize();
  }, [props.chart, rect, props.isFullScreen]);

  return (
    <div id={props.id} ref={ref} style={{height: '100%',width: '100%'}}>
      {props.children}
    </div>
  );
};

export default ChartMainContainer;
