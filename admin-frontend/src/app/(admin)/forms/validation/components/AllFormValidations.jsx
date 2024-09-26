import ComponentContainerCard from '@/components/ComponentContainerCard';
import PasswordFormInput from '@/components/form/PasswordFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Button, Col, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, InputGroup, Row } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const BootstrapCustomStyle = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return <ComponentContainerCard title="Bootstrap Custom Styles">
      <Form className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
        <FormGroup className="col-md-4">
          <FormLabel>First name</FormLabel>
          <FormControl type="text" id="validationCustom01" placeholder="First name" defaultValue="Mark" required />
          <Feedback>Looks good!</Feedback>
        </FormGroup>
        <FormGroup className="col-md-4">
          <FormLabel>Last name</FormLabel>
          <FormControl type="text" id="validationCustom02" placeholder="Last name" defaultValue="Otto" required />
          <Feedback>Looks good!</Feedback>
        </FormGroup>
        <FormGroup className="col-md-4">
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <InputGroupText id="inputGroupPrepend">@</InputGroupText>
            <FormControl type="text" id="validationCustomUsername" placeholder="Username" required />
            <Feedback type="invalid">Please choose a username.</Feedback>
          </InputGroup>
        </FormGroup>
        <FormGroup className="col-md-6">
          <FormLabel>City</FormLabel>
          <FormControl type="text" id="validationCustom03" placeholder="City" required />
          <Feedback type="invalid">Please provide a valid city.</Feedback>
        </FormGroup>
        <FormGroup className="col-md-3">
          <FormLabel>State</FormLabel>
          <FormSelect id="validationCustom04" required>
            <option defaultValue="selected" disabled>
              Choose...
            </option>
            <option>...</option>
          </FormSelect>
          <Feedback type="invalid">Please select a valid state.</Feedback>
        </FormGroup>
        <FormGroup className="col-md-3">
          <FormLabel>Zip</FormLabel>
          <FormControl type="text" id="validationCustom05" placeholder="Zip" required />
          <Feedback type="invalid">Please provide a valid zip.</Feedback>
        </FormGroup>
        <FormGroup className="col-12">
          <FormCheck id="invalidCheck" required label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
        </FormGroup>
        <Col xs={12}>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </Col>
      </Form>
    </ComponentContainerCard>;
};
const Tooltips = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return <ComponentContainerCard title="Validation Tooltips">
      <Form className="row g-3 needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
        <FormGroup className="position-relative col-md-4">
          <FormLabel>First name</FormLabel>
          <FormControl type="text" placeholder="First name" defaultValue="Mark" required />
          <Feedback tooltip>Looks good!</Feedback>
          <Feedback type="invalid" tooltip>
            Please enter first name.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative col-md-4">
          <FormLabel>Last name</FormLabel>
          <FormControl type="text" placeholder="Last name" defaultValue="Otto" required />
          <Feedback tooltip>Looks good!</Feedback>
          <Feedback type="invalid" tooltip>
            Please enter last name.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative col-md-4">
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <FormControl type="text" placeholder="Username" required />
            <Feedback type="invalid" tooltip>
              Please choose a unique and valid username.
            </Feedback>
          </InputGroup>
        </FormGroup>
        <FormGroup className="position-relative col-md-6">
          <FormLabel>City</FormLabel>
          <FormControl type="text" placeholder="City" required />
          <Feedback type="invalid" tooltip>
            Please provide a valid city.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative col-md-3">
          <FormLabel>State</FormLabel>
          <FormControl type="text" placeholder="State" required />
          <Feedback type="invalid" tooltip>
            Please provide a valid state.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative col-md-3">
          <FormLabel>Zip</FormLabel>
          <FormControl type="text" placeholder="Zip" required />
          <Feedback type="invalid" tooltip>
            Please provide a valid zip.
          </Feedback>
        </FormGroup>
        <Col xs={12}>
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </Col>
      </Form>
    </ComponentContainerCard>;
};
const CustomValidation = () => {
  const customFormSchema = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be of minimum 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(customFormSchema)
  });
  return <ComponentContainerCard title="Custom Validation Form">
      <form id="form-validation-2" onSubmit={handleSubmit(() => {})} className="form">
        <TextFormInput name="username" label="Username" containerClassName="mb-2" placeholder="Enter Username" control={control} />
        <TextFormInput name="email" label="Email" type="email" placeholder="Enter email" containerClassName="mb-2" control={control} />
        <PasswordFormInput name="password" label="Password" containerClassName="mb-2" placeholder="Enter password" control={control} />
        <PasswordFormInput name="confirmPassword" label="Confirm Password" placeholder="Enter password again" containerClassName="mb-3" control={control} />
        <Button variant="primary" type="submit">
          Submit form
        </Button>
      </form>
    </ComponentContainerCard>;
};
const AllFormValidations = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6}>
          <BootstrapCustomStyle />
        </Col>
        <Col md={6}>
          <Tooltips />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CustomValidation />
        </Col>
      </Row>
    </>;
};
export default AllFormValidations;