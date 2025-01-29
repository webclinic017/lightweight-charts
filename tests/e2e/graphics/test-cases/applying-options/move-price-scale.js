function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, {
		rightPriceScale: { visible: true },
		leftPriceScale: { visible: false },
		layout: { attributionLogo: false },
	});

	const mainSeries = chart.addSeries(LightweightCharts.LineSeries, {
		lineWidth: 1,
		color: '#ff0000',
		priceScaleId: 'right',
	});

	mainSeries.setData(generateData());

	chart.applyOptions({
		rightPriceScale: { visible: false },
		leftPriceScale: { visible: true },
	});

	mainSeries.applyOptions({ priceScaleId: 'left' });
}
