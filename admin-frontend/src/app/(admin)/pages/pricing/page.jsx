import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getAllPricingPlans } from '@/helpers/data';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
const PricingPlans = () => {
  const [pricingPlans, setPricingPlans] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllPricingPlans();
      setPricingPlans(data);
    })();
  }, []);
  return <>
      <PageMetaData title="Pricing" />
      <Row className="justify-content-center">
        {pricingPlans?.map((plan, idx) => <Col md={6} lg={3} key={idx}>
            <Card>
              <CardBody>
                <div className="text-center">
                  {plan.isPopular && <span className="badge bg-pink-subtle text-pink mt-0 py-1 px-2 mx-auto">Popular</span>}
                  <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">{plan.name}</h6>
                  <p className="text-muted pt-2 mb-0">{plan.description}</p>
                  <div className="pt-3">
                    <h2 className="d-inline-block ">
                      {currency}
                      {plan.price.toFixed(2)}
                    </h2>
                    <small className="font-12 text-muted">/month</small>
                  </div>
                  <hr className="hr-dashed" />
                  <ul className="list-unstyled pricing-content text-start pt-3 border-0 mb-0">
                    {plan.features.map((feature, idx) => <li key={idx}>
                        <span className="pricing-icon">
                          <IconifyIcon icon="fa6-solid:check" />
                        </span>
                        {feature}
                      </li>)}
                  </ul>
                  <Button variant={plan.isPopular ? 'primary' : 'dark'} className="py-2 px-5 mt-3 w-100">
                    <span>Get Started</span>
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>)}
      </Row>
      <Row className="justify-content-center">
        {pricingPlans?.map((plan, idx) => <Col md={6} lg={3} key={idx}>
            <Card>
              <CardBody>
                <div className="text-center">
                  <i className={clsx('d-inline-block mt-2 display-4', plan.icon, plan.iconVariant)} />
                  <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">{plan.name}</h6>
                  <ul className="list-unstyled pricing-content text-center pt-2 border-0 mb-3">
                    {plan.features.map((feature, idx) => <li key={idx}>
                        <span className="pricing-icon">
                          <IconifyIcon icon="fa6-solid:check" />
                        </span>
                        {feature}
                      </li>)}
                  </ul>
                  <hr className="hr-dashed" />
                  <div className="pt-2">
                    <h2 className="d-inline-block ">
                      {currency}
                      {plan.price.toFixed(2)}
                    </h2>
                    <small className="font-12 text-muted">/month</small>
                  </div>
                  <Button variant="dark" className="py-2 px-3 mt-2">
                    <span>Get Started</span>
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>)}
      </Row>
    </>;
};
export default PricingPlans;