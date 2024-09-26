import { customers } from '@/assets/data/products';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const CustomerDetails = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Customers Details</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="table-responsive">
          <table className="table mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Ext.</th>
                <th>City</th>
                <th data-type="date" data-format="YYYY/DD/MM">
                  Start Date
                </th>
                <th>Completion</th>
              </tr>
            </thead>
            <tbody>
              {customers.slice(0, 11).map((customer, idx) => <tr key={idx}>
                  <td className="d-flex align-items-center">
                    <img src={customer.avatar} alt="avatar" className="thumb-md rounded-circle me-1" />
                    {customer.name}
                  </td>
                  <td>{customer.order}</td>
                  <td>{customer.city}</td>
                  <td>{new Date(customer.startDate).toLocaleDateString()}</td>
                  <td>{customer.completion}%</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default CustomerDetails;