import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Button, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from 'react-bootstrap';
const TextualInputs = () => {
  return <ComponentContainerCard title="Textual inputs">
      <Row>
        <Col lg="6">
          <Row className="mb-3">
            <FormLabel htmlFor="example-text-input" className="col-sm-2 col-form-label text-end">
              Text
            </FormLabel>
            <Col sm="10">
              <FormControl type="text" defaultValue="Artisanal kale" id="example-text-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-email-input" className="col-sm-2 col-form-label text-end">
              Email
            </FormLabel>
            <Col sm="10">
              <FormControl type="email" defaultValue="bootstrap@example.com" id="example-email-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-tel-input" className="col-sm-2 col-form-label text-end">
              Telephone
            </FormLabel>
            <Col sm="10">
              <FormControl type="tel" defaultValue="1-(555)-555-5555" id="example-tel-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-password-input" className="col-sm-2 col-form-label text-end">
              Password
            </FormLabel>
            <Col sm="10">
              <FormControl type="password" defaultValue="hunter2" id="example-password-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-number-input" className="col-sm-2 col-form-label text-end">
              Number
            </FormLabel>
            <Col sm="10">
              <FormControl type="number" defaultValue={42} id="example-number-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-datetime-local-input" className="col-sm-2 col-form-label text-end">
              Date and time
            </FormLabel>
            <Col sm="10">
              <FormControl type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="exampleColorInput" className="col-sm-2 col-form-label text-end">
              Color
            </FormLabel>
            <Col sm="10">
              <FormControl type="color" id="exampleColorInput" defaultValue="#0b51b7" title="Choose your color" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel className="col-sm-2 col-form-label text-end">Select</FormLabel>
            <Col sm="10">
              <FormSelect>
                <option defaultValue="Open this select menu">Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </FormSelect>
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-text-input-lg" className="col-sm-2 col-form-label text-end">
              Large
            </FormLabel>
            <Col sm="10">
              <FormControl size="lg" type="text" placeholder=".form-control-lg" id="example-text-input-lg" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-text-input-sm" className="col-sm-2 col-form-label text-end">
              Small
            </FormLabel>
            <Col sm="10">
              <FormControl size="sm" type="text" placeholder=".form-control-sm" id="example-text-input-sm" />
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <Row className="mb-3">
            <FormLabel htmlFor="example-search-input" className="col-sm-2  col-form-label text-end">
              Search
            </FormLabel>
            <Col sm="10">
              <FormControl type="search" defaultValue="How do I shoot web" id="example-search-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-url-input" className="col-sm-2 col-form-label text-end">
              URL
            </FormLabel>
            <Col sm="10">
              <FormControl type="url" defaultValue="https://getbootstrap.com" id="example-url-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-date-input" className="col-sm-2 col-form-label text-end">
              Date
            </FormLabel>
            <Col sm="10">
              <FormControl type="date" defaultValue="2011-08-19" id="example-date-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-month-input" className="col-sm-2 col-form-label text-end">
              Month
            </FormLabel>
            <Col sm="10">
              <FormControl type="month" defaultValue="2011-08" id="example-month-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-week-input" className="col-sm-2 col-form-label text-end">
              Week
            </FormLabel>
            <Col sm="10">
              <FormControl type="week" defaultValue="2011-W33" id="example-week-input" />
            </Col>
          </Row>
          <Row className="mb-3">
            <FormLabel htmlFor="example-time-input" className="col-sm-2 col-form-label text-end">
              Time
            </FormLabel>
            <Col sm="10">
              <FormControl type="time" defaultValue="13:45:00" id="example-time-input" />
            </Col>
          </Row>
          <div className="mb-3 row has-warning">
            <label htmlFor="inputHorizontalWarning" className="col-sm-2 col-form-label text-lg-end">
              Email
            </label>
            <Col sm={10}>
              <FormControl type="email" className="form-control-warning" id="inputHorizontalWarning" placeholder="name@example.com" />
              <small className="form-text text-muted">Example help text that remains unchanged.</small>
            </Col>
          </div>
          <div className="mb-3 row has-success">
            <label htmlFor="inputHorizontalSuccess" className="col-sm-2 col-form-label text-lg-end">
              Email
            </label>
            <Col sm={10}>
              <FormControl type="email" className="is-valid" id="inputHorizontalSuccess" placeholder="name@example.com" />
              <div className="valid-feedback">Success! You&apos;ve done it.</div>
            </Col>
          </div>
          <div className="mb-3 row has-error">
            <label htmlFor="inputHorizontalDnger" className="col-sm-2 col-form-label text-lg-end">
              Email
            </label>
            <Col sm={10}>
              <FormControl type="email" className="is-invalid" id="inputHorizontalDnger" placeholder="name@example.com" />
              <div className="invalid-feedback">Sorry, that username&apos;s taken. Try another?</div>
            </Col>
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const BasicForm = () => {
  return <ComponentContainerCard title="Basic Form">
      <Form>
        <div className="mb-3">
          <FormLabel htmlFor="exampleInputEmail1">Email address</FormLabel>
          <FormControl type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>
        <div className="mb-3">
          <FormLabel htmlFor="exampleInputPassword1">Password</FormLabel>
          <FormControl type="password" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="flexCheckDefaultdemo" />
          <label className="form-check-label" htmlFor="flexCheckDefaultdemo">
            Check me out
          </label>
        </div>
        <Button type="submit" variant="primary" className="me-1">
          Submit
        </Button>
        <Button type="button" variant="danger">
          Cancel
        </Button>
      </Form>
    </ComponentContainerCard>;
};
const HorizontalForm = () => {
  return <ComponentContainerCard title="Horizontal Form">
      <form>
        <Row className="mb-3">
          <label htmlFor="horizontalInput1" className="col-sm-2 col-form-label">
            Email
          </label>
          <Col sm={10}>
            <FormControl type="email" id="horizontalInput1" placeholder="Enter Email" />
          </Col>
        </Row>
        <div className="mb-3 row">
          <label htmlFor="horizontalInput2" className="col-sm-2 col-form-label">
            Password
          </label>
          <Col sm={10}>
            <FormControl type="password" id="horizontalInput2" placeholder="Password" />
          </Col>
        </div>
        <Row>
          <Col sm={10} className="ms-auto">
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="flexCheckDefaultdemo2" />
              <label className="form-check-label" htmlFor="flexCheckDefaultdemo2">
                Remember me
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={10} className="ms-auto">
            <Button variant="primary" className="me-1" type="submit">
              Submit
            </Button>
            <Button variant="danger" type="button">
              Cancel
            </Button>
          </Col>
        </Row>
      </form>
    </ComponentContainerCard>;
};
const CustomStyles = () => {
  return <ComponentContainerCard title="Custom Styles">
      <form>
        <Row>
          <Col md={4}>
            <div className="mb-3">
              <FormLabel htmlFor="username">Name</FormLabel>
              <FormControl type="text" id="username" required />
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-3">
              <FormLabel htmlFor="useremail">Email address</FormLabel>
              <FormControl type="email" id="useremail" required />
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-3">
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormControl type="text" id="subject" required />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mb-3">
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormControl as={'textarea'} className="form-control" rows={5} id="message" defaultValue={''} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-end">
            <Button variant="primary" type="submit" className="px-4">
              Send Message
            </Button>
          </Col>
        </Row>
      </form>
    </ComponentContainerCard>;
};
const FormControls = () => {
  return <ComponentContainerCard title="Form Controls">
      <form>
        <div className="mb-3">
          <FormLabel htmlFor="exampleFormControlInput1">Email address</FormLabel>
          <FormControl type="email" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <FormLabel htmlFor="exampleFormControlSelect1">Example select</FormLabel>
          <FormSelect id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormSelect>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="exampleFormControlSelect2">
            Example multiple select
          </label>
          <FormSelect multiple id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormSelect>
        </div>
        <div>
          <FormLabel htmlFor="exampleFormControlTextarea1">Example textarea</FormLabel>
          <FormControl as="textarea" id="exampleFormControlTextarea1" rows={3} defaultValue={''} />
        </div>
      </form>
    </ComponentContainerCard>;
};
const InlineForm = () => {
  return <ComponentContainerCard title="Inline Form">
      <form className="row align-items-center">
        <Col xs="auto">
          <FormLabel className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
            Username
          </FormLabel>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <FormControl type="text" id="inlineFormInputGroupUsername" placeholder="Username" />
          </div>
        </Col>
        <Col xs="auto">
          <FormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">
            Preference
          </FormLabel>
          <FormSelect id="inlineFormSelectPref">
            <option>Choose...</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </FormSelect>
        </Col>
        <Col xs="auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Col>
      </form>
    </ComponentContainerCard>;
};
const InputSizes = () => {
  return <ComponentContainerCard title="Input Size">
      <form>
        <FormControl size="lg" className="mb-2" type="text" placeholder=".form-control-lg" />
        <FormControl size="sm" type="text" placeholder=".form-control-sm" />
      </form>
    </ComponentContainerCard>;
};
const FileBrowser = () => {
  return <ComponentContainerCard title="File Browser">
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">
          Upload
        </label>
        <FormControl type="file" id="inputGroupFile01" />
      </div>
      <div className="input-group mb-3">
        <FormControl type="file" id="inputGroupFile02" />
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Upload
        </label>
      </div>
      <div className="input-group mb-3">
        <Button variant="outline-secondary" type="button" id="inputGroupFileAddon03">
          Button
        </Button>
        <FormControl type="file" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
      </div>
      <div className="input-group">
        <FormControl type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
        <Button variant="outline-secondary" type="button" id="inputGroupFileAddon04">
          Button
        </Button>
      </div>
    </ComponentContainerCard>;
};
const Switches = () => {
  return <ComponentContainerCard title="Switches">
      <Row>
        <Col lg={4}>
          <FormCheck type="switch" label="Default switch" id="flexSwitchCheckDefault" />
          <FormCheck type="switch" label="Disabled switch" id="flexSwitchCheckDisabled" disabled />
        </Col>
        <Col lg={4}>
          <div className="form-check form-switch form-switch-secondary">
            <input className="form-check-input" type="checkbox" id="customSwitchSecondary" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchSecondary">
              Secondary
            </label>
          </div>
          <div className="form-check form-switch form-switch-success">
            <input className="form-check-input" type="checkbox" id="customSwitchSuccess" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchSuccess">
              Success
            </label>
          </div>
          <div className="form-check form-switch form-switch-warning">
            <input className="form-check-input" type="checkbox" id="customSwitchWarning" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchWarning">
              Warning
            </label>
          </div>
          <div className="form-check form-switch form-switch-info">
            <input className="form-check-input" type="checkbox" id="customSwitchInfo" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchInfo">
              Info
            </label>
          </div>
        </Col>
        <Col lg={4}>
          <div className="form-check form-switch form-switch-danger">
            <input className="form-check-input" type="checkbox" id="customSwitchDanger" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchDanger">
              Danger
            </label>
          </div>
          <div className="form-check form-switch form-switch-dark">
            <input className="form-check-input" type="checkbox" id="customSwitchDark" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchDark">
              Dark
            </label>
          </div>
          <div className="form-check form-switch form-switch-purple">
            <input className="form-check-input" type="checkbox" id="customSwitchPurple" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchPurple">
              Purple
            </label>
          </div>
          <div className="form-check form-switch form-switch-pink">
            <input className="form-check-input" type="checkbox" id="customSwitchPink" defaultChecked />
            <label className="form-check-label" htmlFor="customSwitchPink">
              Pink
            </label>
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const Checkboxes = () => {
  return <ComponentContainerCard title="Checkboxes">
      <form className="form">
        <Row className="mb-3">
          <label className="col-md-3 my-2 control-label">Checkboxes</label>
          <Col md={9}>
            <FormCheck label="Default checkbox" id="check-1" />
            <FormCheck label="Checked checkbox" id="check-2" defaultChecked />
            <FormCheck label="Disabled checkbox" id="check-3" disabled />
            <FormCheck label="Disabled checked checkbox" id="check-4" disabled defaultChecked />
          </Col>
        </Row>
        <Row className="mb-3">
          <label className="col-md-3 my-2 control-label">Inline Checkboxes</label>
          <Col md={9}>
            <FormCheck label="HTML5" id="check-html" inline />
            <FormCheck label="Css3" id="check-css" inline />
            <FormCheck label="Javascript" id="check-java" inline />
          </Col>
        </Row>
        <Row>
          <label className="col-md-3 my-1 control-label">Button Checkbox</label>
          <Col md={9}>
            <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" />
            <label className="btn btn-outline-primary btn-sm" htmlFor="btn-check-outlined">
              Single toggle
            </label>
            <br />
          </Col>
        </Row>
      </form>
    </ComponentContainerCard>;
};
const Radios = () => {
  return <ComponentContainerCard title="Radios">
      <form className="form">
        <Row className="mb-3">
          <label className="col-md-3 my-2 control-label">Radios</label>
          <Col md={9}>
            <FormCheck type="radio" name="radio-2" label="Default radio" id="radio-1" defaultChecked />
            <FormCheck type="radio" name="radio-2" label="Second Default radio" id="radio-2" />
            <FormCheck type="radio" name="radio-2" label="Disabled radio" id="radio-3" disabled />
          </Col>
        </Row>
        <Row className="mb-3">
          <label className="col-md-3 my-1 control-label">Inline Radios</label>
          <Col md={9}>
            <FormCheck type="radio" name="language" label="HTML5" id="radio-html" inline />
            <FormCheck type="radio" name="language" label="Css3" id="radio-css" inline />
            <FormCheck type="radio" name="language" label="Javascript" id="radio-java" inline />
          </Col>
        </Row>
        <Row>
          <label className="col-md-3 my-1 control-label">Button Radios</label>
          <Col md={9}>
            <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" defaultChecked />
            <label className="btn btn-outline-success btn-sm me-1" htmlFor="success-outlined">
              Checked success radio
            </label>
            <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
            <label className="btn btn-outline-danger btn-sm" htmlFor="danger-outlined">
              Danger radio
            </label>
          </Col>
        </Row>
      </form>
    </ComponentContainerCard>;
};
const Range = () => {
  return <ComponentContainerCard title="Range">
      <label htmlFor="customRange1" className="form-label">
        Example range
      </label>
      <input type="range" className="form-range" id="customRange1" />
      <label htmlFor="customRange2" className="form-label">
        Min and max
      </label>
      <input type="range" className="form-range" min={0} max={5} id="customRange2" />
      <label htmlFor="customRange3" className="form-label">
        Steps
      </label>
      <input type="range" className="form-range" min={0} max={5} step="0.5" id="customRange3" />
    </ComponentContainerCard>;
};
const InputGroupsStatic = () => {
  return <ComponentContainerCard title="Input Groups Static">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <FormControl type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <FormControl type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <span className="input-group-text" id="basic-addon2">
          @mannatthemes.com
        </span>
      </div>
      <label htmlFor="basic-url" className="form-label">
        Your vanity URL
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon3">
          https://mannatthemes.com
        </span>
        <FormControl type="text" id="basic-url" aria-describedby="basic-addon3" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <FormControl type="text" aria-label="Amount (to the nearest dollar)" />
        <span className="input-group-text">.00</span>
      </div>
      <div className="input-group mb-3">
        <FormControl type="text" placeholder="Username" aria-label="Username" />
        <span className="input-group-text">@</span>
        <FormControl type="text" placeholder="Server" aria-label="Server" />
      </div>
      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <FormControl as="textarea" aria-label="With textarea" defaultValue={''} />
      </div>
    </ComponentContainerCard>;
};
const InputGroupsButtons = () => {
  return <ComponentContainerCard title="Input Groups Buttons">
      <form>
        <Row className="mb-3 g-2">
          <Col md={6}>
            <div className="input-group">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" />
              </div>
              <input type="text" className="form-control" aria-label="Text input with checkbox" />
            </div>
          </Col>
          <Col md={6}>
            <div className="input-group">
              <div className="input-group-text">
                <input className="form-check-input mt-0" type="radio" aria-label="Radio button for following text input" />
              </div>
              <FormControl type="text" aria-label="Text input with radio button" />
            </div>
          </Col>
        </Row>
        <div className="input-group mb-3">
          <Button variant="secondary" type="button" id="button-addon1">
            <IconifyIcon icon="fa-solid:search" />
          </Button>
          <FormControl type="text" aria-label="Example text with button addon" aria-describedby="button-addon1" />
        </div>
        <div className="input-group mb-3">
          <FormControl type="text" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <Button variant="secondary" type="button" id="button-addon2">
            Go!
          </Button>
        </div>
        <div className="input-group mb-3">
          <FormControl type="email" placeholder="Email" aria-label="Email" aria-describedby="button-addon3" />
          <Button variant="secondary" type="button" id="button-addon2">
            Submit
          </Button>
        </div>
        <div className="input-group">
          <FormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
            <option>Choose...</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </FormSelect>
          <Button variant="secondary" type="button">
            Button
          </Button>
        </div>
      </form>
    </ComponentContainerCard>;
};
const BasicElements = () => {
  return <>
      <PageMetaData title="Basic Elements" />
      <Row className="justify-content-center">
        <Col>
          <TextualInputs />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <BasicForm />
        </Col>
        <Col md={6}>
          <HorizontalForm />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <CustomStyles />
          <InlineForm />
          <InputSizes />
          <FileBrowser />
        </Col>
        <Col md={6}>
          <FormControls />
          <Range />
          <Switches />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Checkboxes />
        </Col>
        <Col md={6}>
          <Radios />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <InputGroupsStatic />
        </Col>
        <Col md={6}>
          <InputGroupsButtons />
        </Col>
      </Row>
    </>;
};
export default BasicElements;