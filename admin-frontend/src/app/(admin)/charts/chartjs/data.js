const lineChartConfig = {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Report',
      data: [12, 19, 13, 9, 12, 11, 12, 19, 13, 9, 12, 11],
      backgroundColor: ['#22c55e'],
      borderColor: ['#22c55e'],
      borderWidth: 2,
      borderDash: [3],
      borderJoinStyle: 'round',
      borderCapStyle: 'round',
      pointBorderColor: '#22c55e',
      pointRadius: 3,
      pointBorderWidth: 1,
      tension: 0.3
    }, {
      label: 'Monthly Report',
      data: [8, 12, 15, 11, 8, 14, 16, 13, 10, 7, 19, 16],
      backgroundColor: ['#fac146'],
      borderColor: ['#fac146'],
      borderWidth: 2,
      borderDash: [0],
      borderJoinStyle: 'round',
      borderCapStyle: 'round',
      pointBorderColor: '#fac146',
      pointRadius: 3,
      pointBorderWidth: 1,
      tension: 0.3
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#7c8ea7',
          font: {
            family: 'Be Vietnam Pro'
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value) {
            return '$' + value;
          },
          color: '#7c8ea7'
        },
        grid: {
          // drawBorder: 'border',
          color: 'rgba(132, 145, 183, 0.15)'
          // borderDash: [3],
          // borderColor: 'rgba(132, 145, 183, 0.15)',
        }
        // beginAtZero: true,
      },
      x: {
        ticks: {
          color: '#7c8ea7'
        },
        grid: {
          display: false,
          color: 'rgba(132, 145, 183, 0.09)'
          // borderDash: [3],
          // borderColor: 'rgba(132, 145, 183, 0.09)',
        }
      }
    }
  }
};
const donutChartConfig = {
  type: 'doughnut',
  data: {
    labels: ['Desktops', 'Laptop', 'Tablets', 'Mobiles'],
    datasets: [{
      data: [80, 50, 100, 121],
      backgroundColor: ['#f67f7f', '#7777f0', '#fac146', '#22c55e'],
      // cutout: 100,
      radius: 100,
      borderColor: 'transparent',
      borderRadius: 0,
      hoverBackgroundColor: ['#4d79f6', '#ff5da0', '#e0e7fd', '#4ac7ec']
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#7c8ea7',
          font: {
            family: 'Be Vietnam Pro'
          }
        }
      }
    }
  }
};
const barChartConfig = {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Report',
      data: [12, 19, 13, 9, 12, 11, 12, 19, 13, 9, 12, 11],
      borderRadius: 100,
      borderSkipped: false,
      backgroundColor: '#00a6cb',
      borderColor: '#00a6cb',
      borderWidth: 1,
      indexAxis: 'x',
      barThickness: 15,
      grouped: true,
      maxBarThickness: 9,
      barPercentage: 50
    }, {
      label: 'Monthly Report',
      data: [8, 12, 15, 11, 8, 14, 16, 13, 10, 7, 19, 16],
      borderRadius: 100,
      borderSkipped: false,
      backgroundColor: '#fac146',
      borderColor: '#fac146',
      borderWidth: 1,
      indexAxis: 'x',
      barThickness: 15,
      grouped: true,
      maxBarThickness: 9
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#7c8ea7',
          font: {
            family: 'Be Vietnam Pro'
          }
        }
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value) {
            return '$' + value;
          },
          color: '#7c8ea7'
        },
        grid: {
          //  drawBorder: 'border',
          color: 'rgba(132, 145, 183, 0.15)'
          //  borderDash: [3],
          //  borderColor: 'rgba(132, 145, 183, 0.15)',
        }
        //  beginAtZero: true,
      },
      x: {
        ticks: {
          color: '#7c8ea7'
        },
        grid: {
          display: false,
          color: 'rgba(132, 145, 183, 0.09)'
          //  borderDash: [3],
          //  borderColor: 'rgba(132, 145, 183, 0.09)',
        }
      }
    }
  }
};
const polarChartConfig = {
  type: 'polarArea',
  data: {
    labels: ['Desktops', 'Laptop', 'Tablets', 'Mobiles'],
    datasets: [{
      data: [80, 50, 100, 121],
      backgroundColor: ['#4d79f6', '#ff5da0', '#e0e7fd', '#4ac7ec'],
      borderColor: 'transparent',
      hoverBackgroundColor: ['#4d79f6', '#ff5da0', '#e0e7fd', '#4ac7ec']
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#7c8ea7',
          font: {
            family: 'Be Vietnam Pro'
          }
        }
      }
    }
  }
};
const pieChartConfig = {
  type: 'pie',
  data: {
    labels: ['Desktops', 'Laptop', 'Tablets', 'Mobiles'],
    datasets: [{
      data: [80, 50, 100, 121],
      backgroundColor: ['#4d79f6', '#ff5da0', '#e0e7fd', '#4ac7ec'],
      // cutout: 0,
      radius: 100,
      borderColor: 'transparent',
      borderRadius: 0,
      hoverBackgroundColor: ['#4d79f6', '#ff5da0', '#e0e7fd', '#4ac7ec']
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#7c8ea7',
          font: {
            family: 'Be Vietnam Pro'
          }
        }
      }
    }
  }
};
const radarChartConfig = {
  type: 'radar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Report',
      data: [12, 19, 13, 9, 12, 11, 12, 19, 13, 9, 12, 11],
      backgroundColor: ['rgba(11, 81, 183, 0.1)'],
      borderColor: ['rgba(11, 81, 183, 1)'],
      borderWidth: 2,
      borderDash: [3],
      borderJoinStyle: 'round',
      borderCapStyle: 'round',
      pointBorderColor: 'rgba(11, 81, 183, 1)',
      pointRadius: 3,
      pointBorderWidth: 1,
      tension: 0.3,
      fill: true,
      hitRadius: 5
    }, {
      label: 'Monthly Report',
      data: [8, 12, 15, 11, 8, 14, 16, 13, 10, 7, 19, 16],
      backgroundColor: ['rgba(28, 202, 184, 0.1)'],
      borderColor: ['rgba(137, 153, 175, 0.3)'],
      borderWidth: 2,
      borderDash: [0],
      borderJoinStyle: 'round',
      borderCapStyle: 'round',
      pointBorderColor: 'rgba(137, 153, 175, 0.3)',
      pointRadius: 3,
      pointBorderWidth: 1,
      tension: 0.3
    }]
  },
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    },
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(137, 153, 175, 0.3)',
          borderDash: [2]
          // borderColor: [
          //   'rgba(137, 153, 175, 0.3)',
          // ],
        },
        grid: {
          color: 'rgba(137, 153, 175, 0.3)'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#7c8ea7',
          font: {
            family: 'Be Vietnam Pro'
          }
        }
      }
    }
  }
};
export { lineChartConfig, donutChartConfig, barChartConfig, polarChartConfig, pieChartConfig, radarChartConfig };