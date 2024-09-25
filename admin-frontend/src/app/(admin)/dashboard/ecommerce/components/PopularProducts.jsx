import { products } from '@/assets/data/products';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import { getProductStatusVariant } from '@/utils/variants-icons';
const PopularProducts = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Popular Products</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light">
                <i className="icofont-calendar fs-5 me-1" />
                This Year
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
            <thead className="table-light">
              <tr>
                <th className="border-top-0">Product</th>
                <th className="border-top-0">Price</th>
                <th className="border-top-0">Sell</th>
                <th className="border-top-0">Status</th>
                <th className="border-top-0">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 5).map((product, idx) => <tr key={idx}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={product.image} height={40} className="me-3 align-self-center rounded" alt="..." />
                      <div className="flex-grow-1 text-truncate">
                        <h6 className="m-0">{product.name}</h6>
                        <a href="#" className="fs-12 text-primary">
                          ID: {product.id}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    {currency}
                    {product.sellPrice}{' '}
                    <del className="text-muted fs-10">
                      {currency}
                      {product.price}
                    </del>
                  </td>
                  <td>{product.sellsCount}</td>
                  <td>
                    <span className={`badge bg-${getProductStatusVariant(product.status)}-subtle px-2 text-${getProductStatusVariant(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <span role="button">
                      <IconifyIcon icon="la:pen" className="text-secondary fs-18" />
                    </span>
                    <span role="button">
                      <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>;
};
export default PopularProducts;