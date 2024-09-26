import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { Card, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import clsx from 'clsx';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { useKanbanContext } from '@/context/useKanbanContext';
import TaskItem from './TaskItem';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getKanbanSectionVariant } from '@/utils/variants-icons';
const Board = () => {
  const {
    onDragEnd,
    sections,
    getAllTasksPerSection,
    newTaskModal,
    sectionModal,
    sectionForm
  } = useKanbanContext();
  return <Row>
      <Col md={12} lg={12}>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="kanban-board">
            {sections.map(section => <Droppable key={section.id} droppableId={section.id}>
                {provided => <div ref={provided.innerRef} className="kanban-col" {...provided.droppableProps}>
                    <div className="my-3">
                      <div className={clsx('d-flex justify-content-between align-items-center border-bottom border-2', 'border-' + getKanbanSectionVariant(section.title))}>
                        <div>
                          <h6 className="fw-semibold fs-16 text-muted mb-1">{section.title}</h6>
                          <h6 className="fs-13 fw-semibold">{getAllTasksPerSection(section.id).length} Tasks</h6>
                        </div>
                        <div>
                          <Dropdown align="end" drop="down">
                            <span onClick={() => newTaskModal.toggle(section.id)} role="button" className="text-secondary add-btn cursor-pointer">
                              <IconifyIcon icon="fa6-solid:plus" className="fs-18" />
                            </span>
                            <DropdownToggle as="span" role="button" className="arrow-none ms-1 text-secondary">
                              <IconifyIcon icon="fa6-solid:ellipsis" className="fs-18" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem onClick={() => sectionModal.toggle(section.id)} as="span" role="button">
                                <IconifyIcon icon="la:pen" className="fs-16 me-1 align-text-bottom" /> Edit
                              </DropdownItem>
                              <DropdownItem onClick={() => sectionForm.deleteRecord(section.id)} as="span" role="button" className="text-danger">
                                <IconifyIcon icon="la:trash" className="fs-16 me-1 align-text-bottom" /> Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>

                    <SimplebarReactClient style={{
                height: 'calc(100vh - 100px)'
              }} className="pt-1">
                      {getAllTasksPerSection(section.id).map((task, idx) => <Draggable draggableId={task.id} index={idx} key={task.id}>
                          {provided => <Card className="mb-3" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <TaskItem task={task} />
                            </Card>}
                        </Draggable>)}
                      {provided.placeholder}
                    </SimplebarReactClient>

                    <button onClick={() => newTaskModal.toggle(section.id)} className="btn btn-outline-primary w-100">
                      <IconifyIcon icon="fa6-solid:plus" className="me-1" /> Add New Task
                    </button>
                  </div>}
              </Droppable>)}
          </div>
        </DragDropContext>
      </Col>
    </Row>;
};
export default Board;