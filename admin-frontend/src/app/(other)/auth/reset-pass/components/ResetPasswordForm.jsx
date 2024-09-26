import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextFormInput from '@/components/form/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Row } from 'react-bootstrap';
const ResetPasswordForm = () => {
  const resetPasswordSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(resetPasswordSchema)
  });
  return <form className="my-4" onSubmit={handleSubmit(() => console.log('Reset Password link sent successfully'))}>
      <TextFormInput control={control} name="email" label="Email" placeholder="Enter your email" containerClassName="form-group mb-2" />

      <Row className="form-group mb-0">
        <Col xs={12}>
          <div className="d-grid mt-3">
            <button className="btn btn-primary flex-centered" type="submit">
              Reset <IconifyIcon icon="fa6-solid:right-to-bracket" className="ms-1" />
            </button>
          </div>
        </Col>
      </Row>
    </form>;
};
export default ResetPasswordForm;