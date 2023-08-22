import * as echarts from 'echarts';
import { useEffect } from 'react';
import { useResizeObserver } from '@mantine/hooks';
import getMap from '../public/json/world-map-geo-full.json';
const country = [
    {
        name: 'China',
        value: 5305558,
        countryAbbrName: 'CN',
        itemStyle: {
            color: '#001639',
        },
    },
    {
        name: 'South Korea',
        value: 301271,
        countryAbbrName: 'KR',
        itemStyle: {
            color: '#1E4EAE',
        },
    },
    {
        name: 'United States',
        value: 275679,
        countryAbbrName: 'US',
        itemStyle: {
            color: '#1D5BD6',
        },
    },
    {
        name: 'Singapore',
        value: 93388,
        countryAbbrName: 'SG',
        itemStyle: {
            color: '#3D7BF7',
        },
    },
    {
        name: 'India',
        value: 72087,
        countryAbbrName: 'IN',
        itemStyle: {
            color: '#3D7BF7',
        },
    },
    {
        name: 'Germany',
        value: 62592,
        countryAbbrName: 'DE',
        itemStyle: {
            color: '#91B5FD',
        },
    },
    {
        name: 'Brazil',
        value: 56260,
        countryAbbrName: 'BR',
        itemStyle: {
            color: '#57A3FD',
        },
    },
    {
        name: 'Russia',
        value: 48418,
        countryAbbrName: 'RU',
        itemStyle: {
            color: '#91B5FD',
        },
    },
    {
        name: 'Netherlands',
        value: 44177,
        countryAbbrName: 'NL',
        itemStyle: {
            color: '#AACBFF',
        },
    },
    {
        name: 'United Kingdom',
        value: 34776,
        countryAbbrName: 'GB',
        itemStyle: {
            color: '#B2CDF8FF',
        },
    },
];

const Echarts = () => {
    const [ref, rect] = useResizeObserver();
    useEffect(() => {
        // @ts-ignore
        const chart = echarts.init(document.getElementById('App'));
        echarts.registerMap('world', getMap);
        const generateRegions =
            country?.map((item) => ({
                ...item,
                tooltip: {
                    show: false,
                },
                itemStyle: {
                    areaColor: item.itemStyle?.color,
                },
                emphasis: {
                    itemStyle: {
                        areaColor: item.itemStyle?.color,
                    },
                    label: {
                        show: false,
                    },
                },
            })) || [];
        chart.setOption({
            tooltip: {
                show: true,
            },
            geo: {
                show: true,
                regions: generateRegions,
                tooltip: {
                    show: false,
                },
                emphasis: {
                    label: {
                        show: false,
                    },
                },
                map: 'world',
                roam: false,
            },
        });
    }, []);
    return <div className="App" ref={ref} id="App" style={{ width: '100%', height: '700px' }}></div>;
};
export default Echarts;
