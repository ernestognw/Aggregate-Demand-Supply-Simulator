var C = 10;
var IN = 10;
var GE = 10;
var IM = 10;
var EX = 10;
var A = 2;
var K = 10;
var L = 10;
var LAS = A*(K+L);
var GDP = C + IN + GE + EX - IM;
var Reference = GDP;
var GDPDisplay = document.getElementById("GDPDisplay");
var LASDisplay = document.getElementById("LASDisplay");
GDPDisplay.value = GDP;
LASDisplay.value = LAS;
var economicVariables = { 
"Aggregate Supply" : [0, 10, 20, 30, 40, 50],
"Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
};

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["0", "10", "20", "30", "40", "50"],
        datasets: [
            {
            label: 'Aggregate Supply',
            data: economicVariables['Aggregate Supply'],
            borderColor: [
                'rgba(54, 162, 235, 0.8)',  // blue
            ],
            backgroundColor: [
                'rgba(0, 0, 0, 0)'   // transparent
            ]
        },
            {
            label: 'Aggregate Demand',
            data: economicVariables['Aggregate Demand'],
            borderColor: [
                'rgba(153, 102, 255, 0.8)', // purple
            ],
            backgroundColor: [
                'rgba(0, 0, 0, 0)'   // transparent
            ]
        },  
        ],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Price Levels'
                }
            }],
            xAxes: [{
                stacked: true,
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Real GDP'
                }
            }]
        }
    },
});

$(document).on('click', '#update', function(){
    var difference = Reference - GDP;
    economicVariables = { 
        "Aggregate Supply" : [0-difference, 10-difference, 20-difference, 30-difference, 40-difference, 50-difference],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["0"].data = economicVariables['Aggregate Supply'];
    window.myChart.update();
});

$(document).on('click', '#Consumption button', function() {    
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    GDP = GDP - C;
    C = newVal;
    GDP = GDP + C;
    GDPDisplay.value = GDP;
    economicVariables = { 
        "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["1"].data = economicVariables['Aggregate Demand'];
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

$(document).on('click', '#Investment button', function() {
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    GDP = GDP - IN;
    IN = newVal;
    GDP = GDP + IN;
    GDPDisplay.value = GDP;
    economicVariables = { 
        "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["1"].data = economicVariables['Aggregate Demand'];
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

$(document).on('click', '#GExpenditures button', function() {    
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    GDP = GDP - GE;
    GE = newVal;
    GDP = GDP + GE;
    GDPDisplay.value = GDP;
    economicVariables = { 
        "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["1"].data = economicVariables['Aggregate Demand'];
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

$(document).on('click', '#Imports button', function() {    
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    GDP = GDP + IM;
    IM = newVal;
    GDP = GDP - IM;
    GDPDisplay.value = GDP;
    economicVariables = { 
        "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["1"].data = economicVariables['Aggregate Demand'];
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

$(document).on('click', '#Exports button', function() {    
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    GDP = GDP - EX;
    EX = newVal;
    GDP = GDP + EX;
    GDPDisplay.value = GDP;
    economicVariables = { 
        "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["1"].data = economicVariables['Aggregate Demand'];
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

$(document).on('click', '#Technology button', function() {    
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseFloat(oldValue) + 0.1;
    } else {
        if (oldValue > 0.1) {
            newVal = parseFloat(oldValue) - 0.1;
        } else {
            newVal = 0.1;
        }
    }
    console.log(newVal);
    LAS = LAS / A;
    A = newVal;
    LAS = LAS * A;
    LASDisplay.value = LAS;
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

$(document).on('click', '#Labour button', function() {    
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    LAS = LAS/A - L;
    L = newVal;
    LAS = (LAS + L)*A;
    LASDisplay.value = LAS;
    economicVariables = { 
        "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["1"].data = economicVariables['Aggregate Demand'];
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

$(document).on('click', '#Capital button', function() {    
    var btn = $(this),
    oldValue = btn.closest('.number-spinner').find('input').val().trim(),
    newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    LAS = LAS/A - K;
    K = newVal;
    LAS = (LAS + K) * A;
    LASDisplay.value = LAS;
    economicVariables = { 
        "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
        "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
    };
    window.myChart.config.data.datasets["1"].data = economicVariables['Aggregate Demand'];
    window.myChart.update();
    btn.closest('.number-spinner').find('input').val(newVal);
});

// Intersection Plugin

Chart.plugins.register({
    afterDatasetsDraw: function(chartInstance, easing) {

        var Y = chartInstance.scales['y-axis-0'];
        var X = chartInstance.scales['x-axis-0'];

        zeroPointY = Y.top + ((Y.bottom - Y.top) / (Y.ticks.length -1) * Y.zeroLineIndex);
        zeroPointX = Y.right;
        yScale = (Y.bottom - Y.top) / (Y.end - Y.start);
        xScale = (X.right - X.left) / (X.ticks.length - 1);

        var intersects = findIntersects(economicVariables['Aggregate Demand'], economicVariables['Aggregate Supply']);
        var context = chartInstance.chart.ctx;
            
        intersects.forEach(function (result, idx) {
            // Write Long-run Aggregate Supply Line
            context.beginPath();
            context.strokeStyle = 'rgba(75, 192, 192, 0.8)',  // green
            context.lineWidth = 3;
            context.moveTo((LAS/10 * xScale) + zeroPointX, Y.bottom);
            context.lineTo((LAS/10 * xScale) + zeroPointX, Y.top);
            context.stroke();
            // Write label
            context.fillStyle = 'rgb(75, 192, 192)';  // green
            context.textAlign = 'center';
            context.fillText('LAS', (LAS/10 * xScale) + zeroPointX + 20, (Y.bottom - Y.top) / 8);
            context.closePath();
            // Write Intersection Point
            context.beginPath();
            context.fillStyle = 'red';
            context.arc((result.x * xScale) + zeroPointX, (Y.end - Y.start) - (result.y * yScale) - ((Y.end - Y.start) - zeroPointY), 5, 0, 2 * Math.PI, true);
            context.fill();
            context.closePath();
            // Move Aggregate Supply Curve to Equilibrium
            // findIntersects((4 * xScale), economicVariables['Aggregate Supply']);

            // economicVariables = { 
            //     "Aggregate Supply" : [0, 10, 20, 30, 40, 50],
            //     "Aggregate Demand" : [50+GDP, 40+GDP, 30+GDP, 20+GDP, 10+GDP, 0+GDP],
            // };
            // window.myChart.config.data.datasets["0"].data = economicVariables['Aggregate Supply'];
        });
    }
});


function findIntersects(line1, line2)
{
    intersects = [];
            
    line1.forEach(function(val,idx) {
        var line1StartX = idx;
        var line1StartY = line1[idx];
        var line1EndX = idx + 1;
        var line1EndY = line1[idx + 1];
        var line2StartX = idx;
        var line2StartY = line2[idx];
        var line2EndX = idx + 1;
        var line2EndY = line2[idx+1];
        
        result = checkLineIntersection(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY);
        intersects.push(result);
    });
    
    return intersects;
}

function checkLineIntersection(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
    // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
    var denominator, a, b, numerator1, numerator2, result = {
        x: null,
        y: null,
    };
    denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
    if (denominator == 0) {
        return result;
    }
    a = line1StartY - line2StartY;
    b = line1StartX - line2StartX;
    numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
    numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
    a = numerator1 / denominator;
    b = numerator2 / denominator;

    // if we cast these lines infinitely in both directions, they intersect here:
    result.x = line1StartX + (a * (line1EndX - line1StartX));
    result.y = line1StartY + (a * (line1EndY - line1StartY));
/*
        // it is worth noting that this should be the same as:
        x = line2StartX + (b * (line2EndX - line2StartX));
        y = line2StartX + (b * (line2EndY - line2StartY));
        */
    return result;
};

// 'rgba(255, 206, 86, 0.2)',  // yellow
// 'rgba(75, 192, 192, 0.2)',  // green
// 'rgba(153, 102, 255, 0.2)', // purple
// 'rgba(255, 159, 64, 0.2)',  // orange
// 'rgba(255, 99, 132, 0.2)'   // red
