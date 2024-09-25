import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import { WorldVectorMap } from '@/components/VectorMap';
import { topCountriesData } from '@/assets/data/other';
const WorldTraffic = () => {
  const options = {
    map: 'world',
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
    labels: {
      markers: {
        render: marker => marker.name
      }
    },
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
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Organic Traffic In World</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light">
                <i className="icofont-calendar fs-5 me-1" />
                Today <IconifyIcon icon="la:angle-down" className="ms-1" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                <DropdownItem href="#">Today</DropdownItem>
                <DropdownItem href="#">Last Week</DropdownItem>
                <DropdownItem href="#">Last Month</DropdownItem>
                <DropdownItem href="#">This Year</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <Row>
          <Col lg={8}>
            <WorldVectorMap height="320px" options={options} />
          </Col>
          <Col lg={4} className="align-self-center">
            {topCountriesData.map((country, idx) => <div className="d-flex align-items-center my-3" key={idx}>
                <img src={country.countryFlag} className="thumb-sm align-self-center rounded-circle" alt="..." />
                <div className="flex-grow-1 ms-2">
                  <h5 className="mb-1">{country.count}</h5>
                  <p className="text-muted mb-0">
                    {country.name}. Last Month
                    <span className="text-success">{country.change}%</span>
                  </p>
                </div>
              </div>)}
          </Col>
        </Row>
      </CardBody>
    </Card>;
};
export default WorldTraffic;