import { Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row } from 'react-bootstrap';
import SelectFormInput from '@/components/form/SelectFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { useKanbanContext } from '@/context/useKanbanContext';
const Modals = () => {
  const {
    newTaskModal,
    sectionModal,
    sectionForm,
    taskForm,
    taskFormData,
    sectionFormData
  } = useKanbanContext();
  return <>
      <Modal show={newTaskModal.open} aria-hidden={newTaskModal.open} onHide={newTaskModal.toggle} tabIndex={-1} role="dialog">
        <form onSubmit={taskFormData ? taskForm.editRecord : taskForm.newRecord}>
          <ModalHeader closeButton>
            <ModalTitle className="m-0">{taskFormData ? 'Edit Task' : 'Add New Task'} </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Row className="mb-3">
              <label htmlFor="task-title" className="col-sm-3 col-form-label text-end fw-medium">
                Task Title:
              </label>
              <Col sm={9}>
                <TextFormInput control={taskForm.control} name="title" id="task-title" />
              </Col>
            </Row>
            <Row className="mb-3">
              <label htmlFor="task-description" className="col-sm-3 col-form-label text-end fw-medium">
                Description:
              </label>
              <Col sm={9}>
                <TextAreaFormInput control={taskForm.control} name="description" id="task-description" />
              </Col>
            </Row>
            <Row className="mb-3">
              <label htmlFor="task-priority" className="col-sm-3 col-form-label text-end fw-medium">
                Task Priority:
              </label>
              <Col sm={9}>
                <SelectFormInput control={taskForm.control} name="priority" id="task-priority" options={[{
                value: 'Low',
                label: 'Low'
              }, {
                value: 'Medium',
                label: 'Medium'
              }, {
                value: 'High',
                label: 'High'
              }]} />
              </Col>
            </Row>
            <Row className="mb-3">
              <label htmlFor="task-tags" className="col-sm-3 col-form-label text-end fw-medium">
                Task Tags:
              </label>
              <Col sm={9}>
                <SelectFormInput control={taskForm.control} name="tags" id="task-tags" options={[{
                value: 'API',
                label: 'API'
              }, {
                value: 'Form Submit',
                label: 'Form Submit'
              }, {
                value: 'Responsive',
                label: 'Responsive'
              }]} />
              </Col>
            </Row>
            <Row>
              <label htmlFor="task-totalTasks" className="col-sm-3 col-form-label text-end fw-medium">
                Total Tasks:
              </label>
              <Col sm={9}>
                <TextFormInput control={taskForm.control} name="totalTasks" id="task-totalTasks" />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <button type="submit" className="btn btn-primary btn-sm">
              {taskFormData ? 'Update' : 'Save'}
            </button>
            <button onClick={() => newTaskModal.toggle()} type="button" className="btn btn-outline-danger btn-sm">
              Close
            </button>
          </ModalFooter>
        </form>
      </Modal>

      <Modal show={sectionModal.open} aria-hidden={sectionModal.open} onHide={sectionModal.toggle} tabIndex={-1} role="dialog">
        <form onSubmit={sectionFormData ? sectionForm.editRecord : sectionForm.newRecord}>
          <ModalHeader closeButton>
            <ModalTitle className="m-0">{sectionFormData ? 'Edit New Section' : 'Add New Section'}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Row>
              <label htmlFor="inputTaskTitle" className="col-sm-3 col-form-label text-end fw-medium">
                Section Title:
              </label>
              <Col sm={9}>
                <TextFormInput control={sectionForm.control} name="sectionTitle" />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <button type="submit" className="btn btn-primary btn-sm">
              {sectionFormData ? 'Update' : 'Save'}
            </button>
            <button onClick={() => sectionModal.toggle()} type="button" className="btn btn-outline-danger btn-sm">
              Close
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </>;
};
export default Modals;