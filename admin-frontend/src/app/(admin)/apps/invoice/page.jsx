import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import logoSm from '@/assets/images/logo-sm.png';
import signature from '@/assets/images/extra/signature.png';
import InvoicePrintButton from './components/InvoicePrintButton';
import { currency } from '@/context/constants';
import PageMetaData from '@/components/PageMetaData';
const Invoice = () => {
  return <>
      <PageMetaData title="Invoice" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody className="bg-black">
              <Row>
                <Col xs={4} className="align-self-center">
                  <img src={logoSm} alt="logo-small" className="logo-sm me-1" height={70} />
                </Col>
                <Col xs={8} className="text-end align-self-center">
                  <h5 className="mb-1 fw-semibold text-white">
                    <span className="text-muted">Invoice:</span> #BBN2351D458
                  </h5>
                  <h5 className="mb-0 fw-semibold text-white">
                    <span className="text-muted">Issue Date:</span> 20/07/2024
                  </h5>
                </Col>
              </Row>
            </CardBody>
            <CardBody>
              <Row className="row-cols-3 d-flex justify-content-md-between">
                <Col md={3} className="d-print-flex align-self-center">
                  <div>
                    <span className="badge rounded text-dark bg-light">Invoice to</span>
                    <h5 className="my-1 fw-semibold fs-18">Michael Reyes</h5>
                    <p className="text-muted ">@Michael_Reyes|+1 123 456 789</p>
                  </div>
                </Col>
                <Col md={3} className="d-print-flex align-self-center">
                  <div>
                    <address className="fs-13">
                      <strong className="fs-14">Billed To :</strong>
                      <br />
                      854 Ave Folsom <br />
                      San Francisco, CA 36925
                      <br />
                      <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                  </div>
                </Col>
                <Col md={3} className="d-print-flex align-self-center">
                  <div>
                    <address className="fs-13">
                      <strong className="fs-14">Shipped To:</strong>
                      <br />
                      795 Folsom Ave
                      <br />
                      San Francisco, CA 94107
                      <br />
                      <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="table-responsive project-invoice">
                    <table className="table table-bordered mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Project Breakdown</th>
                          <th>Hours</th>
                          <th>Rate</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="mt-0 mb-1 fs-14">Project Design</h5>
                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted.</p>
                          </td>
                          <td>60</td>
                          <td>{currency}50</td>
                          <td>{currency}3000.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="mt-0 mb-1 fs-14">Development</h5>
                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted.</p>
                          </td>
                          <td>100</td>
                          <td>{currency}50</td>
                          <td>{currency}5000.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="mt-0 mb-1 fs-14">Testing &amp; Bug Fixing</h5>
                            <p className="mb-0 text-muted">It is a long established fact that a reader will be distracted.</p>
                          </td>
                          <td>10</td>
                          <td>{currency}20</td>
                          <td>{currency}200.00</td>
                        </tr>
                        <tr>
                          <td colSpan={1} className="border-0" />
                          <td colSpan={2} className="border-0 fs-14 text-dark">
                            <b>Sub Total</b>
                          </td>
                          <td className="border-0 fs-14 text-dark">
                            <b>{currency}82,000.00</b>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1} className="border-0" />
                          <td colSpan={2} className="border-0 fs-14 text-dark">
                            <b>Tax Rate</b>
                          </td>
                          <td className="border-0 fs-14 text-dark">
                            <b>{currency}0.00%</b>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={1} className="border-0" />
                          <td colSpan={2} className="border-0 fs-14">
                            <b>Total</b>
                          </td>
                          <td className="border-0 fs-14">
                            <b>{currency}82,000.00</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <h5 className="mt-4">Terms And Condition :</h5>
                  <ul className="ps-3">
                    <li>
                      <small className="fs-12">All accounts are to be paid within 7 days from receipt of invoice. </small>
                    </li>
                    <li>
                      <small className="fs-12">To be paid by cheque or credit card or direct payment online.</small>
                    </li>
                    <li>
                      <small className="fs-12">
                        {' '}
                        If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the
                        agreed quoted fee noted above.
                      </small>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} className="align-self-center">
                  <div className="float-none float-md-end" style={{
                  width: '30%'
                }}>
                    <small>Account Manager</small>
                    <img src={signature} alt="signature" className="mt-2 mb-1" height={24} />
                    <p className="border-top">Signature</p>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="d-flex justify-content-center">
                <Col lg={12} xl={4} className="ms-auto align-self-center">
                  <div className="text-center">
                    <small className="fs-12">Thank you very much for doing business with us.</small>
                  </div>
                </Col>
                <Col lg={12} xl={4}>
                  <div className="float-end d-flex d-print-none mt-2 mt-md-0 gap-1">
                    <InvoicePrintButton />
                    <Button variant="primary">Submit</Button>
                    <Button variant="danger">Cancel</Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Invoice;