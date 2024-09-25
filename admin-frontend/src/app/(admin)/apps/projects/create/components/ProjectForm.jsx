import DateFormInput from '@/components/form/DateFormInput';
import SelectFormInput from '@/components/form/SelectFormInput';
import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const ProjectForm = () => {
  const projectFormSchema = yup.object({
    projectName: yup.string().required('please enter  project name'),
    startDate: yup.string().required('please select Date'),
    endDate: yup.string().required('please select  Date'),
    rate: yup.string().required('please enter rate'),
    priceType: yup.string().required('please select price type'),
    require: yup.string().required('please select required field'),
    invoiceTime: yup.string().required('please select Invoice Time'),
    priority: yup.string().required('please select priority'),
    message: yup.string().required('please enter your message')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(projectFormSchema)
  });
  return <form className="p-4 pt-3" onSubmit={handleSubmit(() => {})}>
      <TextFormInput name="projectName" label="Project Name :" containerClassName="mb-2 mb-lg-1" control={control} placeholder="Enter project name" />
      <div className="form-group">
        <Row>
          <DateFormInput name="startDate" control={control} labelClassName="mt-2" label="Start Date" placeholder="Enter start date" containerClassName="col-lg-3 col-6 mb-2 mb-lg-1" />
          <DateFormInput name="endDate" control={control} labelClassName="mt-2" label="End Date" placeholder="Enter end date" containerClassName="col-lg-3 col-6 mb-2 mb-lg-1" />
          <TextFormInput name="rate" label="Rate" labelClassName="mt-2" containerClassName="col-lg-3 col-6 mb-2 mb-lg-1" control={control} placeholder="Enter rate" />
          <SelectFormInput name="priceType" control={control} label="Price Type" labelClassName="mt-2" containerClassName="col-lg-3 col-6 mb-2 mb-lg-1" options={[{
          value: 'Hourly',
          label: 'Hourly'
        }, {
          value: 'Daily',
          label: 'Daily'
        }, {
          value: 'Fix',
          label: 'Fix'
        }]} />
        </Row>
      </div>
      <div className="form-group">
        <Row>
          <SelectFormInput name="require" control={control} label="Required" labelClassName="mt-2" containerClassName="col-lg-6 mb-2 mb-lg-1" options={[{
          value: '',
          label: '--Select--'
        }, {
          value: 'UI/UX Design',
          label: 'UI/UX Design'
        }, {
          value: 'Payment System',
          label: 'Payment System'
        }, {
          value: 'Android 10',
          label: 'Android 10'
        }]} />
          <SelectFormInput name="invoiceTime" control={control} label="Invoice Time" labelClassName="mt-2" containerClassName="col-lg-3 col-6" options={[{
          value: '30 Day',
          label: '30 Day'
        }, {
          value: '3 Month',
          label: '3 Month'
        }, {
          value: '1 Year',
          label: '1 Year'
        }]} />
          <SelectFormInput name="priority" control={control} label="Priority" labelClassName="mt-2" containerClassName="col-lg-3 col-6" options={[{
          value: '',
          label: '-- select --'
        }, {
          value: 'High',
          label: 'High'
        }, {
          value: 'Medium',
          label: 'Medium'
        }, {
          value: 'Low',
          label: 'Low'
        }]} />
        </Row>
      </div>
      <TextAreaFormInput name="message" label="Message" labelClassName="mt-2" control={control} containerClassName="mb-3" placeholder="writing here.." rows={5} />
      <Button variant="primary" type="submit" className="me-1">
        Create project
      </Button>
      <Button variant="danger" type="button">
        Cancel
      </Button>
    </form>;
};
export default ProjectForm;