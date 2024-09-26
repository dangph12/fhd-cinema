import { Circle, CircleMarker, FeatureGroup, LayerGroup, LayersControl, MapContainer, Marker, Polygon, Polyline, Popup, Rectangle, Tooltip } from 'react-leaflet';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Col, Row } from 'react-bootstrap';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useMemo, useState } from 'react';
const LeafletQuickMap = () => {
  const position = [51.505, -0.09];
  const polyline = [[51.505, -0.09], [51.51, -0.1], [51.51, -0.12]];
  const multiPolyline = [[[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]], [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]]];
  const fillBlueOptions = {
    fillColor: 'blue'
  };
  const limeOptions = {
    color: 'lime'
  };
  const redOptions = {
    color: 'red'
  };
  return <ComponentContainerCard title="Leaflet Quick Start Guide">
      <div style={{
      height: 400
    }}>
        <MapContainer center={position} maxZoom={18} zoom={13} scrollWheelZoom={true} style={{
        height: '400px'
      }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Circle center={position} pathOptions={fillBlueOptions} radius={200} />
          <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
            <Popup>Popup in CircleMarker</Popup>
          </CircleMarker>
          <Polyline pathOptions={limeOptions} positions={polyline} />
          <Polyline pathOptions={limeOptions} positions={multiPolyline} />
        </MapContainer>
      </div>
    </ComponentContainerCard>;
};
const BoundsExtendMap = () => {
  const position = [51.505, -0.09];
  const rectangle = [[51.49, -0.08], [51.5, -0.06]];
  const blackOptions = {
    color: 'blue'
  };
  return <ComponentContainerCard title="Bounds Extend">
      <div style={{
      height: 400
    }}>
        <MapContainer center={position} maxZoom={18} zoom={13} scrollWheelZoom={true} style={{
        height: '400px'
      }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Rectangle bounds={rectangle} pathOptions={blackOptions} />
        </MapContainer>
      </div>
    </ComponentContainerCard>;
};
const VectorBoundMap = () => {
  const position = [39.69596043694606, -104.95084762573242];
  const polyline = [[39.70348880963439, -104.98603820800781], [39.69926245589766, -104.95582580566406], [39.67918374111695, -104.94483947753906], [39.663856582926165, -104.95307922363281], [39.66279941218785, -104.9867248535156], [39.70348880963439, -104.98603820800781]];
  const limeOptions = {
    color: 'skyblue',
    fill: true
  };
  return <ComponentContainerCard title="Vector Bounds">
      <div style={{
      height: 400
    }}>
        <MapContainer center={position} maxZoom={18} zoom={12} scrollWheelZoom={true} style={{
        height: '400px'
      }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polyline pathOptions={limeOptions} positions={polyline} />
        </MapContainer>
      </div>
    </ComponentContainerCard>;
};
const SimpleVectorMap = () => {
  const position = [51.505, -0.09];
  return <ComponentContainerCard title="Simple Vector Map">
      <MapContainer center={position} zoom={13} maxZoom={18} scrollWheelZoom style={{
      height: '400px'
    }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </ComponentContainerCard>;
};
const LayerControlMap = () => {
  const center = [51.505, -0.09];
  const rectangle = [[51.49, -0.08], [51.5, -0.06]];
  return <ComponentContainerCard title="Layers control">
      <MapContainer center={center} zoom={13} maxZoom={18} scrollWheelZoom={true} style={{
      height: 400
    }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Marker with popup">
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle center={center} pathOptions={{
              fillColor: 'blue'
            }} radius={200} />
              <Circle center={center} pathOptions={{
              fillColor: 'red'
            }} radius={100} stroke={false} />
              <LayerGroup>
                <Circle center={[51.51, -0.08]} pathOptions={{
                color: 'green',
                fillColor: 'green'
              }} radius={100} />
              </LayerGroup>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Feature group">
            <FeatureGroup pathOptions={{
            color: 'purple'
          }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </ComponentContainerCard>;
};
const TooltipMap = () => {
  const center = [51.505, -0.09];
  const multiPolygon = [[[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]], [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]]];
  const rectangle = [[51.49, -0.08], [51.5, -0.06]];
  function TooltipCircle() {
    const [clickedCount, setClickedCount] = useState(0);
    const eventHandlers = useMemo(() => ({
      click() {
        setClickedCount(count => count + 1);
      }
    }), []);
    const clickedText = clickedCount === 0 ? 'Click this Circle to change the Tooltip text' : `Circle click: ${clickedCount}`;
    return <Circle center={center} eventHandlers={eventHandlers} pathOptions={{
      fillColor: 'blue'
    }} radius={200}>
        <Tooltip>{clickedText}</Tooltip>
      </Circle>;
  }
  return <ComponentContainerCard title="Tooltips">
      <MapContainer center={center} zoom={13} maxZoom={18} scrollWheelZoom style={{
      height: 400
    }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <TooltipCircle />
        <CircleMarker center={[51.51, -0.12]} pathOptions={{
        color: 'red'
      }} radius={20}>
          <Tooltip>Tooltip for CircleMarker</Tooltip>
        </CircleMarker>
        <Marker position={[51.51, -0.09]}>
          <Popup>Popup for Marker</Popup>
          <Tooltip>Tooltip for Marker</Tooltip>
        </Marker>
        <Polygon pathOptions={{
        color: 'purple'
      }} positions={multiPolygon}>
          <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
        </Polygon>
        <Rectangle bounds={rectangle} pathOptions={{
        color: 'black'
      }}>
          <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
            permanent Tooltip for Rectangle
          </Tooltip>
        </Rectangle>
      </MapContainer>
    </ComponentContainerCard>;
};
const AllLeafletMaps = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <LeafletQuickMap />
        </Col>
        <Col md={6} lg={6}>
          <BoundsExtendMap />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <VectorBoundMap />
        </Col>
        <Col md={6} lg={6}>
          <LayerControlMap />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <TooltipMap />
        </Col>
        <Col md={6} lg={6}>
          <SimpleVectorMap />
        </Col>
      </Row>
    </>;
};
export default AllLeafletMaps;