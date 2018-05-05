var ctx = document.getElementById("nadia");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Accounts", "Management", "Profit", "Loss",],
        datasets: [{
            label: '# of Votes',
            data: [100, 89, 120, 200],
            backgroundColor: [
                'rgba(0, 0, 0, .9)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(100,10,120,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
