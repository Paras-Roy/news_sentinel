"use client"
import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default function LineChartComponent ({ title, index, data, xAxisData, lineColor, lineThickness }) {
  useEffect(() => {
    const chartDom = document.getElementById(`main${index}`);
    const myChart = echarts.init(chartDom);

    const option = {
      xAxis: {
        type: 'category',
        data: xAxisData || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
          show: false, // Hide x-axis line
        },
        axisTick: {
          show: false, // Hide x-axis ticks
        },
        splitLine: {
          show: false, // Hide x-axis grid lines
        },
        name: "X axis label"
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false, // Hide y-axis line
        },
        axisTick: {
          show: false, // Hide y-axis ticks
        },
        splitLine: {
          show: false, // Hide y-axis grid lines
        },
        name: 'Y-axis Label',
      },
      tooltip: {
        trigger: 'axis', // Set trigger to 'axis' for bar charts
        axisPointer: {
          type: 'shadow',
        },
      },
      series: [
        {
          data: data,
          animation: false,
          type: 'line',
          smooth: true,
          lineStyle: {
            color: lineColor || 'blue', // Line color
            width: lineThickness || 2, // Line thickness
          },
        },
      ],
      text: 'Line Chart Title'
    };

    option && myChart.setOption(option);

    // Cleanup chart when component is unmounted
    return () => {
      myChart.dispose();
    };
  }, [data, xAxisData, lineColor, lineThickness]); // Include dependencies

  return (
    <div className="flex items-center min-h-[300px] flex-col w-full h-full" >
      <h1 className='text-bold'>{title}</h1>
      <div id={`main${index}`} className='w-full h-full rounded-2xl' />
    </div>
  );
};
