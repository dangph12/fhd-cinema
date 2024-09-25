import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllFolders } from '@/helpers/data';
import { useEffect, useState } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap';
const FolderCard = ({
  folder
}) => {
  const {
    files,
    image,
    progress,
    storage,
    title
  } = folder;
  return <Card>
      <CardBody>
        <Dropdown className="float-end">
          <DropdownToggle as={'a'} className="text-muted fs-16  p-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <IconifyIcon icon="fa6-solid:ellipsis-vertical" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem href="#">View Detail</DropdownItem>
            <DropdownItem href="#">Clear All</DropdownItem>
            <DropdownItem href="#">Delete</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <img src={image} className="me-2 align-self-center thumb-xl" alt="..." />
        <h5 className="fw-semibold mt-3 fs-14">{title}</h5>
        <div className="d-flex justify-content-between my-2">
          <p className="text-muted mb-0 fs-13 fw-semibold">
            <span className="text-dark">{files} </span>Files
          </p>
          <p className="text-muted mb-0 fs-13 fw-semibold">
            <span className="text-dark">{storage} </span>GB
          </p>
        </div>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1 text-truncate">
            <div className="d-flex align-items-center">
              <ProgressBar variant="secondary" now={progress} style={{
              height: 5
            }} className="w-100" />
              <small className="flex-shrink-1 ms-1">{progress}%</small>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const FoldersList = () => {
  const [folders, setFolders] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllFolders();
      setFolders(data);
    })();
  }, []);
  return <Row className="justify-content-center">
      {folders?.map((folder, idx) => <Col md={6} lg={3} key={idx}>
          <FolderCard folder={folder} />
        </Col>)}
    </Row>;
};
export default FoldersList;