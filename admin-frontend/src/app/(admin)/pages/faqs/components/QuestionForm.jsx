import ComponentContainerCard from '@/components/ComponentContainerCard';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Col, FormGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const QuestionForm = () => {
  const formSchema = yup.object({
    name: yup.string().required('please enter your name'),
    email: yup.string().email('please enter valid email').required('please enter your email'),
    subject: yup.string().required('please enter your subject'),
    message: yup.string().required('please enter your message')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(formSchema)
  });
  return <ComponentContainerCard title="Have More Questions">
      <form onSubmit={handleSubmit(() => {})}>
        <FormGroup className="row">
          <Col lg={6}>
            <TextFormInput name="name" placeholder="Name" control={control} containerClassName="mb-2" />
          </Col>
          <Col lg={6}>
            <TextFormInput name="email" type="email" placeholder="Email" control={control} containerClassName="mb-2" />
          </Col>
        </FormGroup>
        <FormGroup className="row">
          <Col xs={12}>
            <TextFormInput name="subject" placeholder="Subject" control={control} containerClassName="mb-2" />
          </Col>
        </FormGroup>
        <div className="form-group">
          <TextAreaFormInput name="message" placeholder="Your message" rows={4} control={control} containerClassName="mb-2" />
        </div>
        <button type="submit" className="btn btn-primary btn-block px-4">
          Send Email
        </button>
      </form>
    </ComponentContainerCard>;
};
export default QuestionForm;