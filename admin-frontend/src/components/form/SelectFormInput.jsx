'use client';

import { FormLabel } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
const SelectFormInput = ({
  control,
  id,
  name,
  label,
  className,
  containerClassName,
  labelClassName,
  noValidate,
  options,
  ...other
}) => {
  return <Controller control={control} name={name} render={({
    field,
    fieldState
  }) => <div className={containerClassName}>
          {label && (typeof label === 'string' ? <FormLabel htmlFor={id ?? name} className={labelClassName}>
                {label}
              </FormLabel> : <>{label}</>)}
          {/* @ts-ignore */}
          <ReactSelect {...other} {...field} options={options} onChange={e => field.onChange(e.value)} value={Array.isArray(options) && options?.find(op => 'value' in op && op.value == field.value)} classNamePrefix="react-select" id={id ?? name} />
          {!noValidate && fieldState.error?.message && <Feedback type="invalid">{fieldState.error?.message}</Feedback>}
        </div>} />;
};
export default SelectFormInput;