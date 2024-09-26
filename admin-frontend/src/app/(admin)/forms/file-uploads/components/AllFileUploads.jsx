import { FileUploader } from '@/components/FileUploader';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import FilePondUploader from './FilePondUploader';
const AllFileUploads = () => {
  return <Row className="justify-content-center">
      <Col md={6} lg={6}>
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col>
                <CardTitle as="h4">Custom File Upload</CardTitle>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="pt-0">
            <FileUploader icon="fa6-solid:upload" text="Drop files here or click to upload." extraText="(This is just a demo dropzone. Selected files are not actually uploaded.)" />
          </CardBody>
        </Card>
      </Col>
      <Col md={6} lg={6}>
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col>
                <CardTitle as="h4">File-pond Upload</CardTitle>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="pt-0">
            <FilePondUploader />
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default AllFileUploads;