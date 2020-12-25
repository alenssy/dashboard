var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					data: [10, 12, 17, 25, 20, 30],
					backgroundColor: 'rgba(77, 129, 255, 0.2)',
					borderColor: 'rgba(77, 129, 255, 1)',
					borderWidth: 2,
					pointRadius: 0
				},
				{
					data: [16, 25, 10, 40, 42, 50],
					backgroundColor: 'rgba(77, 129, 255, 0.2)',
					borderColor: 'rgba(77, 129, 255, 1)',
					borderWidth: 2,
					pointRadius: 0
				}]
			},
			options: {
				scales: {
					xAxes:[{
						display: false,
						gridLines:{
							display: false
						}
					}],
					yAxes: [{
						display: false,
						gridLines:{
							display: false
						},
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
            		display: false
        		}
			}
		});
	var wave = document.getElementById('myWaves').getContext('2d');
	var myWaves = new Chart(wave, {
			type: 'line',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					data: [10, 12, 17, 25, 20, 30],
					backgroundColor: 'rgba(77, 129, 255, 0.2)',
					borderColor: 'rgba(77, 129, 255, 1)',
					borderWidth: 2,
					pointRadius: 0
				},
				{
					data: [16, 25, 10, 40, 42, 50],
					backgroundColor: 'rgba(77, 129, 255, 0.2)',
					borderColor: 'rgba(77, 129, 255, 1)',
					borderWidth: 2,
					pointRadius: 0
				}]
			},
			options: {
				scales: {
					xAxes:[{
						display: false,
						gridLines:{
							display: false
						}
					}],
					yAxes: [{
						display: false,
						gridLines:{
							display: false
						},
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
            		display: false
        		}
			}
		});