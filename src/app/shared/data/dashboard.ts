import { Color, Label} from 'ng2-charts';
import { HttpService } from 'src/app/shared/services/http.service';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';



//Chart js
export let lineChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#c8ccdb',
            },
            display: true,
            gridLines: {
                color: 'rgba(119, 119, 142, 0.2)',
                zeroLineColor: 'rgba(119, 119, 142, 0.2)'
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: '#77778e',
                min: 0,
                max: 1050,
                stepSize: 150
            },
            display: true,
            gridLines: {
                color:'rgba(119, 119, 142, 0.2)',
			    zeroLineColor: 'rgba(119, 119, 142, 0.2)',
            },
            scaleLabel: {
                display: true,
                labelString: 'Thousands',
                fontColor: 'transparent'
            }
        }]
    },
    legend: {
        display: true,
        labels: {
            fontColor: '#77778e',
        }
    }
}
let graph = JSON.parse(localStorage.getItem("list"))
for (let idx of graph) {

    const sell = idx['amount']['sell_count']    
    let price= idx['amount']['price']     
let count= idx['amount']['count']     
let date= idx['date']     

console.log( date)
}

// export let lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Aug', 'Sep', 'Oct'];
export let lineChartLabels: Label[] = ['Sep'];

export let lineChartType: ChartType = 'line';
export let lineChartLegend = true;
export let lineChartData: ChartDataSets[] = [
    {
        label: 'SellCount',
        data: [, 210, 180, 454, 454, 230, 230, 656, 656, 350, 350, 210, 410],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: '#6259ca',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
    },
    {
        label: 'Price',
        data: [200, 530, 110, 110, 480, 520, 780, 435, 475, 738, 454, 454, 230],
        borderWidth: 3,
        backgroundColor: 'transparent',
        borderColor: 'rgb(183, 179, 220,0.5)',
        pointBackgroundColor: '#ffffff',
        pointRadius: 0,
        borderDash: [7,3]
    },

]


//Bar Charts

export let barChartOptions: ChartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 6,
    responsive: true,
    legend: {
        position: 'bottom',
        display: false,
        
    },
    tooltips: { displayColors: true },
    scales: {
        xAxes: [{
            stacked: true,
            display: false,
            gridLines: {
                display: false,
            }
        }],
        yAxes: [{
            stacked: true,
            ticks: {
                beginAtZero: false,
            },
            display: false,
            gridLines: {
                display: false
            },
            type: 'linear',
        }]
    },
}
export let barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
export let barChartType: ChartType = 'bar'
export let barChartData: ChartDataSets[] = [
    {
        label: 'Total Project',
        backgroundColor: '#6259ca',
        borderColor: '#6259ca',
        data: [89, 59, 76, 56, 58, 73, 59, 87, 45, 54, 59, 76, 56,],
        barThickness: 6,
        barPercentage: 4,
        categoryPercentage: 4,
    },
    {
        label: 'On Going',
        backgroundColor: "rgba(204, 204, 204,0.2)",
		borderColor: "rgba(204, 204, 204,0.2)",
        data: [66, 59, 76, 56, 58, 65, 59, 85, 23, 32, 59, 76, 56,],
        barThickness: 6,
        barPercentage: 4,
        categoryPercentage: 4,
    },
]
export let barChartColors: Color[] = [
    {
        backgroundColor: '#6259ca',
        borderColor: '#6259ca',
    },
    {
        backgroundColor: "rgba(204, 204, 204,0.2)",
		borderColor: "rgba(204, 204, 204,0.2)",
    }

]