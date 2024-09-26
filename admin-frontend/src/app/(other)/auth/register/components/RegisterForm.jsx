import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
  const registerSchema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be of minimum 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
    mobile: yup.string().matches(/^[6-9]\d{9}$/, {
      message: 'Enter a valid mobile number',
      excludeEmptyString: false
    }).required('Username is required')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(registerSchema)
  });
  return <form className="my-4" onSubmit={handleSubmit(() => console.log('User registered successfully'))}>
      <TextFormInput control={control} name="username" label="Username" placeholder="Enter your username" containerClassName="form-group mb-2" />

      <TextFormInput control={control} name="email" label="Email" placeholder="Enter your email" containerClassName="form-group mb-2" />

      <PasswordFormInput control={control} name="password" label="Password" placeholder="Enter your password" containerClassName="form-group mb-2" />

      <PasswordFormInput control={control} name="confirmPassword" label="Confirm Password" placeholder="Re-Enter your password" containerClassName="form-group mb-2" />

      <TextFormInput control={control} label="Mobile Number" name="mobile" placeholder="Enter your mobile number" containerClassName="form-group mb-2" />

      <div className="form-group row mt-3">
        <Col xs={12}>
          <div className="form-check form-switch form-switch-success">
            <input className="form-check-input" type="checkbox" id="customSwitchSuccess" />
            <label className="form-check-label" htmlFor="customSwitchSuccess">
              By registering you agree to the Rizz{' '}
              <Link to="" className="text-primary">
                Terms of Use
              </Link>
            </label>
          </div>
        </Col>
      </div>
      <div className="form-group mb-0 row">
        <Col xs={12}>
          <div className="d-grid mt-3">
            <button className="btn btn-primary flex-centered" type="submit">
              Register <IconifyIcon icon="fa6-solid:right-to-bracket" className="ms-1" />
            </button>
          </div>
        </Col>
      </div>
    </form>;
};
export default RegisterForm;