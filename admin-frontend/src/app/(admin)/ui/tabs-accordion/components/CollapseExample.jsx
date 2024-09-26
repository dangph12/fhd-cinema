import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import { Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CollapseExample = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle();
  return <ComponentContainerCard title="Collapse">
      <p>
        <Link to="#" className="btn btn-primary mb-2 mb-lg-0 me-1" onClick={toggle}>
          Link with href
        </Link>
      </p>
      <Collapse in={isOpen}>
        <Card className="mb-0 card-body border-dashed border-theme-color rounded">
          <p className="mb-0 text-muted">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </Card>
      </Collapse>
    </ComponentContainerCard>;
};
export default CollapseExample;