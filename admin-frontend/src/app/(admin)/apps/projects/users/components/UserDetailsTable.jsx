import ReactTable from '@/components/Table';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import clsx from 'clsx';
const columns = [{
  header: 'Name',
  cell: ({
    row: {
      original: {
        email,
        avatar,
        name
      }
    }
  }) => <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img src={avatar} className="me-2 thumb-md align-self-center rounded" alt="..." />
          <div className="flex-grow-1 text-truncate">
            <h6 className="m-0">{name}</h6>
            <span role="button" className="fs-12 text-primary">
              {email}
            </span>
          </div>
        </div>
      </div>
}, {
  header: 'ID',
  accessorKey: 'id'
}, {
  header: 'Role',
  cell: ({
    row: {
      original: {
        role
      }
    }
  }) => <span role="button" className="text-body text-decoration-underline">
        {role}
      </span>
}, {
  header: 'Last activity',
  cell: ({
    row: {
      original: {
        lastActivity
      }
    }
  }) => new Date(lastActivity).toLocaleString()
}, {
  header: 'Status',
  cell: ({
    row: {
      original: {
        status
      }
    }
  }) => <span className={clsx('badge rounded', status === 'Inactive' ? 'text-secondary bg-secondary-subtle' : 'text-success bg-success-subtle')}>
        {status}
      </span>
}, {
  header: 'Action',
  cell: () => <div className="text-end">
        <span role="button">
          <IconifyIcon icon="la:pen" className="text-secondary fs-18" />
        </span>
        <span role="button">
          <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
        </span>
      </div>
}];
const UserDetailsTable = ({
  users
}) => {
  const pageSizeList = [2, 5, 10, 20, 50];
  return <ReactTable columns={columns} data={users} rowsPerPageList={pageSizeList} pageSize={10} tableClass="mb-0" theadClass="table-light" showPagination />;
};
export default UserDetailsTable;