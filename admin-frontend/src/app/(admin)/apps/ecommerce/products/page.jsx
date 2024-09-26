import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllProducts } from '@/helpers/data';
import clsx from 'clsx';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownMenu, DropdownToggle, FormCheck, Row } from 'react-bootstrap';
import ProductTable from './components/ProductTable';
import { useEffect, useState } from 'react';
const Products = () => {
  const filters = ['All', 'Fashion', 'Plants', 'Toys', 'Gadgets', 'Food', 'Drinks'];
  const [products, setProducts] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();
  }, []);
  return <>
      <PageMetaData title="Products" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Products</CardTitle>
                </Col>
                <Col xs="auto">
                  <form className="row g-2">
                    <Col xs="auto">
                      <Dropdown>
                        <DropdownToggle variant="link" className="btn bg-primary-subtle text-primary d-flex align-items-center arrow-none" role="button">
                          <IconifyIcon icon="iconoir:filter-alt" className="me-1" /> Filter
                        </DropdownToggle>
                        <DropdownMenu align="start">
                          <div className="p-2">
                            {filters.map((filter, idx) => <FormCheck label={filter} className={clsx({
                            'mb-2': filters.length - 1 != idx
                          })} id={`filter-${idx}`} key={idx} defaultChecked />)}
                          </div>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                    <Col xs="auto">
                      <button type="button" className="btn btn-primary">
                        <IconifyIcon icon="fa6-solid:plus" className="me-1" /> Add Product
                      </button>
                    </Col>
                  </form>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">{products && <ProductTable products={products} />}</CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Products;