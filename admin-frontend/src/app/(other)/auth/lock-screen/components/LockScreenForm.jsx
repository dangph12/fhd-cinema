import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col } from 'react-bootstrap';
const LockScreenForm = () => {
  const lockScreenSchema = yup.object({
    password: yup.string().min(6, 'Password must be of minimum 6 characters').required('Password is required')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(lockScreenSchema)
  });
  return <form className="my-4" onSubmit={handleSubmit(() => console.log('Logged in successfully'))}>
      <PasswordFormInput control={control} name="password" label="Password" placeholder="Enter your password" containerClassName="form-group mb-2" />

      <div className="form-group mb-0 row">
        <Col xs={12}>
          <div className="d-grid mt-3">
            <button className="btn btn-primary" type="submit">
              Unlock <IconifyIcon icon="fa6-solid:right-to-bracket" className="ms-1" />
            </button>
          </div>
        </Col>
      </div>
    </form>;
};
export default LockScreenForm;