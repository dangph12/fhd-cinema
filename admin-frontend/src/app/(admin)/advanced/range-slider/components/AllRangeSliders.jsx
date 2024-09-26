import { Col, Row } from 'react-bootstrap';
import Nouislider from 'nouislider-react';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useState } from 'react';
const DefaultSlider = () => {
  return <ComponentContainerCard title="Default Slider">
      <Nouislider range={{
      min: 0,
      max: 100
    }} start={[50]} />
    </ComponentContainerCard>;
};
const SliderWithTooltip = () => {
  return <ComponentContainerCard title="Only showing tooltips when sliding handles">
      <Nouislider range={{
      min: 0,
      max: 100
    }} start={[20, 80]} connect={true} tooltips={true} />
    </ComponentContainerCard>;
};
const InputElementSlider = () => {
  const [selectedValue, setSelectedValue] = useState([10, 30]);
  const handleSliderChange = values => {
    setSelectedValue(values);
  };
  const handleOptionChange = event => {
    if (selectedValue[1] >= Math.round(event.target.value)) {
      setSelectedValue([Math.round(event.target.value), selectedValue[1]]);
    }
  };
  const handleInputChange = event => {
    if (selectedValue[0] <= Math.round(event.target.value)) {
      setSelectedValue([selectedValue[0], Math.round(event.target.value)]);
    }
  };
  return <ComponentContainerCard title="Using HTML5 input elements">
      <Nouislider range={{
      min: -20,
      max: 40
    }} start={selectedValue} connect={true} className="mb-3" onSlide={handleSliderChange} />
      <Row>
        <Col xs="3">
          <select className="form-select" id="input-select" value={selectedValue[0]} onChange={handleOptionChange}>
            {new Array(61).fill(0).map((_, index) => <option key={index + 1} value={index - 20}>
                {index - 20}
              </option>)}
          </select>
        </Col>
        <Col xs="3">
          <input type="number" className="form-control" min={-20} max={40} step={1} value={selectedValue[1]} id="input-number" onChange={handleInputChange} />
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const WorkingWithDateSlider = () => {
  const timestamp = str => {
    return new Date(str).getTime();
  };
  return <ComponentContainerCard title="Working with dates">
      <Nouislider range={{
      min: timestamp('2010'),
      max: timestamp('2016')
    }} step={7 * 24 * 60 * 60 * 1000} start={[timestamp('2011'), timestamp('2015')]} className="mb-2" />
    </ComponentContainerCard>;
};
const SkippingStepSlider = () => {
  const [skipingStep, setSkipingStep] = useState([20.0, 90.0]);
  const handleSkippingSteps = e => {
    setSkipingStep(e);
  };
  return <ComponentContainerCard title="Skipping steps">
      <Nouislider range={{
      min: 0,
      '10%': 10,
      '20%': 20,
      '30%': 30,
      '50%': 50,
      '60%': 60,
      '70%': 70,
      '90%': 90,
      max: 100
    }} start={[20, 90]} snap={true} className="mb-2" onSlide={handleSkippingSteps} />
      <span className="example-val d-block fw-semibold" id="skip-value-lower">
        {Number(skipingStep[0]).toFixed(0)}
      </span>
      <span className="example-val d-block fw-semibold" id="skip-value-upper">
        {Number(skipingStep[1]).toFixed(0)}
      </span>
    </ComponentContainerCard>;
};
const ClickingPipsSlider = () => {
  return <ComponentContainerCard title="Moving the slider by clicking pips">
      <div className="pb-4">
        <Nouislider range={{
        min: 0,
        max: 100
      }} start={[50]} pips={{
        mode: 'count',
        values: 5
      }} />
      </div>
    </ComponentContainerCard>;
};
const SoftLimitSlider = () => {
  return <ComponentContainerCard title="Soft limits">
      <div className="pb-4">
        <Nouislider range={{
        min: 0,
        max: 100
      }} start={[50]} pips={{
        mode: 'values',
        values: [20, 80],
        density: 4
      }} tooltips={true} />
      </div>
    </ComponentContainerCard>;
};
const AllRangeSliders = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6}>
          <DefaultSlider />
        </Col>
        <Col md={6}>
          <SliderWithTooltip />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <InputElementSlider />
        </Col>
        <Col md={6}>
          <WorkingWithDateSlider />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <SkippingStepSlider />
        </Col>
        <Col md={6}>
          <ClickingPipsSlider />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <SoftLimitSlider />
        </Col>
      </Row>
    </>;
};
export default AllRangeSliders;