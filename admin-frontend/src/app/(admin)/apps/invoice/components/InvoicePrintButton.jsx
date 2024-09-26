import { Button } from 'react-bootstrap';
const InvoicePrintButton = () => {
  return <Button variant="info" onClick={() => window.print()}>
      Print
    </Button>;
};
export default InvoicePrintButton;