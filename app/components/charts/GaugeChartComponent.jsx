"use client"
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GaugeChart, CanvasRenderer]);

const GaugeChartComponent = ({ data, title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      series: [
        {
          type: 'gauge',
          animation: false,
          progress: {
            show: true,
            width: 18,
          },
          axisLine: {
            lineStyle: {
              width: 18,
            },

          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          axisLabel: {
            show: false,
            distance: 25,
            color: '#999',
            fontSize: 20,
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
              borderWidth: 10,
            },
          },
          title: {
            show: true,
          },
          detail: {
            valueAnimation: false,
            fontSize: 40,
            offsetCenter: [0, '70%'],
          },
          data: [
            {
              value: data,
            },
          ],
        },
      ],
    };

    option && myChart.setOption(option);

    // Cleanup chart when component is unmounted
    return () => {
      myChart.dispose();
    };
  }, [data]);

  return (
    <div className="flex items-center flex-col w-full h-full" >
      <h1 className='text-bold'>{title}</h1>
      <div ref={chartRef} className="w-full h-full" />
    </div>
  );
};

export default GaugeChartComponent;
