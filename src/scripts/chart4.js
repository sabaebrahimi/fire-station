const Chart = require('chart.js');
let ctx = document.getElementById('combust-chart');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [7, 13, 2, 10],
            backgroundColor: 'rgba(255, 197, 0, 0.4)',
            borderColor: 'rgb(255, 197, 0)',
        },
        { fill: 'origin' },
        ],
        labels: ['1', '2', '3', '4']
    },
    options: {
        legend: {
            display: false
        },
        plugins: {
            filler: {
                propagate: true
            }
        },
        elements: {
            line: {
                tension: 0.0001
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
        }
    }
});