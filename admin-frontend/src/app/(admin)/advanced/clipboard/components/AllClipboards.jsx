import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useClipboard from '@/hooks/useClipboard';
import { useRef, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { toast } from 'sonner';
const ClipboardExample = () => {
  const inputRef = useRef(null);
  const [inputText, setText] = useState('Welcome to Rizz!');
  const [, copy] = useClipboard();
  const onCopy = text => {
    copy(text).then(copied => {
      if (copied) {
        toast.success('Copy To Clipboard', {
          position: 'top-right',
          duration: 2000
        });
      }
    });
  };
  const onCut = text => {
    copy(text).then(copied => {
      if (copied) {
        toast.success('Cut', {
          position: 'top-right',
          duration: 2000
        });
      }
    });
    setText('');
  };
  return <ComponentContainerCard title="Clipboard Examples">
      <div className="input-group">
        <input ref={inputRef} name="clipboard" type="text" onChange={e => setText(e.target.value)} value={inputText} className="form-control" id="clipboardInput" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <Button variant="secondary" onClick={() => onCopy(inputRef.current?.value ?? '')}>
          <IconifyIcon icon="fa-regular:copy" className="me-2 fs-14" />
          Copy
        </Button>
        <Button variant="primary" onClick={() => onCut(inputRef.current?.value ?? '')}>
          <IconifyIcon icon="fa-solid:cut" className="me-2 fs-14" />
          Cut
        </Button>
      </div>
    </ComponentContainerCard>;
};
const TextAreaClipboard = () => {
  const inputRef = useRef(null);
  const [inputText, setText] = useState('Welcome to Rizz !');
  const [, copy] = useClipboard();
  const onCopy = text => {
    copy(text).then(copied => {
      if (copied) {
        toast.success('Copy To Clipboard', {
          position: 'top-right',
          duration: 2000
        });
      }
    });
  };
  const onCut = text => {
    copy(text).then(copied => {
      if (copied) {
        toast.success('Cut', {
          position: 'top-right',
          duration: 2000
        });
      }
    });
    setText('');
  };
  return <ComponentContainerCard title="Textarea Example">
      <textarea ref={inputRef} onChange={e => setText(e.target.value)} value={inputText} className="form-control" rows={3} />
      <div className="mt-3">
        <Button variant="secondary" className="btn-clipboard me-1" onClick={() => onCopy(inputRef.current?.value ?? '')}>
          <IconifyIcon icon="fa-regular:copy" className="me-2 fs-14" />
          Copy
        </Button>
        <Button variant="primary" className="btn-clipboard" onClick={() => onCut(inputRef.current?.value ?? '')}>
          <IconifyIcon icon="fa-solid:cut" className="me-2 fs-14" />
          Cut
        </Button>
      </div>
    </ComponentContainerCard>;
};
const ParagraphClipboardExample = () => {
  const [, copy] = useClipboard();
  const onCopy = text => {
    copy(text).then(copied => {
      if (copied) {
        toast.success('Copy To Clipboard', {
          position: 'top-right',
          duration: 2000
        });
      }
    });
  };
  return <ComponentContainerCard title="Paragraph Examples">
      <p id="clipboardParagraph" className="border p-3">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
      </p>
      <div className="mt-3">
        <Button variant="secondary" className="btn-clipboard" onClick={() => onCopy('Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked')}>
          <IconifyIcon icon="fa-regular:copy" className="me-2 fs-14" />
          Copy
        </Button>
      </div>
    </ComponentContainerCard>;
};
const AllClipboards = () => {
  return <Row className="justify-content-center">
      <Col md={6}>
        <ClipboardExample />
        <ParagraphClipboardExample />
      </Col>
      <Col md={6}>
        <TextAreaClipboard />
      </Col>
    </Row>;
};
export default AllClipboards;