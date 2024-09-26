import { FormGroup, FormLabel } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import DatePicker from 'react-flatpickr';
import { Controller } from 'react-hook-form';
const DateFormInput = ({
  name,
  containerClassName: containerClass,
  control,
  id,
  label,
  noValidate,
  labelClassName: labelClass,
  ...other
}) => {
  return <Controller name={name} defaultValue={''} control={control} render={({
    field,
    fieldState
  }) => <FormGroup className={containerClass}>
          {label && (typeof label === 'string' ? <FormLabel htmlFor={id ?? name} className={labelClass}>
                {label}
              </FormLabel> : <>{label}</>)}
          {/* @ts-ignore */}
          <DatePicker className="form-control"
    // @ts-ignore
    onChange={([date]) => {
      field.onChange(date);
    }} id={id ?? name} {...other} {...field} />
          {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
        </FormGroup>} />;
};
export default DateFormInput;