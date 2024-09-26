import { useEffect } from 'react';
import Prism from 'prismjs';
import { Card, CardBody } from 'react-bootstrap';
const HighlightText = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <Card>
      <CardBody>
        <pre className="py-0 my-0 rounded">
          <code className="language-css">
            {'\n'}font-family : &apos;Be Vietnam Pro&apos;, sans-serif;{'\n'}
            {'                '}
          </code>
        </pre>
      </CardBody>
    </Card>;
};
export default HighlightText;