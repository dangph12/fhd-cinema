import ComponentContainerCard from '@/components/ComponentContainerCard';
import { WorldVectorMap } from '@/components/VectorMap';
import { Col, Row } from 'react-bootstrap';
import { worldMapOpts, worldMapWithLineOpts } from '../data';
import WorldMap from './WorldMap';
const AllVectorMaps = () => {
  return <>
      <Row className="justify-content-center">
        <Col xs={12}>
          <ComponentContainerCard title="World Map Markers">
            <WorldVectorMap height="350px" width="100%" options={worldMapOpts} />
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12}>
          <ComponentContainerCard title="World Map With Marker Lines">
            <WorldMap height="350px" width="100%" options={worldMapWithLineOpts} />
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default AllVectorMaps;