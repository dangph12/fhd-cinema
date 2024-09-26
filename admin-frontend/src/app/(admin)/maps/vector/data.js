const worldMapOpts = {
  normalizeFunction: 'polynomial',
  zoomOnScroll: false,
  mapBgColor: '#F7F8F9',
  hoverOpacity: 0.7,
  selectedMarkers: [0, 2],
  markersSelectable: true,
  regionStyle: {
    initial: {
      fill: 'rgba(169,183,197, 0.3)',
      fillOpacity: 1
    }
  },
  markers: [{
    name: 'Palestine',
    coords: [31.9474, 35.2272]
  }, {
    name: 'Russia',
    coords: [61.524, 105.3188]
  }, {
    name: 'Canada',
    coords: [56.1304, -106.3468]
  }, {
    name: 'Greenland',
    coords: [71.7069, -42.6043]
  }],
  markerStyle: {
    initial: {
      r: 5,
      // Marker width
      fill: '#22c55e',
      // Marker color
      fillOpacity: 1,
      // The opacity of the marker shape
      stroke: '#FFF',
      // Stroke
      strokeWidth: 1,
      // the stroke width
      strokeOpacity: 0.65 // The stroke opacity
    },
    // All options in initial object can be overitten in hover, selected, selectedHover object as well.
    hover: {
      stroke: 'black',
      cursor: 'pointer',
      strokeWidth: 2
    },
    selected: {
      fill: 'blue'
    },
    selectedHover: {
      fill: 'red'
    }
  },
  labels: {
    markers: {
      render: marker => marker.name
    }
  }
};
const worldMapWithLineOpts = {
  normalizeFunction: 'polynomial',
  mapBgColor: '#F7F8F9',
  zoomOnScroll: false,
  zoomButtons: false,
  markers: [{
    name: 'Greenland',
    coords: [72, -42]
  }, {
    name: 'Canada',
    coords: [56.1304, -106.3468]
  }, {
    name: 'Brazil',
    coords: [-14.235, -51.9253]
  }, {
    name: 'Egypt',
    coords: [26.8206, 30.8025]
  }, {
    name: 'Russia',
    coords: [61, 105]
  }, {
    name: 'China',
    coords: [35.8617, 104.1954]
  }, {
    name: 'United States',
    coords: [37.0902, -95.7129]
  }, {
    name: 'Norway',
    coords: [60.472024, 8.468946]
  }, {
    name: 'Ukraine',
    coords: [48.379433, 31.16558]
  }],
  lines: [{
    from: 'Canada',
    to: 'Egypt'
  }, {
    from: 'Russia',
    to: 'Egypt'
  }, {
    from: 'Greenland',
    to: 'Egypt'
  }, {
    from: 'Brazil',
    to: 'Egypt'
  }, {
    from: 'United States',
    to: 'Egypt'
  }, {
    from: 'China',
    to: 'Egypt'
  }, {
    from: 'Norway',
    to: 'Egypt'
  }, {
    from: 'Ukraine',
    to: 'Egypt'
  }],
  lineStyle: {
    animation: true,
    strokeDasharray: '6 3 6'
  },
  regionStyle: {
    initial: {
      fill: 'rgba(169,183,197, 0.3)',
      fillOpacity: 1
    }
  },
  labels: {
    markers: {
      render: marker => marker.name
    }
  },
  markerStyle: {
    initial: {
      r: 5,
      // Marker width
      fill: '#22c55e',
      // Marker color
      fillOpacity: 1,
      // The opacity of the marker shape
      stroke: '#FFF',
      // Stroke
      strokeWidth: 1,
      // the stroke width
      strokeOpacity: 0.65 // The stroke opacity
    },
    // All options in initial object can be overitten in hover, selected, selectedHover object as well.
    hover: {
      stroke: 'black',
      cursor: 'pointer',
      strokeWidth: 2
    },
    selected: {
      fill: 'blue'
    },
    selectedHover: {
      fill: 'red'
    }
  }
};
export { worldMapOpts, worldMapWithLineOpts };