import { Button, Card, CardBody, CardHeader, CardTitle, Col, FormControl, FormSelect, Row } from 'react-bootstrap';
import StepWizard from 'react-step-wizard';
import taskImg from '@/assets/images/extra/task.png';
import { Link } from 'react-router-dom';
const nullFunction = () => {
  throw new Error('Function not implemented.');
};
const Form1 = () => {
  return <div className="tab-pane active" id="step1">
      <CardTitle as="h4" className="my-4  fs-15">
        Seller Details
      </CardTitle>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtFirstNameBilling" className="col-lg-3 col-form-label text-lg-end">
              Contact Person
            </label>
            <Col lg={9}>
              <FormControl id="txtFirstNameBilling" name="txtFirstNameBilling" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtLastNameBilling" className="col-lg-3 col-form-label text-lg-end">
              Mobile No.
            </label>
            <Col lg={9}>
              <FormControl id="txtLastNameBilling" name="txtLastNameBilling" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtCompanyBilling" className="col-lg-3 col-form-label text-lg-end">
              Landline No.
            </label>
            <Col lg={9}>
              <FormControl id="txtCompanyBilling" name="txtCompanyBilling" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtEmailAddressBilling" className="col-lg-3 col-form-label text-lg-end">
              Email Address
            </label>
            <Col lg={9}>
              <FormControl id="txtEmailAddressBilling" name="txtEmailAddressBilling" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtAddress1Billing" className="col-lg-3 col-form-label text-lg-end">
              Address 1
            </label>
            <Col lg={9}>
              <FormControl as="textarea" id="txtAddress1Billing" name="txtAddress1Billing" rows={4} defaultValue={''} />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtAddress2Billing" className="col-lg-3 col-form-label text-lg-end">
              Warehouse Address
            </label>
            <Col lg={9}>
              <FormControl as="textarea" id="txtAddress2Billing" name="txtAddress2Billing" rows={4} defaultValue={''} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtCityBilling" className="col-lg-3 col-form-label text-lg-end">
              Company Type
            </label>
            <Col lg={9}>
              <FormControl id="txtCityBilling" name="txtCityBilling" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtStateProvinceBilling" className="col-lg-3 col-form-label text-lg-end">
              Live Market A/C
            </label>
            <Col lg={9}>
              <FormControl id="txtStateProvinceBilling" name="txtStateProvinceBilling" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtTelephoneBilling" className="col-lg-3 col-form-label text-lg-end">
              Product Category
            </label>
            <Col lg={9}>
              <FormControl id="txtTelephoneBilling" name="txtTelephoneBilling" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtFaxBilling" className="col-lg-3 col-form-label text-lg-end">
              Product Sub Category
            </label>
            <Col lg={9}>
              <FormControl id="txtFaxBilling" name="txtFaxBilling" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>;
};
const Form2 = () => {
  return <div className="tab-pane" id="step2">
      <CardTitle as="h4" className="my-4 fs-15">
        Company Document
      </CardTitle>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtFirstNameShipping" className="col-lg-3 col-form-label text-lg-end">
              PAN Card
            </label>
            <Col lg={9}>
              <FormControl id="txtFirstNameShipping" name="txtFirstNameShipping" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtLastNameShipping" className="col-lg-3 col-form-label text-lg-end">
              VAT/TIN No.
            </label>
            <Col lg={9}>
              <FormControl id="txtLastNameShipping" name="txtLastNameShipping" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtCompanyShipping" className="col-lg-3 col-form-label text-lg-end">
              CST No.
            </label>
            <Col lg={9}>
              <FormControl id="txtCompanyShipping" name="txtCompanyShipping" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtEmailAddressShipping" className="col-lg-3 col-form-label text-lg-end">
              Service Tax No.
            </label>
            <Col lg={9}>
              <FormControl id="txtEmailAddressShipping" name="txtEmailAddressShipping" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtCityShipping" className="col-lg-3 col-form-label text-lg-end">
              Company UIN
            </label>
            <Col lg={9}>
              <FormControl id="txtCityShipping" name="txtCityShipping" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtStateProvinceShipping" className="col-lg-3 col-form-label text-lg-end">
              Declaration
            </label>
            <Col lg={9}>
              <FormControl id="txtStateProvinceShipping" name="txtStateProvinceShipping" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>;
};
const Form3 = () => {
  return <div className="tab-pane" id="step3">
      <CardTitle as="h4" className="my-4 fs-15">
        Bank Details
      </CardTitle>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtNameCard" className="col-lg-3 col-form-label text-lg-end">
              Name on Card
            </label>
            <Col lg={9}>
              <input id="txtNameCard" name="txtNameCard" type="text" className="form-control" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="ddlCreditCardType" className="col-lg-3 col-form-label text-lg-end">
              Credit Card Type
            </label>
            <Col lg={9}>
              <FormSelect id="ddlCreditCardType" name="ddlCreditCardType">
                <option>--Please Select--</option>
                <option value="AE">American Express</option>
                <option value="VI">Visa</option>
                <option value="MC">MasterCard</option>
                <option value="DI">Discover</option>
              </FormSelect>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtCreditCardNumber" className="col-lg-3 col-form-label text-lg-end">
              Credit Card Number
            </label>
            <Col lg={9}>
              <FormControl id="txtCreditCardNumber" name="txtCreditCardNumber" type="text" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtCardVerificationNumber" className="col-lg-3 col-form-label text-lg-end">
              Card Verification Number
            </label>
            <Col lg={9}>
              <FormControl id="txtCardVerificationNumber" name="txtCardVerificationNumber" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row className="form-group mb-2">
            <label htmlFor="txtExpirationDate" className="col-lg-3 col-form-label text-lg-end">
              Expiration Date
            </label>
            <Col lg={9}>
              <FormControl id="txtExpirationDate" name="txtExpirationDate" type="text" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>;
};
const Form4 = () => {
  return <div className="tab-pane" id="step4">
      <CardTitle as="h4" className="my-4 fs-15">
        Confirm Detail
      </CardTitle>
      <div className="form-check my-4 text-center">
        <img src={taskImg} className="mb-3" height={60} alt="task" />
        <h4 className="mb-1 fs-16">You are all set!</h4>
        <p className="text-muted">Now you can access your account anytime anywhere</p>
        <div>
          <input className="form-check-input float-none" type="checkbox" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I agree with the Terms and Conditions.
          </label>
        </div>
      </div>
    </div>;
};
const BasicWizard = () => {
  const NavButtons = props => {
    const handleStep = step => {
      props.goToStep(step);
    };
    return <nav>
        <div className="nav nav-tabs" id="nav-tab">
          <Link to="" className={`nav-link ${props.currentStep == 1 && 'active'}`} id="step1-tab" onClick={() => handleStep(1)}>
            Seller Details
          </Link>
          <Link to="" className={`nav-link ${props.currentStep == 2 && 'active'}`} id="step2-tab" onClick={() => handleStep(2)}>
            Company Document
          </Link>
          <Link to="" className={`nav-link ${props.currentStep == 3 && 'active'}`} id="step3-tab" onClick={() => handleStep(3)}>
            Bank Details
          </Link>
          <Link to="" className={`nav-link ${props.currentStep == 4 && 'active'}`} id="step4-tab" onClick={() => handleStep(4)}>
            Confirm Detail
          </Link>
        </div>
      </nav>;
  };
  const ActionButtons = props => {
    const handleBack = () => {
      props.previousStep();
    };
    const handleNext = () => {
      props.nextStep();
    };
    const handleFinish = () => {
      props.lastStep();
    };
    return <div>
        {props.currentStep > 1 && <Button type="button" id="stepPrev" variant="secondary" className="float-start" onClick={handleBack}>
            Previous
          </Button>}

        {props.currentStep < props.totalSteps && <Button type="button" id="stepNext" variant="primary" onClick={handleNext} className="float-end">
            Next
          </Button>}

        {props.currentStep === props.totalSteps && <Button type="button" id="stepFinish" variant="danger" onClick={handleFinish} className="float-end">
            Finish
          </Button>}
      </div>;
  };
  const Step1 = props => {
    return <>
        <NavButtons currentStep={1} totalSteps={4} goToStep={nullFunction} {...props} />
        <Form1 />
        <ActionButtons isActive={false} currentStep={1} totalSteps={4} nextStep={nullFunction} goToNamedStep={nullFunction} goToStep={nullFunction} lastStep={nullFunction} previousStep={nullFunction} firstStep={nullFunction} {...props} />
      </>;
  };
  const Step2 = props => {
    return <>
        <NavButtons currentStep={2} totalSteps={4} goToStep={nullFunction} {...props} />
        <Form2 />
        <ActionButtons isActive={false} currentStep={2} totalSteps={4} firstStep={nullFunction} lastStep={nullFunction} nextStep={nullFunction} previousStep={nullFunction} goToStep={nullFunction} goToNamedStep={nullFunction} {...props} />
      </>;
  };
  const Step3 = props => {
    return <>
        <NavButtons currentStep={3} totalSteps={4} goToStep={nullFunction} {...props} />
        <Form3 />
        <ActionButtons isActive={false} currentStep={3} totalSteps={4} firstStep={nullFunction} lastStep={nullFunction} nextStep={nullFunction} previousStep={nullFunction} goToStep={nullFunction} goToNamedStep={nullFunction} {...props} />
      </>;
  };
  const Step4 = props => {
    return <>
        <NavButtons currentStep={4} totalSteps={4} goToStep={nullFunction} {...props} />
        <Form4 />
        <ActionButtons isActive={false} currentStep={4} totalSteps={4} firstStep={nullFunction} lastStep={nullFunction} nextStep={nullFunction} previousStep={nullFunction} goToStep={nullFunction} goToNamedStep={nullFunction} {...props} />
      </>;
  };
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">Custom Steps Wizard</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="card-body pt-0">
        <form method="post" id="custom-step">
          <StepWizard>
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
          </StepWizard>
        </form>
      </CardBody>
    </Card>;
};
export default BasicWizard;