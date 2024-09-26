import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap';
import { topCountriesSellingData } from '../data';
import { currency } from '@/context/constants';
const TopSellingByCountry = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Top Selling by Country</CardTitle>
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
              {topCountriesSellingData.map((country, idx) => <tr key={idx}>
                  <td className="px-0">
                    <div className="d-flex align-items-center">
                      <img src={country.flagImage} className="me-2 align-self-center thumb-md rounded-circle" alt="..." />
                      <div className="flex-grow-1 text-truncate">
                        <h6 className="m-0 text-truncate">{country.name}</h6>
                        <div className="d-flex align-items-center">
                          <ProgressBar variant="primary" now={country.progress} className="w-100" style={{
                        height: 5
                      }} />
                          <small className="flex-shrink-1 ms-1">{country.progress}%</small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-0 text-end">
                    <span className="text-body ps-2 align-self-center text-end">
                      {currency}
                      {country.amount.toFixed(2)}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default TopSellingByCountry;