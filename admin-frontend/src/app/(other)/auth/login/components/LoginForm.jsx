import React from 'react';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useSignIn from '../useSignIn';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { loading, login, control, errors } = useSignIn();

  return (
    <form onSubmit={login} className="my-4">
      <TextFormInput
        control={control}
        name="username"
        label="Username"
        containerClassName="form-group mb-2"
        placeholder="Enter your username"
        error={errors.username?.message}
      />

      <PasswordFormInput
        control={control}
        name="password"
        label="Password"
        containerClassName="form-group"
        placeholder="Enter your password"
        error={errors.password?.message}
      />

      <div className="form-group mb-0 row">
        <Col xs={12}>
          <div className="d-grid mt-3">
            <button className="btn btn-primary flex-centered" type="submit" disabled={loading}>
              Log In <IconifyIcon icon="fa6-solid:right-to-bracket" className="ms-1" />
            </button>
          </div>
        </Col>
      </div>
    </form>
  );
};

export default LoginForm;