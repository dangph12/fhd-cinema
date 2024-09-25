import PageMetaData from '@/components/PageMetaData';
import { Col, Row } from 'react-bootstrap';
import AllFiles from './components/AllFiles';
import FoldersList from './components/FoldersList';
const FileManager = () => {
  return <>
      <PageMetaData title="File Manager" />
      <FoldersList />
      <Row className="justify-content-center">
        <Col xs={12}>
          <AllFiles />
        </Col>
      </Row>
    </>;
};
export default FileManager;