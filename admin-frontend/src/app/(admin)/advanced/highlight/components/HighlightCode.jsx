import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
const HighlightCode = ({
  code,
  language
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <pre className={`rounded language-${language}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>;
};
export default HighlightCode;