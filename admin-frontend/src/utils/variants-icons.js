export const getProductStatusVariant = status => {
  let statusVariant = 'primary';
  if (status === 'Out of Stock') statusVariant = 'danger';else if (status === 'Inactive') statusVariant = 'warning';else if (status === 'Published') statusVariant = 'info';
  return statusVariant;
};
export const getCustomerStatusVariant = status => {
  let statusVariant = 'info';
  if (status === 'Inactive') statusVariant = 'danger';else if (status === 'Repeat') statusVariant = 'blue';
  return statusVariant;
};
export const getProductStatusIcon = status => {
  let statusIcon = 'fa-solid:check';
  if (status === 'Out of Stock') statusIcon = 'fa6-solid:xmark';else if (status === 'Inactive') statusIcon = 'fa6-solid:xmark';else if (status === 'In Stock') statusIcon = 'fa6-solid:box-archive';
  return statusIcon;
};
export const getKanbanSectionVariant = title => {
  let variant = 'primary';
  if (title === 'To Do') variant = 'pink';else if (title === 'In Progress') variant = 'warning';else if (title === 'Review') variant = 'success';else if (title === 'Done') variant = 'info';
  return variant;
};
export const getKanbanTaskPriorityVariant = priority => {
  let variant = 'warning';
  if (priority === 'High') variant = 'danger';else if (priority === 'Medium') variant = 'info';
  return variant;
};
export const getKanbanTaskTagVariant = tag => {
  let variant = 'primary';
  if (tag === 'API') variant = 'primary';else if (tag === 'Form Submit') variant = 'info';else if (tag === 'Responsive') variant = 'danger';
  return variant;
};