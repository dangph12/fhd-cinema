import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllTasks } from '@/helpers/data';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, ProgressBar, Row } from 'react-bootstrap';
const TaskDetails = () => {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllTasks();
      setTasks(data);
    })();
  }, []);
  return <ComponentContainerCard title="Tasks & Details">
      <Accordion defaultActiveKey="0" className="card-bg " id="task-1">
        {tasks?.map((task, idx) => <AccordionItem as="div" key={idx} eventKey={`${idx}`} className="task-accordion rounded  border-dashed border-theme-color mb-3 p-2">
            <AccordionHeader>
              <div className="table-responsive w-100">
                <table className="table text-nowrap mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <IconifyIcon icon="iconoir:calendar" className="fs-2 me-2" />
                          <div className="flex-grow-1 text-truncate">
                            <h6 className="m-0 mb-1 fw-semibold">Start from to end</h6>
                            {task.projects && <div className="fw-semibold">
                                <span>{new Date(task.projects?.startDate).toLocaleDateString()}</span> -{' '}
                                <span className="text-danger"> {new Date(task.projects?.deadlineDate).toLocaleDateString()}</span>
                              </div>}
                          </div>
                        </div>
                      </td>
                      <td className="text-start">
                        <h6 className="m-0 mb-1 fw-semibold">Task</h6>
                        <span className="fs-13 fw-semibold">{task.taskName}</span>
                      </td>
                      <td className="text-start">
                        <h6 className="m-0 mb-1 fw-semibold">Priority</h6>
                        <span className={task.priority === 'High' ? 'text-danger' : task.priority === 'Medium' ? 'text-info' : 'text-warning'}>
                          <IconifyIcon icon="fa6-solid:stop" className="fs-10" /> {task.priority}
                        </span>
                      </td>
                      <td className="text-start">
                        <h6 className="m-0 mb-1 fw-semibold">Team</h6>
                        <span className="text-secondary">{task.teamName}</span>
                      </td>
                      <td className="text-end">
                        <h6 className="m-0 mb-1 fw-semibold">Status</h6>
                        {task.projects && <span className={clsx('badge rounded bg-transparent border p-1', task.projects.status === 'In Progress' ? 'border-blue text-blue' : 'border-info text-info')}>
                            {task.projects?.status}
                          </span>}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordionHeader>
            <AccordionBody className="bg-body border-dashed-top  p-3 p-3">
              <h6 className="fw-semibold">Task Info</h6>
              <p className="mt-2 mb-3">{task.taskInfo}</p>
              <Row className="row-cols-auto g-3">
                <Col md={3}>
                  <div className="d-flex align-items-center">
                    {task.allUsers && <img src={task.allUsers?.avatar} className="thumb-md align-self-center rounded-circle" alt="..." />}
                    <div className="flex-grow-1 ms-2">
                      <h6 className="m-0 mb-1 fw-semibold">{task.allUsers?.name}</h6>
                      <p className="text-muted mb-0">Client</p>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <h6 className="m-0 mb-1 fw-semibold">Project type</h6>
                  <p className="text-muted mb-0">{task.projects?.name}</p>
                </Col>
                <Col md={2} className="text-end align-self-center">
                  <div className="d-flex justify-content-between">
                    <h6 className="m-0 mb-1 fw-semibold">Progress</h6>
                    <small className="text-end">{task.projects?.progress}%</small>
                  </div>
                  <ProgressBar now={task.projects?.progress} variant="secondary" style={{
                height: 5
              }} />
                </Col>
                <Col md={2}>
                  <h6 className="m-0 mb-1 fw-semibold">Total Report</h6>
                  <p className="text-muted mb-0">{task.report}</p>
                </Col>
                <Col md={2} className="ms-auto">
                  <h6 className="m-0 mb-1 fw-semibold">Assigned To</h6>
                  <p className="text-muted mb-0">{task.assignedTo}</p>
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>)}
      </Accordion>
    </ComponentContainerCard>;
};
export default TaskDetails;