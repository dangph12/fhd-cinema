import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardBody } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const RefundForm = () => {
  const refundFormSchema = yup.object({
    amount: yup.number().required('please enter amount'),
    message: yup.string().required('please enter your message')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(refundFormSchema)
  });
  return <Card>
      <CardBody>
        <form onSubmit={handleSubmit(() => {})}>
          <TextFormInput name="amount" label="Amount" control={control} placeholder="Amount" />
          <TextAreaFormInput name="message" label="Message" labelClassName="mt-2" containerClassName="mb-3" control={control} rows={3} placeholder="writing here.." />
          <Button variant="primary" type="submit" className="me-1">
            Refund
          </Button>
          <Button variant="danger" type="button">
            Decline
          </Button>
        </form>
      </CardBody>
    </Card>;
};
export default RefundForm;