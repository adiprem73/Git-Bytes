import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const ChartSummary = () => {
  useEffect(() => {
    const chartDom = document.getElementById('vulnerabilityChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);
    const resizeHandler = () => myChart.resize();

    const option = {
      animation: false,
      radar: {
        indicator: [
          { name: 'XSS', max: 10 },
          { name: 'SQL Injection', max: 10 },
          { name: 'CSRF', max: 10 },
          { name: 'SSL', max: 10 }
        ],
        radius: 100,
        axisName: {
          color: '#fff',
          fontSize: 12
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(0, 255, 157, 0.05)', 'rgba(0, 255, 157, 0.1)']
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 255, 157, 0.3)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 255, 157, 0.3)'
          }
        }
      },
      series: [
        {
          name: 'Security Scores',
          type: 'radar',
          data: [
            {
              value: [6, 8, 9, 7],
              name: 'Vulnerability Scores',
              areaStyle: {
                color: 'rgba(0, 255, 157, 0.2)'
              },
              lineStyle: {
                color: '#00FF9D'
              },
              itemStyle: {
                color: '#00FF9D'
              }
            }
          ]
        }
      ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      myChart.dispose();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-1 bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Vulnerability Overview</h3>
        <div id="vulnerabilityChart" className="w-full h-64"></div>
      </div>
      <div className="md:col-span-2 bg-[#1E1E1E] rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Summary and Recommendations</h3>
        <p className="text-gray-300 mb-4">
          Your website is moderately secure. Fix red and yellow warnings for full safety.
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <h4 className="font-semibold text-[#00FF9D] mb-2">Critical Issues</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Fix script execution vulnerability in search parameter</li>
            <li>Implement input sanitization in signup form</li>
            <li>Disable TLS 1.0 and update cipher suites</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          {/* <button className="bg-[#00FF9D] text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition flex items-center">
            <i className="fas fa-download mr-2"></i>
            Download PDF Report
          </button> */}
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
            <i className="fas fa-share-alt mr-2"></i>
            Share Report Link
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
            <i className="fas fa-redo mr-2"></i>
            Rescan This Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartSummary;
