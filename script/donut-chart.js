const ctx = document.getElementById('donut-chart');
const isLargeScreen = window.innerWidth > 700;

new Chart(ctx, {
    type: 'doughnut',
    plugins: [ChartDataLabels],
    data: {
        labels: [
            'renumeration',
            'digital tools',
            'supplies + equipment',
            'honorariums'
        ],
        datasets: [{
            data: [78, 1, 14, 7],
            backgroundColor: [
                '#d1e487',
                '#e0c59c',
                '#2e6d1e',
                '#ff8253'
            ],
            hoverBackgroundColor: [ 
                '#e3f29a', 
                '#ecd7b8',
                '#3f8a29', 
                '#ffa37a', 
            ],
            hoverOffset: 12,
            borderWidth: 0
        }]
    },
    options: {
        radius: '50%',
        layout: {
            padding: 0
        },
        cutout: '48%',
        plugins: {
            legend: {
                display: false,
            },
            datalabels: isLargeScreen ? {
                color: '#000',
                font: {
                    size: 16
                },
                anchor: 'end',   // move labels outside
                align: 'end',    // align them outward
                textAlign: 'center',
                offset: 15,       // spacing from the arc
                formatter: (value, ctx) => {
                    const label = ctx.chart.data.labels[ctx.dataIndex];
                    const total = ctx.chart.data.datasets[0].data
                        .reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                
                    return `${label}\n${percentage}%`; 
                }
                
            } : false
        } 
    }
    
});
