import clsx from 'clsx';
import { CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getKanbanTaskPriorityVariant, getKanbanTaskTagVariant } from '@/utils/variants-icons';
import { useKanbanContext } from '@/context/useKanbanContext';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
const TaskItem = ({
  task: {
    priority,
    commentsCount,
    completedTasks,
    title,
    totalTasks,
    description,
    image,
    tags,
    sectionId,
    id
  }
}) => {
  const {
    newTaskModal,
    taskForm
  } = useKanbanContext();
  const percentageCompleted = completedTasks / totalTasks * 100;
  return <CardBody>
      <Dropdown className="d-inline-block float-end">
        <DropdownToggle as="span" role="button" className="arrow-none text-secondary">
          <IconifyIcon icon="fa6-solid:ellipsis" className="fs-18" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end" data-popper-placement="bottom-end">
          <DropdownItem onClick={() => newTaskModal.toggle(sectionId, id)} as="span" role="button">
            <IconifyIcon icon="la:pen" className="fs-16 me-1 align-text-bottom" /> Edit
          </DropdownItem>
          <DropdownItem onClick={() => taskForm.deleteRecord(id)} as="span" role="button" className="text-danger">
            <IconifyIcon icon="la:trash" className="fs-16 me-1 align-text-bottom" /> Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <span className={clsx('badge rounded fw-normal px-1 mb-1', `text-${getKanbanTaskPriorityVariant(priority)} bg-${getKanbanTaskPriorityVariant(priority)}-subtle`)}>
        {priority}
      </span>
      <h5 className="my-2 font-14">{title}</h5>
      {description && <p className="text-muted mb-3">{description}</p>}

      {image && <p className="p-3 rounded-md">
          <img src={image} alt="illustration" className="img-fluid mx-auto" />
        </p>}

      {tags && <div>
          {tags.map((tag, idx) => {
        const variant = getKanbanTaskTagVariant(tag);
        return <span key={idx} className={clsx('badge rounded fw-normal px-1 mb-1 me-1', `text-${variant} bg-${variant}-subtle`)}>
                {tag}
              </span>;
      })}
        </div>}

      {percentageCompleted > 0 && <>
          <div className="d-flex justify-content-between fw-semibold align-items-center">
            <p className="mb-1 d-inline-flex align-items-center">
              <IconifyIcon icon="iconoir:task-list" className="fs-18 text-muted me-1" />
              {completedTasks} Tasks
            </p>
            <small className="text-end text-body-emphasis d-block ms-auto">{percentageCompleted.toFixed()}%</small>
          </div>
          <ProgressBar className="bg-secondary-subtle" style={{
        height: 5
      }} now={percentageCompleted}>
            {percentageCompleted > 25 && <ProgressBar variant="secondary" className="rounded-pill" role="progressbar" now={25} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} key={1} />}
            {percentageCompleted > 50 && <ProgressBar variant="secondary" className="rounded-pill" role="progressbar" now={25} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} key={3} />}
            {percentageCompleted > 75 && <ProgressBar variant="secondary" className="rounded-pill" role="progressbar" now={25} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} key={4} />}
            {percentageCompleted === 100 && <ProgressBar variant="secondary" className="rounded-pill" role="progressbar" now={25} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} key={2} />}
          </ProgressBar>
        </>}

      <hr className="hr-dashed" />

      <Row className="justify-content-center flex-nowrap">
        <Col xs="auto" className="align-self-center">
          <ul className="list-inline mb-0">
            <li className="list-item d-inline-block me-2">
              <p className="mb-0">
                <IconifyIcon icon="fa6-solid:list-check" className="text-muted me-1" />
                <span className="text-muted font-weight-bold">
                  {completedTasks}/{totalTasks} Tasks
                </span>
              </p>
            </li>
            <li className="list-item d-inline-block">
              <p className="mb-0">
                <IconifyIcon icon="fa6-regular:message" className="text-muted me-1" />
                <span className="text-muted font-weight-bold">{commentsCount} Comments</span>
              </p>
            </li>
          </ul>
        </Col>

        <Col className="align-self-center">
          <div className="img-group d-flex justify-content-center">
            <span className="user-avatar position-relative d-inline-block">
              <img src={avatar1} alt={'avatar1'} className="thumb-sm shadow-sm rounded-circle" />
            </span>
            <span className="user-avatar position-relative d-inline-block ms-n2">
              <img src={avatar2} alt={'avatar2'} className="thumb-sm shadow-sm rounded-circle" />
            </span>
            <span className="user-avatar position-relative d-inline-block ms-n2">
              <img src={avatar6} alt={'avatar6'} className="thumb-sm shadow-sm rounded-circle" />
            </span>
          </div>
        </Col>
      </Row>
    </CardBody>;
};
export default TaskItem;