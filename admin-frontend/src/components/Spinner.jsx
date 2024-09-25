import React from 'react';
const Spinner = ({
  tag = 'div',
  type = 'bordered',
  className,
  color,
  size,
  children
}) => {
  const Tag = tag || 'div';
  return <Tag role="status" className={`${type === 'bordered' ? 'spinner-border' : type === 'grow' ? 'spinner-grow' : ''} ${color ? `text-${color}` : 'text-primary'} ${size ? 'thumb-' + size : ''} ${className}`}>
      {children}
    </Tag>;
};
export default Spinner;