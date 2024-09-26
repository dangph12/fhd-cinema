import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { recentOrders } from '../data';
import { Link } from 'react-router-dom';
const RecentOrders = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Recents Order</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light">
                <i className="icofont-calendar fs-5 me-1" />
                This Month
                <IconifyIcon icon="la:angle-down" className="ms-1" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                <DropdownItem href="#">Today</DropdownItem>
                <DropdownItem href="#">Last Week</DropdownItem>
                <DropdownItem href="#">Last Month</DropdownItem>
                <DropdownItem href="#">This Year</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        <div className="table-responsive">
          <table className="table mb-0">
            <tbody>
              {recentOrders.map((order, idx) => <tr key={idx}>
                  <td className="px-0">
                    <div className="d-flex align-items-center">
                      <img src={order.image} height={36} className="me-2 align-self-center rounded" alt="..." />
                      <div className="flex-grow-1 text-truncate">
                        <h6 className="m-0 text-truncate">{order.name}</h6>
                        <Link to="" className="font-12 text-muted text-decoration-underline">
                          {order.id}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-0 text-end">
                    <span className="text-primary ps-2 align-self-center text-end">
                      {currency}
                      {order.amount.toFixed(2)}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default RecentOrders;