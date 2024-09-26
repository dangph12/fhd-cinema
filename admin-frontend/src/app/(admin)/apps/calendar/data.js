export const defaultEvents = [{
  id: '1',
  title: 'Business Lunch',
  start: new Date(Date.now() - 158000000),
  end: new Date(Date.now() - 338000000),
  className: ''
}, {
  id: '2',
  title: 'Meeting',
  start: new Date(),
  end: new Date(),
  className: ''
}, {
  id: '3',
  title: 'Conference',
  start: new Date(Date.now() + 168000000),
  className: ''
}, {
  id: '4',
  title: 'Repeating Event',
  start: new Date(Date.now() + 338000000),
  end: new Date(Date.now() + 338000000 * 1.2),
  className: ''
}, {
  id: '5',
  title: 'Holiday',
  start: new Date(Date.now() + 888000000),
  end: new Date(Date.now() + 888000000 * 1.2),
  className: 'bg-danger-subtle'
}];