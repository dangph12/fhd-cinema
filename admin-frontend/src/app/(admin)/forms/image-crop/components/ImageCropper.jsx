import { useRef, useState } from 'react';
import { Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Col, FormControl, Row } from 'react-bootstrap';
import Cropper from 'react-cropper';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import cardImg from '@/assets/images/extra/card/img-1.jpg';
import 'cropperjs/dist/cropper.css';
const ImageCropper = () => {
  const [getData, setGetData] = useState();
  const [cropX, setCropX] = useState(0);
  const [cropY, setCropY] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageRotate, setImageRotate] = useState(0);
  const [scaleX, setScaleX] = useState(0);
  const [scaleY, setScaleY] = useState(0);
  const cropperRef = useRef(null);
  const cropper = cropperRef.current?.cropper;
  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    const ImageX = Math.ceil(cropper?.getData().x ?? 0);
    const ImageY = Math.ceil(cropper?.getData().y ?? 0);
    const ImageWidth = Math.ceil(cropper?.getImageData().width ?? 0);
    const ImageHeight = Math.ceil(cropper?.getImageData().height ?? 0);
    const ImageRotate = Math.ceil(cropper?.getImageData().rotate ?? 0);
    const ScaleX = Math.ceil(cropper?.getImageData().scaleX ?? 0);
    const ScaleY = Math.ceil(cropper?.getImageData().scaleY ?? 0);
    setCropX(ImageX);
    setCropY(ImageY);
    setImageWidth(ImageWidth);
    setImageHeight(ImageHeight);
    setImageRotate(ImageRotate);
    setScaleX(ScaleX);
    setScaleY(ScaleY);
  };
  return <Row className="justify-content-center">
      <Col lg={9}>
        <Card>
          <CardHeader>
            <Row className="align-items-center">
              <Col>
                <CardTitle as="h4">Image Cropper</CardTitle>
              </Col>
            </Row>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="img-container mb-0">
              <Cropper src={cardImg} style={{
              height: 360,
              width: '100%'
            }} initialAspectRatio={16 / 9} dragMode="move" guides={false} crop={onCrop} ref={cropperRef} rotatable />
            </div>
          </CardBody>
        </Card>
        <div id="actions">
          <Card className="docs-buttons">
            <CardBody>
              <div className="btn-group mb-2 me-1">
                <Button variant="light" type="button" title="Move">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("setDragMode", "move")'>
                    <IconifyIcon icon="fa-solid:expand-arrows-alt" />
                  </span>
                </Button>
                <Button variant="light" type="button" data-method="setDragMode" data-option="crop" title="Crop">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("setDragMode", "crop")'>
                    <IconifyIcon icon="fa:crop" />
                  </span>
                </Button>
              </div>
              <div className="btn-group mb-2 me-1">
                <Button variant="light" type="button" onClick={() => cropper.zoom(0.1)} title="Zoom In">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("zoom", 0.1)'>
                    <IconifyIcon icon="fa-solid:search-plus" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.zoom(-0.1)} title="Zoom Out">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("zoom", -0.1)'>
                    <IconifyIcon icon="fa-solid:search-minus" />
                  </span>
                </Button>
              </div>
              <ButtonGroup className="mb-2 me-1">
                <Button variant="light" type="button" onClick={() => cropper.move(-10, 0)} title="Move Left">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("move", -10, 0)'>
                    <IconifyIcon icon="fa-solid:arrow-left" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.move(10, 0)} title="Move Right">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("move", 10, 0)'>
                    <IconifyIcon icon="fa-solid:arrow-right" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.move(0, -10)} title="Move Up">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("move", 0, -10)'>
                    <IconifyIcon icon="fa-solid:arrow-up" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.move(0, 10)} title="Move Down">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("move", 0, 10)'>
                    <IconifyIcon icon="fa-solid:arrow-down" />
                  </span>
                </Button>
              </ButtonGroup>
              <ButtonGroup className="mb-2 me-1">
                <Button variant="light" type="button" onClick={() => cropper.rotate(-45)} title="Rotate Left">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("rotate", -45)'>
                    <IconifyIcon icon="fa-solid:reply" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.rotate(45)} title="Rotate Right">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("rotate", 45)'>
                    <IconifyIcon icon="fa-solid:share" />
                  </span>
                </Button>
              </ButtonGroup>
              <ButtonGroup className="mb-2 me-1">
                <Button variant="light" type="button" onClick={() => cropper.scaleX(-1)} title="Flip Horizontal">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("scaleX", -1)'>
                    <IconifyIcon icon="fa-solid:arrows-alt-h" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.scaleY(-1)} title="Flip Vertical">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("scaleY", -1)'>
                    <IconifyIcon icon="fa-solid:arrows-alt-v" />
                  </span>
                </Button>
              </ButtonGroup>
              <ButtonGroup className="mb-2 me-1">
                <Button variant="light" type="button" onClick={() => cropper.crop()} title="Crop">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("crop")'>
                    <IconifyIcon icon="fa-solid:check" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.clear()} title="Clear">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("clear")'>
                    <IconifyIcon icon="fa-solid:times" />
                  </span>
                </Button>
              </ButtonGroup>
              <ButtonGroup className="mb-2 me-1">
                <Button variant="light" type="button" onClick={() => cropper.disable()} title="Disable">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("disable")'>
                    <IconifyIcon icon="fa-solid:lock" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.enable()} title="Enable">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("enable")'>
                    <IconifyIcon icon="fa-solid:unlock" />
                  </span>
                </Button>
              </ButtonGroup>
              <ButtonGroup className="mb-2 me-1">
                <Button variant="light" type="button" onClick={() => cropper.reset()} title="Reset">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("reset")'>
                    <IconifyIcon icon="fa-solid:redo" />
                  </span>
                </Button>
                <Button variant="light" type="button" className="btn-upload" title="Upload image file">
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title="Import image with Blob URLs">
                    <IconifyIcon icon="fa-solid:upload" className="fas fa-upload" />
                  </span>
                </Button>
                <Button variant="light" type="button" onClick={() => cropper.destroy()} title="Destroy">
                  <span className="docs-tooltip" data-animation="false" title='$().cropper("destroy")'>
                    <IconifyIcon icon="fa-solid:power-off" />
                  </span>
                </Button>
              </ButtonGroup>
              <ButtonGroup className="btn-group btn-group-crop mb-2 me-1">
                <button type="button" className="btn btn-primary" data-method="getCroppedCanvas" data-option='{ "width": 160, "height": 90 }'>
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getCroppedCanvas", { width: 160, height: 90 })'>
                    160×90
                  </span>
                </button>
                <button type="button" className="btn btn-primary" data-method="getCroppedCanvas" data-option='{ "width": 320, "height": 180 }'>
                  <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getCroppedCanvas", { width: 320, height: 180 })'>
                    320×180
                  </span>
                </button>
              </ButtonGroup>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => setGetData(cropper?.imageData)}>
                <span className="docs-tooltip">Get Data</span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" data-method="setData" data-target="#putData">
                <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("setData", data)'>
                  Set Data
                </span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => setGetData(cropper?.containerData)}>
                <span className="docs-tooltip">Get Container Data</span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => setGetData(cropper?.imageData)}>
                <span className="docs-tooltip">Get Image Data</span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => setGetData(cropper?.canvasData)}>
                <span className="docs-tooltip">Get Canvas Data</span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" data-method="setCanvasData" data-target="#putData">
                <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("setCanvasData", data)'>
                  Set Canvas Data
                </span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => setGetData(cropper?.cropBoxData)}>
                <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("getCropBoxData")'>
                  Get Crop Box Data
                </span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" data-method="setCropBoxData" data-target="#putData">
                <span className="docs-tooltip" data-bs-toggle="tooltip" data-animation="false" title='$().cropper("setCropBoxData", data)'>
                  Set Crop Box Data
                </span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => cropper.moveTo(0)}>
                <span className="docs-tooltip">Move to [0,0]</span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => cropper.zoomTo(1)}>
                <span className="docs-tooltip">Zoom to 100%</span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => cropper.rotate(180)}>
                <span className="docs-tooltip">Rotate 180°</span>
              </Button>
              <Button variant="secondary" type="button" className="mb-2 me-1" onClick={() => cropper.scale(-2, -1)}>
                <span className="docs-tooltip" title="cropper.scale(-2, -1)">
                  Scale (-2, -1)
                </span>
              </Button>
              <FormControl as="textarea" id="putData" rows={3} value={JSON.stringify(getData)} placeholder="Get data to here or set data with this value" />
            </CardBody>
          </Card>
        </div>
      </Col>
      <Col lg={3}>
        <Card>
          <CardBody>
            <div className="docs-data">
              <div className="input-group mb-2">
                <span className="input-group-text">X</span>
                <input type="text" className="form-control" id="dataX" placeholder="x" value={cropX} readOnly />
                <span className="input-group-text">px</span>
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text">Y</span>
                <input type="text" className="form-control" id="dataY" placeholder="y" value={cropY} readOnly />
                <span className="input-group-text">px</span>
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text">Width</span>
                <input type="text" className="form-control" id="dataWidth" placeholder="width" value={imageWidth} readOnly />
                <span className="input-group-text">px</span>
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text">Height</span>
                <input type="text" className="form-control" id="dataHeight" placeholder="height" value={imageHeight} readOnly />
                <span className="input-group-text">px</span>
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text">Rotate</span>
                <input type="text" className="form-control" id="dataRotate" placeholder="rotate" value={imageRotate} readOnly />
                <span className="input-group-text">deg</span>
              </div>
              <div className="input-group mb-2">
                <span className="input-group-text">ScaleX</span>
                <input type="text" className="form-control" id="dataScaleX" placeholder="scaleX" value={scaleX} readOnly />
              </div>
              <div className="input-group mb-0">
                <span className="input-group-text">ScaleY</span>
                <input type="text" className="form-control" id="dataScaleY" placeholder="scaleY" value={scaleY} readOnly />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>;
};
export default ImageCropper;