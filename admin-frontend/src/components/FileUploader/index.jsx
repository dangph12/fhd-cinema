import { Row, Col, Card } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import useFileUploader from './useFileUploader';
import IconifyIcon from '../wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
const FileUploader = ({
  showPreview = true,
  onFileUpload,
  icon,
  extraText,
  text
}) => {
  const {
    selectedFiles,
    handleAcceptedFiles,
    removeFile
  } = useFileUploader(showPreview);
  return <>
      <Dropzone onDrop={acceptedFiles => handleAcceptedFiles(acceptedFiles, onFileUpload)}>
        {({
        getRootProps,
        getInputProps
      }) => <div className="dropzone d-flex justify-content-center align-items-center" style={{
        height: '250px'
      }}>
            <div className="dz-message needsclick" {...getRootProps()}>
              <input {...getInputProps()} />
              {icon && <IconifyIcon icon={icon} className={`text-muted h1`} />}
              <h3>{text}</h3>
              <span className="text-muted fs-13">{extraText}</span>
            </div>
          </div>}
      </Dropzone>

      {/* {showPreview && selectedFiles.length > 0 && ( */}
      <div className="dropzone-previews mt-3">
        {(selectedFiles || []).map((file, idx) => {
        const ext = file.name.substr(file.name.lastIndexOf('.') + 1);
        return <Card className="mt-1 mb-0 shadow-none border" key={idx + '-file'}>
              <div className="p-2">
                <Row className="align-items-center">
                  {file.preview && <Col xs="auto">
                      <img data-dz-thumbnail="" className="thumb-xl rounded rounded bg-light" alt={file.name} src={file.preview} />
                    </Col>}
                  {!file.preview && <Col xs="auto">
                      <div className="avatar-sm">
                        <span className="avatar-title bg-primary rounded">{ext.toUpperCase()}</span>
                      </div>
                    </Col>}
                  <Col className="ps-0">
                    <Link to="" className="text-muted fw-bold">
                      {file.name}
                    </Link>
                    <p className="mb-0">
                      <strong>{file.formattedSize}</strong>
                    </p>
                  </Col>
                  <Col className="text-end">
                    <Link to="" className="btn btn-link btn-lg text-muted shadow-none">
                      <IconifyIcon icon="fa6-solid:x" className="text-danger" onClick={() => removeFile(file)} />
                    </Link>
                  </Col>
                </Row>
              </div>
            </Card>;
      })}
      </div>
      {/* )} */}
    </>;
};
export { FileUploader };