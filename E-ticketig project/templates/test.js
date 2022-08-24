window.onload = function () {

  var chart = new CanvasJS.Chart("myDiv", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title:{
      text: "Yearly Revenue "
    },
    // axisY: {
    //   title: "Reserves(MMbbl)"
    // },
    data: [{        
      type: "column",  
      showInLegend: true, 
      legendMarkerColor: "grey",
      legendText: "Numbers in Dollars eg: 990$",
      dataPoints: [      
        { y: 300878, label: 2015 },
        { y: 266455,  label: 2016 },
        { y: 169709,  label: 2017 },
        { y: 158400,  label: 2018 },
        { y: 142503,  label: 2019 },
        { y: 101500, label: 2020 },
        { y: 97800,  label: 2021 },
        { y: 80000,  label: 2022 }
      ]
    }]
  });
  chart.render();
  
