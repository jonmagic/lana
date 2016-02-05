import Two from "./two.js"

var multiplier = 50000;
var remote = require('remote');
var dialog = remote.require('dialog');
var fs = require('fs');
var csv = require('csv');
var LOW = false;
var HIGH = true;
var openDialogOptions = {
  filters: [
    {
      name: 'csv',
      extensions: ['csv']
    }
  ]
}
var elem = document.getElementById("channel_00");

function openFile () {
  dialog.showOpenDialog(openDialogOptions, function (fileNames) {
    if (fileNames === undefined) return;
    var fileName = fileNames[0];
    // var fileName = "/Users/jonmagic/Projects/jerry/saleae_captures/inserting-cd.csv";
    fs.readFile(fileName, 'utf-8', function (err, data) {
      csv.parse(data, function(err, data) {
        if(data[0][0] == "Time[s]") data.shift();
        var line_coordinates = [];
        var x1 = 0;
        var y1 = 0;

        var rows = data.map(function(item) {
          var timestamp = parseFloat(item[0]);
          var value = item[1].replace(/ /g,'') == "1" ? HIGH : LOW;
          var x2 = timestamp * multiplier;
          var y2 = value ? 0 : 200;

          line_coordinates.push([x1, y1, x2, y1]);
          line_coordinates.push([x2, y1, x2, y2]);

          x1 = x2;
          y1 = y2;

          return [timestamp, value]
        })

        var last_timestamp = rows[rows.length-1][0];
        var width = last_timestamp * multiplier;
        var two = new Two({ width: width, height: 200 }).appendTo(elem);

        function drawLine(x1, y1, x2, y2) {
          var line = two.makeLine(x1, y1, x2, y2);
          line.stroke = 'orangered'; // Accepts all valid css color
          line.linewidth = 1;
        }

        line_coordinates.forEach(function(coordinates) {
          drawLine.apply(this, coordinates);
        })

        two.update();
        elem.scrollLeft = rows[1][0] * multiplier - 100;
      })
    });
  });
}
