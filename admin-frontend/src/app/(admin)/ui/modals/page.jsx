import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'react-bootstrap';
import { useState } from 'react';
import { colorVariants } from '@/context/constants';
import { toSentenceCase } from '@/utils/change-casing';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import btcImage from '@/assets/images/extra/card/btc.png';
import findImage from '@/assets/images/extra/card/find.png';
import PageMetaData from '@/components/PageMetaData';
const OptionalSizes = () => {
  const {
    isTrue,
    toggle
  } = useToggle();
  const {
    isTrue: defaultModalOpen,
    toggle: defaultModalToggle
  } = useToggle();
  const {
    isTrue: lgModalOpen,
    toggle: lgModalToggle
  } = useToggle();
  const {
    isTrue: xlModalOpen,
    toggle: xlModalToggle
  } = useToggle();
  const {
    isTrue: centerModalOpen,
    toggle: centerModalToggle
  } = useToggle();
  const {
    isTrue: scrollModalOpen,
    toggle: scrollModalToggle
  } = useToggle();
  return <ComponentContainerCard title="Optional Sizes">
      <div className="table-responsive">
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th>Size</th>
              <th>Class</th>
              <th>Modal max-width</th>
              <th>Modal Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small</td>
              <td>
                <code>.modal-sm</code>
              </td>
              <td>
                <code>300px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={toggle}>
                  Launch demo modal
                </Button>
              </td>
            </tr>
            <tr>
              <td>Default</td>
              <td className="text-muted">None</td>
              <td>
                <code>500px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={defaultModalToggle}>
                  Launch demo modal
                </Button>
              </td>
            </tr>
            <tr>
              <td>Large</td>
              <td>
                <code>.modal-lg</code>
              </td>
              <td>
                <code>800px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={lgModalToggle}>
                  Launch demo modal
                </Button>
              </td>
            </tr>
            <tr>
              <td>Extra large</td>
              <td>
                <code>.modal-xl</code>
              </td>
              <td>
                <code>1140px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={xlModalToggle}>
                  Launch demo modal
                </Button>
              </td>
            </tr>
            <tr>
              <td>Default (Center Modal)</td>
              <td className="text-muted">
                <code>.modal-dialog-centered</code>
              </td>
              <td>
                <code>500px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={centerModalToggle}>
                  Launch demo modal
                </Button>
              </td>
            </tr>
            <tr>
              <td>Default (Scroll Modal)</td>
              <td className="text-muted">
                <code>.modal-dialog-scrollable</code>
              </td>
              <td>
                <code>500px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={scrollModalToggle}>
                  Launch demo modal
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal show={isTrue} onHide={toggle} size="sm" className="fade bd-example-modal-sm" id="exampleModalSmall" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <ModalHeader closeButton>
          <h6 className="modal-title m-0" id="mySmallModalLabel">
            Small Modal
          </h6>
        </ModalHeader>
        <div className="text-center py-3">
          <img src={avatar5} alt="avatar" className="thumb-lg rounded-circle d-block mx-auto mb-1" />
          <h5 className="mb-1">Good Morning!</h5>
          <p className="mb-0 text-muted">Hi, Aaron Gish ! Congratulations.</p>
        </div>
        <ModalFooter>
          <Button variant="secondary" size="sm" type="button" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" size="sm" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
      <Modal show={defaultModalOpen} onHide={defaultModalToggle} className="fade" id="exampleModalDefault" tabIndex={-1} role="dialog" aria-labelledby="exampleModalDefaultLabel" aria-hidden="true">
        <ModalHeader closeButton>
          <h6 className="modal-title m-0" id="exampleModalDefaultLabel">
            Default Modal
          </h6>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={3} className="text-center align-self-center">
              <img src={btcImage} alt="avatar" className="img-fluid" />
            </Col>
            <Col lg={9}>
              <h5>Crypto Market Services</h5>
              <span className="badge bg-light text-dark">Disable Services</span>
              <small className="text-muted ms-2">07 Oct 2024</small>
              <ul className="mt-2 mb-0">
                <li>Lorem Ipsum is dummy text.</li>
                <li>It is a long established reader.</li>
                <li>Contrary to popular belief, Lorem simply.</li>
              </ul>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" size="sm" type="button" onClick={defaultModalToggle}>
            Close
          </Button>
          <Button variant="primary" size="sm" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" show={lgModalOpen} onHide={lgModalToggle} className="fade" id="exampleModalLarge" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <ModalHeader closeButton>
          <h6 className="modal-title m-0" id="myLargeModalLabel">
            Large Modal
          </h6>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={4} className="text-center">
              <img src={findImage} alt="avatar" className="img-fluid" />
            </Col>
            <Col lg={8} className="align-self-center">
              <div className="error-content text-center">
                <h1 className="fw-bold display-5">404!</h1>
                <h4 className=" mb-3">Looks like you&apos;ve got lost...</h4>
                <Button variant="primary" type="button">
                  Back to Dashboard
                </Button>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Modal size="xl" show={xlModalOpen} onHide={xlModalToggle} className="fade" id="bd-example-modal-xl" tabIndex={-1} role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <ModalHeader closeButton>
          <h6 className="modal-title m-0" id="myExtraLargeModalLabel">
            Extra Large Modal
          </h6>
        </ModalHeader>
        <ModalBody>
          <h5 className="mt-0">Overflowing text to show scroll behavior</h5>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
            Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" size="sm" type="button" onClick={xlModalToggle}>
            Close
          </Button>
          <Button variant="primary" size="sm" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
      <Modal show={centerModalOpen} onHide={centerModalToggle} centered className="fade" id="exampleModalCenter" tabIndex={-1} role="dialog">
        <ModalHeader closeButton>
          <h6 className="modal-title m-0" id="exampleModalCenterTitle">
            Center Modal
          </h6>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={3} className="text-center align-self-center">
              <img src={btcImage} alt="avatar" className="img-fluid" />
            </Col>
            <Col lg={9}>
              <h5>Crypto Market Services</h5>
              <span className="badge bg-light text-dark">Disable Services</span>
              <small className="text-muted ms-2">07 Oct 2024</small>
              <ul className="mt-2 mb-0">
                <li>Lorem Ipsum is dummy text.</li>
                <li>It is a long established reader.</li>
                <li>Contrary to popular belief, Lorem simply.</li>
              </ul>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" size="sm" type="button" onClick={centerModalToggle}>
            Close
          </Button>
          <Button variant="primary" size="sm" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
      <Modal show={scrollModalOpen} onHide={scrollModalToggle} scrollable className="fade">
        <ModalHeader closeButton>
          <h6 className="modal-title m-0" id="exampleModalScrollableTitle">
            Center Modal
          </h6>
        </ModalHeader>
        <ModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" size="sm" type="button" onClick={scrollModalToggle}>
            Close
          </Button>
          <Button variant="primary" size="sm" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </ComponentContainerCard>;
};
const FullscreenModals = () => {
  const [fullscreen, setFullscreen] = useState(undefined);
  const [show, setShow] = useState(false);
  const handleShow = breakpoint => {
    setFullscreen(breakpoint);
    setShow(true);
  };
  return <ComponentContainerCard title="Fullscreen Modal">
      <div className="table-responsive">
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th>Class</th>
              <th>Availability</th>
              <th>Modal Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>.modal-fullscreen</code>
              </td>
              <td>Always</td>
              <td>
                <Button variant="primary" type="button" size="sm" onClick={() => setShow(true)}>
                  Full screen
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <code>.modal-fullscreen-sm-down</code>
              </td>
              <td>
                Below <code>576px</code>
              </td>
              <td>
                <Button variant="primary" type="button" size="sm" onClick={() => handleShow('sm-down')}>
                  Full screen below sm
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <code>.modal-fullscreen-md-down</code>
              </td>
              <td>
                Below <code>768px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleShow('md-down')}>
                  Full screen below md
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <code>.modal-fullscreen-lg-down</code>
              </td>
              <td>
                Below <code>992px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleShow('lg-down')}>
                  {' '}
                  Full screen below lg{' '}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <code>.modal-fullscreen-xl-down</code>
              </td>
              <td>
                Below <code>1200px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleShow('xl-down')}>
                  {' '}
                  Full screen below xl{' '}
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <code>.modal-fullscreen-xxl-down</code>
              </td>
              <td>
                Below <code>1400px</code>
              </td>
              <td>
                <Button variant="primary" size="sm" onClick={() => handleShow('xxl-down')}>
                  Full screen below xxl
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal show={show} fullscreen={fullscreen ?? true} onHide={() => setShow(false)} className="fade" id="exampleModalFullscreen" tabIndex={-1}>
        <ModalHeader closeButton>
          <h6 className="modal-title" id="exampleModalFullscreenLabel">
            Full screen modal
          </h6>
        </ModalHeader>
        <ModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          {!fullscreen && <>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </>}
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" size="sm" type="button" onClick={() => setShow(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </ComponentContainerCard>;
};
const ThemesModal = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle();
  const [className, setClassName] = useState('');

  // Opens modal with custom class
  const openModalWithClass = className => {
    setClassName(className);
    toggle();
  };
  return <ComponentContainerCard title="Theme Color Modal">
      <div className="button-items d-flex flex-wrap gap-2">
        {colorVariants.slice(0, 7).map((color, idx) => <Button key={idx} variant={color} onClick={() => openModalWithClass(color)}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
      <Modal show={isOpen} onHide={toggle} className="fade" id="exampleModalPrimary" tabIndex={-1} role="dialog">
        <ModalHeader className={`bg-${className}`} closeButton>
          <h6 className="modal-title m-0 text-white" id="exampleModalPrimary1">
            Primary Modal
          </h6>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg={3} className="text-center align-self-center">
              <img src={btcImage} alt="avatar" className="img-fluid" />
            </Col>
            <Col lg={9}>
              <h5>Crypto Market Services</h5>
              <span className="badge bg-light text-dark">Disable Services</span>
              <small className="text-muted ms-2">07 Oct 2024</small>
              <ul className="mt-2 mb-0">
                <li>Lorem Ipsum is dummy text.</li>
                <li>It is a long established reader.</li>
                <li>Contrary to popular belief, Lorem simply.</li>
              </ul>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" size="sm" onClick={toggle}>
            Close
          </Button>
          <Button variant={className} size="sm">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </ComponentContainerCard>;
};
const Modals = () => {
  return <>
      <PageMetaData title="Modals" />
      <Row className="justify-content-center">
        <Col>
          <OptionalSizes />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <FullscreenModals />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <ThemesModal />
        </Col>
      </Row>
    </>;
};
export default Modals;