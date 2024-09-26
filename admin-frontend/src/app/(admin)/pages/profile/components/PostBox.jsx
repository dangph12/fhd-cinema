import { Button, Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
const PostBox = () => {
  const postSchema = yup.object({
    message: yup.string().required('please enter your message')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(postSchema)
  });
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <div className="d-flex align-items-center">
              <img src={avatar10} className="thumb-md align-self-center rounded-circle" alt="..." />
              <div className="flex-grow-1 ms-2">
                <h5 className="m-0 fs-14">Anderson Vanhron</h5>
                <p className="text-muted mb-0 fs-12">online</p>
              </div>
            </div>
          </Col>
          <Col xs="auto">
            <div className="d-none d-sm-inline-block align-self-center">
              <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Call</Tooltip>}>
                <span role="button" className="me-2 text-muted">
                  <IconifyIcon icon="iconoir:media-image" className="fs-18" />
                </span>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Attachment</Tooltip>}>
                <span role="button" className="me-2 text-muted">
                  <IconifyIcon icon="iconoir:attachment" className="fs-18" />
                </span>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Delete</Tooltip>}>
                <span role="button" className="me-2 text-muted">
                  <IconifyIcon icon="iconoir:calendar" className="fs-18" />
                </span>
              </OverlayTrigger>
              <Dropdown className="d-inline-block">
                <DropdownToggle as="a" className="arrow-none text-muted" role="button" aria-haspopup="false" aria-expanded="true">
                  <IconifyIcon icon="iconoir:more-vert" className="fs-18" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end pb-0">
                  <DropdownItem href="#">Profile</DropdownItem>
                  <DropdownItem href="#">Add archive</DropdownItem>
                  <DropdownItem href="#">Delete</DropdownItem>
                  <DropdownItem className="text-danger" href="#">
                    Block
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <form onSubmit={handleSubmit(() => {})}>
          <div>
            <TextAreaFormInput name="message" className="mb-2" control={control} placeholder="Write here.." rows={5} />
            <Button type="submit" variant="primary">
              Post
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>;
};
export default PostBox;