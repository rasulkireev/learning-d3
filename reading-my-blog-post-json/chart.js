async function drawLineChart() {
    const dataset = await d3.json("writingsData.js")

    console.log(dataset)
}

drawLineChart()