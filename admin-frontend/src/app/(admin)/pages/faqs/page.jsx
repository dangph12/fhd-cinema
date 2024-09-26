import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { splitArray } from '@/utils/array';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { faqs } from './data';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import QuestionForm from './components/QuestionForm';
import PageMetaData from '@/components/PageMetaData';
const QuestionWithAccordion = () => {
  return <ComponentContainerCard title="Questions With Accordion">
      <Accordion defaultActiveKey={'1'} id="accordionExample-faq">
        <AccordionItem eventKey="1">
          <AccordionHeader as="h5" className="m-0" id="headingOne">
            What is Rizz?
          </AccordionHeader>
          <AccordionBody>
            <strong>This is the first item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
            any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="2">
          <AccordionHeader as="h5" className="m-0" id="headingTwo">
            How buy Rizz on coin?
          </AccordionHeader>
          <AccordionBody>
            <strong>This is the second item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
            any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="3">
          <AccordionHeader as="h5" className="m-0" id="headingThree">
            What cryptocurrency can i use to buy Rizz?
          </AccordionHeader>
          <AccordionBody>
            <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about
            any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </ComponentContainerCard>;
};
const FAQs = () => {
  const faqChunks = splitArray(faqs, 3);
  return <>
      <PageMetaData title="FAQs" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle as="h4" className="pt-2 fw-semibold mb-2 fs-18">
                Most Commonly Asked Questions
              </CardTitle>
              <p>
                {' '}
                <IconifyIcon icon="la:grip-lines" className="text-primary fs-18" />{' '}
                <IconifyIcon icon="la:question-circle" className="text-primary fs-18" />{' '}
                <IconifyIcon icon="la:grip-lines" className="text-primary fs-18" />
              </p>
            </CardHeader>
            <CardBody className="pt-0">
              <Row>
                {faqChunks.map((chunk, idx) => <Col lg={6} key={idx}>
                    {chunk.map((faq, idx) => <div className="p-4 rounded mb-3 border-dashed border-theme-color" key={idx}>
                        <div className="mb-2">
                          <div className="d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto">
                            <IconifyIcon icon={faq.icon} className="h5 align-self-center mb-0 text-dark" />
                          </div>
                          <h6 className="fs-15 d-inline-block ms-1"> {faq.question}</h6>
                        </div>
                        <p className="fs-14 ms-45 text-muted mb-0">{faq.answer}</p>
                      </div>)}
                  </Col>)}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <QuestionWithAccordion />
        </Col>
        <Col md={6} lg={6}>
          <QuestionForm />
        </Col>
      </Row>
    </>;
};
export default FAQs;