export let ApexRandomData = {
    series: [{
        data: [
            [10,19],
             
        ]
    }],
    colors: ['#705ec8'],
    chart: {
        id: 'area-datetime',
        type: 'area',
        height: 300,
        zoom: { autoScaleYaxis: true }
    },
    annotations: {
        yaxis: [{
            y: 30,
            borderColor: '#999',
            label: {
                text: 'Support',
                style: {
                    color: "#fff",
                    background: '#00E396'
                }
            }
        }],
        xaxis: [{
            x: new Date('9 sep 2021').getTime(),
            borderColor: '#999',
            label: {
                text: 'Rally',
                style: {
                    color: "#fff",
                    background: '#775DD0'
                }
            }
        }]
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    xaxis: {
        type: 'datetime',
        min: new Date('0').getTime(),
        tickAmount: 6,
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
        }
    },
};

export let ApexChartData = {
    series: [{
        name: 'Amount',
        data:  [10,19],
    }, 
    ],
    colors: ['#705ec8', '#fa057a'],
    chart: {
        height: 300,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2021-09-22T05:21:19.710Z", "2021-09-22T05:21:05.832Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    legend: {
        show: false,
    }
};

export let BarData = {
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    colors: ['#705ec8', '#fa057a'],
    chart: {
        type: 'bar',
        height: 300,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    },
    legend: {
        show: false,
    }
};

export let StackedBarData = {
    series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [23, 22, 23, 22, 13, 13, 12]
    }, {
        name: 'Tank Picture',
        data: [22, 27, 21, 29, 15, 21, 20]
    }, {
        name: 'Bucket Slope',
        data: [25, 12, 19, 32, 25, 24, 10]
    }, {
        name: 'Reborn Kid',
        data: [9, 7, 5, 8, 6, 9, 4]
    }],
    colors: ['#705ec8', '#fa057a', '#2dce89', '#ff5b51', '#fcbf09'],
    chart: {
        type: 'bar',
        height: 300,
        stacked: true,
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    yaxis: {
        title: {
            text: undefined
        },
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};

export let DonutChartData = {
    pieseries: [44, 55, 41, 17, 15],
    colors: ['#705ec8', '#fa057a', '#2dce89', '#ff5b51', '#fcbf09'],
    chart: {
        type: 'donut',
        height: 300,
    },
    legend: {
        show: false,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false,
                position: 'bottom'
            }
        }
    }]
};
export let PieChartData = {
    pieseries: [44, 55, 13, 43, 22],
    colors: ['#705ec8', '#fa057a', '#2dce89', '#ff5b51', '#fcbf09'],
    chart: {
        height: 300,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
        show: false,
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false,
                position: 'bottom'
            }
        }
    }]
}
export let RadialBarCircleData = {
    pieseries: [70],
    chart: {
        height: 300,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['Sales'],
    colors: ['#4454c3'],
    responsive: [{
        options: {
            legend: {
                show: false,
            }
        }
    }]
};
export let RadialBarCircleMultipleData = {
    pieseries: [44, 55, 67, 83],
    chart: {
        height: 300,
        type: 'radialBar',
    },
    colors: ['#705ec8', '#fa057a', '#2dce89', '#ff5b51', '#fcbf09'],
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                        return "249"
                    }
                }
            }
        }
    },
    labels: ['data1', 'data2', 'data3', 'data4'],
};

