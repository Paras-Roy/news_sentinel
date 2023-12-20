"use client"
import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const BarChartComponent = ({ title, index, barColor, barThickness, barData, xAxisData }) => {
  useEffect(() => {
    const chartDom = document.getElementById(`main${index}`);
    const myChart = echarts.init(chartDom);

    const option = {
      xAxis: {
        type: 'category',
        data: xAxisData || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
      tooltip: {
        trigger: 'axis', // Show tooltip on hover of bars
        axisPointer: {
          type: 'shadow',
        },
      },
      series: [
        {
          data: barData || [120, 200, 150, 80, 70, 110, 130],
          animation: false,
          type: 'bar',
          itemStyle: {
            borderRadius: [15, 15, 15, 15], // Adjust border radius if needed
            color: barColor || 'blue', // Bar color
          },
          barWidth: barThickness || 30, // Bar thickness
        },
      ],
    };

    option && myChart.setOption(option);

    // Cleanup chart when component is unmounted
    return () => {
      myChart.dispose();
    };
  }, [index, barData, barColor, barThickness, xAxisData]); // Include dependencies

  return(
  <div className="flex items-center flex-col w-full h-full" >
    <h1 className='text-bold'>{title}</h1>
    <div id={`main${index}`} className='w-full h-full rounded-2xl' />
  </div>);
};

export default BarChartComponent;
