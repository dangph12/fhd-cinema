import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import MaskedInput from 'react-text-mask';
const ReactSelectElement = () => {
  return <ComponentContainerCard title="Select Components">
      <Row className="g-2">
        <Col md={4}>
          <label className="mb-2">Default Select</label>
          <Select defaultValue={{
          value: 'value-1',
          label: 'Value 1'
        }} options={[{
          value: 'value-1',
          label: 'Value 1'
        }, {
          value: 'value-2',
          label: 'Value 2'
        }, {
          value: 'value-3',
          label: 'Value 3'
        }]} />
        </Col>
        <Col md={4}>
          <label className="mb-2">Multi Select</label>
          <Select isMulti placeholder="Select an option" options={[{
          value: 'value-1',
          label: 'Value 1'
        }, {
          value: 'value-2',
          label: 'Value 2'
        }, {
          value: 'value-3',
          label: 'Value 3'
        }]} />
        </Col>
        <Col md={4}>
          <label className="mb-2">Taggable Select</label>
          <CreatableSelect isMulti placeholder="Enter a tag..." options={[{
          value: 'value-1',
          label: 'Value 1'
        }, {
          value: 'value-2',
          label: 'Value 2'
        }, {
          value: 'value-3',
          label: 'Value 3'
        }]} />
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const ReactColorElement = () => {
  const [colorSketch, setColorSketch] = useState('rgba(34, 197, 94, 1)');
  const [colorSketch1, setColorSketch1] = useState('rgba(250, 193, 70, 1)');
  const [colorSketch2, setColorSketch2] = useState('rgba(247, 248, 249, 1)');
  const [displaySketch, setDisplaySketch] = useState(false);
  const [displaySketch1, setDisplaySketch1] = useState(false);
  const [displaySketch2, setDisplaySketch2] = useState(false);
  const handleSketch = () => {
    setDisplaySketch(!displaySketch);
  };
  const handleSketch1 = () => {
    setDisplaySketch1(!displaySketch1);
  };
  const handleSketch2 = () => {
    setDisplaySketch2(!displaySketch2);
  };
  const onSwatchHoverSketch = color => {
    const format = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    setColorSketch(format);
  };
  const onSwatchHoverSketch1 = color => {
    const format = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    setColorSketch1(format);
  };
  const onSwatchHoverSketch2 = color => {
    const format = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
    setColorSketch2(format);
  };
  return <ComponentContainerCard title="React Color">
      <Row className="g-2">
        <Col md={4}>
          <input onClick={handleSketch} className="form-control color-input" style={{
          background: colorSketch
        }} value={colorSketch} defaultValue="#22c55e" />
          {displaySketch ? <div className="m-2">
              <SketchPicker color={colorSketch} width="160px" onChangeComplete={onSwatchHoverSketch} />
            </div> : null}
        </Col>
        <Col md={4}>
          <input onClick={handleSketch1} className="form-control " value={colorSketch1} style={{
          background: colorSketch1
        }} />
          {displaySketch1 ? <div className="m-2">
              <SketchPicker color={colorSketch1} width="160px" onChangeComplete={onSwatchHoverSketch1} />
            </div> : null}
        </Col>
        <Col md={4}>
          <input onClick={handleSketch2} className="form-control " value={colorSketch2} style={{
          background: colorSketch2
        }} />
          {displaySketch2 ? <div className="m-2">
              <SketchPicker color={colorSketch2} width="160px" onChangeComplete={onSwatchHoverSketch2} />
            </div> : null}
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const CustomTouchSpinElement = () => {
  const [step, setStep] = useState(0);
  const TouchSpinCountPlus = () => {
    setStep(step + 1);
  };
  const TouchSpinCountMinus = () => {
    if (step) {
      setStep(step - 1);
    }
  };
  return <ComponentContainerCard title="Custom Touch Spin">
      <div className="input-group qty-icons w-50">
        <Button variant="primary" onClick={TouchSpinCountMinus}>
          -
        </Button>
        <input type="number" value={step} className="form-control" min={0} name="quantity" defaultValue={0} style={{
        pointerEvents: 'none'
      }} readOnly />
        <Button variant="primary" onClick={TouchSpinCountPlus}>
          +
        </Button>
      </div>
    </ComponentContainerCard>;
};
const ReactFlatpickerElement = () => {
  return <ComponentContainerCard title="React Flatpicker">
      <Row>
        <Col md={12}>
          <label className="mb-2">Default Datepicker</label>
          <Flatpickr className="form-control mb-3" options={{
          dateFormat: 'd M, Y'
        }} />
          <label className="mb-2">Date Range Picker</label>
          <div className="input-group" id="DateRange">
            <Flatpickr className="form-control" options={{
            dateFormat: 'd M, Y',
            mode: 'range'
          }} />
          </div>
        </Col>
        <Col md={6}>
          <label className="my-2">Inline Datepicker</label>
          <Flatpickr className="d-none"
        // className="form-control"
        options={{
          dateFormat: 'd M, Y',
          inline: true
        }} />
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const ReactTextMaskElement = () => {
  const [inputValue, setInputValue] = useState();
  const maskUpperCase = e => {
    const latter = e.target.value.toUpperCase();
    setInputValue(latter);
  };
  return <ComponentContainerCard title="Mask">
      <div className="mb-2">
        <label className="mb-2">
          RegExp (Russian postal code){' '}
          <span className="desc ms-2 font-11 text-muted">
            /^[1-6]\d{'{'}0,5{'}'}$/
          </span>
        </label>
        <MaskedInput className="form-control" mask={[/[1-6]/, /\d/, /\d/, /\d/, /\d/, /\d/]} />
      </div>
      <div className="mb-2">
        <label className="mb-2">
          Type here against mask{' '}
          <span className="desc ms-2 font-11 text-muted">
            +{'{'}7{'}'}(000)000-00-00
          </span>
        </label>
        <MaskedInput className="form-control" mask={['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} />
      </div>
      <div className="mb-2">
        <label className="mb-2">Mask in overwrite and autofix modes</label>
        <MaskedInput className="form-control" placeholder="dd.mm.yyyy" mask={[/[0-3]/, /[0-9]/, '.', /[0-1]/, /[1-9]/, '.', /[1-2]/, /\d/, /\d/, /\d/]} />
      </div>
      <div className="mb-2">
        <label className="mb-2">Type to uppercase</label>
        <input id="uppercase-mask" type="text" className="form-control" value={inputValue} onChange={e => maskUpperCase(e)} />
      </div>
      <div>
        <label className="mb-2">Date and time</label>
        <MaskedInput className="form-control" placeholder="dd.mm.yyyy hh:mm" mask={[/[1-2]/, /\d/, /\d/, /\d/, '/', /[0-1]/, /[1-9]/, '/', /[1-2]/, /\d/, ' ', /[0-2]/, /\d/, ':', /[0-5]/, /\d/]} />
      </div>
    </ComponentContainerCard>;
};
const AllAdvanceElements = () => {
  return <>
      <Row className="justify-content-center">
        <Col>
          <ReactSelectElement />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <ReactColorElement />
        </Col>
        <Col md={6}>
          <CustomTouchSpinElement />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <ReactFlatpickerElement />
        </Col>
        <Col md={6} lg={6}>
          <ReactTextMaskElement />
        </Col>
      </Row>
    </>;
};
export default AllAdvanceElements;