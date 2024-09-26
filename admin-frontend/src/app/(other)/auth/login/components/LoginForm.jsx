import PasswordFormInput from '@/components/form/PasswordFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useSignIn from '../useSignIn';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const {
    loading,
    login,
    control
  } = useSignIn();
  return <form onSubmit={login} className="my-4">
      <TextFormInput control={control} name="email" label="Username" containerClassName="form-group mb-2" placeholder="Enter your username" />

      <PasswordFormInput control={control} name="password" label="Password" containerClassName="form-group" placeholder="Enter your password" />

      <div className="form-group row mt-3">
        <Col sm={6}>
          <div className="form-check form-switch form-switch-primary">
            <input className="form-check-input" type="checkbox" id="customSwitchSuccess" />
            <label className="form-check-label" htmlFor="customSwitchSuccess">
              Remember me
            </label>
          </div>
        </Col>
        <Col sm={6} className="text-end">
          <Link to="/auth/reset-pass" className="text-muted font-13">
            {' '}
            Forgot password?
          </Link>
        </Col>
      </div>
      <div className="form-group mb-0 row">
        <Col xs={12}>
          <div className="d-grid mt-3">
            <button className="btn btn-primary flex-centered" type="submit" disabled={loading}>
              Log In <IconifyIcon icon="fa6-solid:right-to-bracket" className="ms-1" />
            </button>
          </div>
        </Col>
      </div>
    </form>;
};
export default LoginForm;