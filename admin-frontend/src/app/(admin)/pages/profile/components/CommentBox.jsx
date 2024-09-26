import { Card, CardBody, Col, Row } from 'react-bootstrap';
import { commentsData } from '../data';
import clsx from 'clsx';
import { timeSince } from '@/utils/date';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
const CommentBox = () => {
  const formSchema = yup.object({
    message: yup.string().required('Please enter message')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(formSchema)
  });
  return <Card>
      <CardBody className="pb-0">
        <Row>
          <Col>
            <p className="text-dark fw-semibold mb-0">Comments (205)</p>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="border-bottom-dashed">
        <ul className="list-unstyled mb-0">
          {commentsData.map((comment, idx) => <li key={idx} className={clsx({
          'mt-3': idx != 0
        })}>
              <Row>
                <Col xs="auto">
                  <img src={comment.avatar} alt="card-image" className="thumb-md rounded-circle" />
                </Col>
                <Col>
                  <div className="bg-light rounded ms-n2 bg-light-alt p-3">
                    <Row>
                      <Col>
                        <p className="text-dark fw-semibold mb-2">{comment.name}</p>
                      </Col>
                      <Col xs="auto">
                        <span className="text-muted">
                          <IconifyIcon icon="fa-regular:clock" className="me-1" />
                          {timeSince(comment.time)}
                        </span>
                      </Col>
                    </Row>
                    <p>{comment.message}</p>
                    <span role="button" className="text-primary">
                      <IconifyIcon icon="fa-solid:reply" className="me-1" />
                      Replay
                    </span>
                  </div>
                </Col>
              </Row>
              {comment.replies && <Fragment>
                  {comment.replies.map((replay, idx) => <ul className="list-unstyled ms-5" key={idx}>
                      <li>
                        <Row className="mt-3">
                          <Col xs="auto">
                            <img src={replay.avatar} alt="logo" className="thumb-md rounded-circle" />
                          </Col>
                          <Col>
                            <div className="bg-light rounded ms-n2 bg-light-alt p-3">
                              <Row>
                                <Col>
                                  <p className="text-dark fw-semibold mb-2"> {replay.name}</p>
                                </Col>
                                <Col xs="auto">
                                  <span className="text-muted">
                                    <IconifyIcon icon="fa-regular:clock" className="me-1" />
                                    {timeSince(replay.time)}
                                  </span>
                                </Col>
                              </Row>
                              <p>{replay.message}</p>
                              <p className="mb-0">Thank you</p>
                            </div>
                          </Col>
                        </Row>
                      </li>
                    </ul>)}
                </Fragment>}
            </li>)}
        </ul>
      </CardBody>
      <CardBody>
        <Row>
          <Col>
            <p className="text-dark fw-semibold mb-0">Leave a comment</p>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="pt-0">
        <form onSubmit={handleSubmit(() => {})}>
          <TextAreaFormInput name="message" rows={5} placeholder="Message" control={control} containerClassName="mb-3" />
          <Row>
            <Col sm={12} className="text-end">
              <button type="submit" className="btn btn-primary px-4">
                Send Message
              </button>
            </Col>
          </Row>
        </form>
      </CardBody>
    </Card>;
};
export default CommentBox;