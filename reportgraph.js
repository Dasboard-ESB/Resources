
  FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "angulargauge",
    renderAt: "chart-containerPrepared",
    width: "100%",
    height: "200px",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Test Cases Prepared",
        lowerlimit: "0",
        upperlimit: "100",
        showvalue: "1",
        numbersuffix: "%",
        theme: "fusion",
        showtooltip: "0"
      },
      colorrange: {
        color: [
          {
            minvalue: "0",
            maxvalue: "50",
            code: "#F2726F"
          },
          {
            minvalue: "50",
            maxvalue: "75",
            code: "#FFC533"
          },
          {
            minvalue: "75",
            maxvalue: "100",
            code: "#62B58F"
          }
        ]
      },
      dials: {
        dial: [
          {
            value: "81"
          }
        ]
      }
    }
  }).render();
});
