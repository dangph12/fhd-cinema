import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Row } from 'react-bootstrap';
import AllTabs from './components/AllTabs';
import CollapseExample from './components/CollapseExample';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
const FlushExample = () => {
  return <ComponentContainerCard title="Flush Example">
      <Accordion flush>
        {Array.from(new Array(Math.floor(3))).map((_accordion, idx) => {
        return <AccordionItem eventKey={`${idx}`} key={idx}>
              <AccordionHeader as="h5" className="m-0">
                <div className="fw-semibold">Accordion Item #{idx + 1}</div>
              </AccordionHeader>
              <AccordionBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth
                nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
              </AccordionBody>
            </AccordionItem>;
      })}
      </Accordion>
    </ComponentContainerCard>;
};
const AccordionExample = () => {
  return <ComponentContainerCard title="Accordion Example">
      <Accordion defaultActiveKey="0">
        {Array.from(new Array(Math.floor(3))).map((_accordion, idx) => {
        return <AccordionItem eventKey={`${idx}`} key={idx}>
              <AccordionHeader as="h5" className="m-0">
                <div className="fw-semibold">Accordion Item #{idx + 1}</div>
              </AccordionHeader>
              <AccordionBody>
                <strong>This is the {idx + 1} item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding
                via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>;
      })}
      </Accordion>
    </ComponentContainerCard>;
};
const AlwaysOpenAccordion = () => {
  return <ComponentContainerCard title="Always Open">
      <Accordion alwaysOpen defaultActiveKey="0">
        {Array.from(new Array(Math.floor(3))).map((_accordion, idx) => {
        return <AccordionItem eventKey={`${idx}`} key={idx}>
              <AccordionHeader as="h5" className="m-0">
                <div className="fw-semibold">Accordion Item #{idx + 1}</div>
              </AccordionHeader>
              <AccordionBody>
                <strong>This is the {idx + 1} item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding
                via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that
                just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit overflow.
              </AccordionBody>
            </AccordionItem>;
      })}
      </Accordion>
    </ComponentContainerCard>;
};
const TabsAndAccordions = () => {
  return <>
      <PageMetaData title="Tabs and Accordions" />
      <AllTabs />
      <Row className="justify-content-center">
        <Col md={6}>
          <CollapseExample />
        </Col>
        <Col md={6}>
          <FlushExample />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <AccordionExample />
        </Col>
        <Col md={6}>
          <AlwaysOpenAccordion />
        </Col>
      </Row>
    </>;
};
export default TabsAndAccordions;