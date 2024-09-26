import { topCountriesData } from '@/assets/data/other';
import clsx from 'clsx';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
const TopCountry = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Top Country</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        {topCountriesData.map((country, idx) => <div className={clsx('d-flex align-items-center', topCountriesData.length - 1 === idx ? 'pt-3' : 'py-3 border-dashed-bottom')} key={idx}>
            <img src={country.countryFlag} className="thumb-sm align-self-center rounded-circle" alt="..." />
            <div className="flex-grow-1 ms-2">
              <h5 className="m-0">{country.count}</h5>
              <p className="text-muted mb-0">
                {country.name} . Last Month&nbsp;
                <span className="text-success">{country.change}% </span>
              </p>
            </div>
          </div>)}
      </CardBody>
    </Card>;
};
export default TopCountry;