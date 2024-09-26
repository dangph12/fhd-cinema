import ReactTable from '@/components/Table';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { FormCheck } from 'react-bootstrap';
const columns = [{
  id: 'select',
  header: () => <FormCheck id="user-checkbox" />,
  cell: ({
    row: {
      original: {
        id
      }
    }
  }) => <div style={{
    width: 16
  }}>
        <FormCheck id={`checkbox-${id}`} />
      </div>
}, {
  id: '2',
  header: () => <div className="ps-0">Customer</div>,
  cell: ({
    row: {
      original: {
        name,
        avatar
      }
    }
  }) => <div className="ps-0">
        <img src={avatar} alt="user" className="thumb-md d-inline rounded-circle me-1" />
        <p className="d-inline-block align-middle mb-0">
          <span className="font-13 fw-medium">{name}</span>
        </p>
      </div>
}, {
  header: 'Email',
  accessorKey: 'email'
}, {
  header: 'Phone No',
  accessorKey: 'phoneNo'
}, {
  header: 'Status',
  cell: ({
    row: {
      original: {
        status
      }
    }
  }) => <span className={`badge  bg-${status === 'Inactive' ? 'secondary' : 'info'}-subtle text-${status === 'Inactive' ? 'secondary' : 'info'}`}>
        {status}
      </span>
}, {
  header: 'Source',
  accessorKey: 'source'
}, {
  id: '3',
  header: () => <div className="text-end">Action</div>,
  cell: () => <div className="text-end">
        <span role="button">
          <IconifyIcon icon="la:info-circle" className="text-secondary fs-18 me-1" />
        </span>
        <span role="button">
          <IconifyIcon icon="la:pen" className="text-secondary fs-18 me-1" />
        </span>
        <span role="button">
          <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
        </span>
      </div>
}];
const ContactListTable = ({
  contacts
}) => {
  const pageSizeList = [2, 5, 10, 20, 50];
  return <ReactTable columns={columns} data={contacts} rowsPerPageList={pageSizeList} pageSize={10} tableClass="mb-0 checkbox-all text-nowrap" theadClass="table-light" showPagination />;
};
export default ContactListTable;