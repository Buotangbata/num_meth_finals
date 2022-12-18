import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
    chart: {
        height: 450,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0
    }
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ x, y }) => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [theme.palette.primary.main, theme.palette.primary[700]],
            xaxis: {
                labels: {
                    style: {
                        colors: [
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary
                        ]
                    }
                },
                axisBorder: {
                    show: true,
                    color: line
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light'
            }
        }));
    }, [primary, secondary, line, theme, x, y]);

    const [series, setSeries] = useState([
        {
            name: 'F(x)',
            data: x.map((vx, i) => {
                return {
                    x: vx, 
                    y: y[i]
                }
            }).slice(0).sort((a,b) => {
                return a.x - b.x
            })
        }
    ]);

    useEffect(() => {
        setSeries([
            {
               name: 'F(x)',
            data: x.map((vx, i) => {
                return {
                    x: vx, 
                    y: y[i]
                }
            }).slice(0).sort((a,b) => {
                return a.x - b.x
            })
            }
        ]);
    }, [x, y]);

    return <ReactApexChart options={options} series={series} type="area" height={450} />;
};


export default IncomeAreaChart;
