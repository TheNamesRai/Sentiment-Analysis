google.charts.load('current', {'packages':['corechart','line']});

      // Draw the pie chart and bar chart when Charts is loaded.
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawChart);
      google.charts.setOnLoadCallback(drawCurveTypes);
      google.charts.setOnLoadCallback(drawCurveTypes);
      google.charts.setOnLoadCallback(drawCurveTypes);
      google.charts.setOnLoadCallback(drawCurveTypes);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['positive', 234],
          ['negative', 226],
        ]);



        var data1 = new google.visualization.DataTable();
        data1.addColumn('string', 'Topping');
        data1.addColumn('number', 'Slices');
        data1.addRows([
          ['galaxy s6', 21],
          ['nexus 6p', 13],
          ['htc m9', 12],
          ['LG G4', 28],
          ['nexus 5x', 26],
          
        ]);


        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Topping');
        data2.addColumn('number', 'Slices');
        data2.addRows([
          ['positive', 21],
          ['negative', 11],
        ]);


        var data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Topping');
        data3.addColumn('number', 'Slices');
        data3.addRows([
          ['galaxy s6', 21],
          ['nexus 6p', 13],
          ['htc m9', 12],
          ['LG G4', 28],
          ['nexus 5x', 26],
          
        ]);

        
        var data4 = new google.visualization.DataTable();
        data4.addColumn('string', 'Topping');
        data4.addColumn('number', 'Slices');
        data4.addRows([
          ['positive', 204],
          ['negative', 156],
        ]);



        var data5 = new google.visualization.DataTable();
        data5.addColumn('string', 'Topping');
        data5.addColumn('number', 'Slices');
        data5.addRows([
          ['galaxy s7', 20],
          ['nexus 6p', 23],
          ['iphone 6s', 17],
          ['LG G5', 16],
          ['one plus', 11],
          
        ]);


        var data6 = new google.visualization.DataTable();
        data6.addColumn('string', 'Topping');
        data6.addColumn('number', 'Slices');
        data6.addRows([
          ['positive', 56],
          ['negative', 63],
        ]);


        var data7 = new google.visualization.DataTable();
        data7.addColumn('string', 'Topping');
        data7.addColumn('number', 'Slices');
        data7.addRows([
          ['iphone 6s', 21],
          ['galaxy s7', 13],
          ['nexus 6p', 12],
          ['LG G5', 28],
          ['iphone 6', 26],
          
        ]);



        var piechart_options = {title:'Pie Chart: what users thought about this:',
                       width:400,
                       pieSliceText: 'label',
                       is3D: true,
                       
                       height:150};
        var piechart = new google.visualization.PieChart(document.getElementById('piechart_div_per'));
        piechart.draw(data, piechart_options);

        var barchart_options = {title:'Barchart: Top 5 phones in performance(in %):',
                       width:400,
                       height:150,
                       is3D: true,
                       
                       legend: 'none'};
        var barchart = new google.visualization.BarChart(document.getElementById('barchart_div_per'));
        barchart.draw(data1, barchart_options);

        var piechart_options_1 = {title:'Pie Chart: what users thought about this:',
                       width:400,
                       pieSliceText: 'label',
                       is3D: true,
                       
                       height:150};
        var piechart_1 = new google.visualization.PieChart(document.getElementById('piechart_div_bat'));
        piechart_1.draw(data2, piechart_options_1);

        var barchart_options_1 = {title:'Barchart: what other people also consider(in %):',
                       width:400,
                       height:150,
                       is3D: true,
                       
                       legend: 'none'};
        var barchart_1 = new google.visualization.BarChart(document.getElementById('barchart_div'));
        barchart_1.draw(data3, barchart_options_1);

        var piechart_options_2 = {title:'Pie Chart: what users thought about this:',
                       width:400,
                       pieSliceText: 'label',
                       is3D: true,
                       
                       height:150};
        var piechart_2 = new google.visualization.PieChart(document.getElementById('piechart_div'));
        piechart_2.draw(data4, piechart_options_2);

        var barchart_options_2 = {title:'Barchart: Top 5 phones in camera(in %):',
                       width:400,
                       height:150,
                       is3D: true,
                       
                       legend: 'none'};
        var barchart_2 = new google.visualization.BarChart(document.getElementById('barchart_div_cam'));
        barchart_2.draw(data5, barchart_options_2);

        var piechart_options_3 = {title:'Pie Chart: what users thought about this:',
                       width:400,
                       pieSliceText: 'label',
                       is3D: true,
                       
                       height:150};
        var piechart_3 = new google.visualization.PieChart(document.getElementById('piechart_div_cam'));
        piechart_3.draw(data6, piechart_options_3);

        var barchart_options_3 = {title:'Barchart: Top 5 phones in battery(in %):',
                       width:400,
                       height:150,
                       is3D: true,
                       
                       legend: 'none'};
        var barchart_3 = new google.visualization.BarChart(document.getElementById('barchart_div_bat'));
        barchart_3.draw(data7, barchart_options_3);
      }
      

      function drawCurveTypes() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', '+ve');
      data.addColumn('number', '-ve');

      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);


      var data1 = new google.visualization.DataTable();
      data1.addColumn('number', 'X');
      data1.addColumn('number', '+ve');
      data1.addColumn('number', '-ve');

      data1.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);


      var data2 = new google.visualization.DataTable();
      data2.addColumn('number', 'X');
      data2.addColumn('number', '+ve');
      data2.addColumn('number', '-ve');

      data2.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);


      var data3 = new google.visualization.DataTable();
      data3.addColumn('number', 'X');
      data3.addColumn('number', '+ve');
      data3.addColumn('number', '-ve');

      data3.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);


      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);

      var options_1 = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };


      var chart_1 = new google.visualization.LineChart(document.getElementById('chart_div_cam'));
      chart_1.draw(data1, options_1);

      var options_2 = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };

      var chart_2 = new google.visualization.LineChart(document.getElementById('chart_div_per'));
      chart_2.draw(data2, options_2);

      var options_3 = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };


      var chart_3 = new google.visualization.LineChart(document.getElementById('chart_div_bat'));
      chart_3.draw(data3, options_3);


    }



    


    