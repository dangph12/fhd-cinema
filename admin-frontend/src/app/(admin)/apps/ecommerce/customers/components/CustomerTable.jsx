import ReactTable from '@/components/Table';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getCustomerStatusVariant } from '@/utils/variants-icons';
import { FormCheck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const columns = [{
  id: 'select',
  header: () => <FormCheck id="customer-checkbox" />,
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
        avatar,
        id
      }
    }
  }) => <Link to={`/apps/ecommerce/customers/${id}`} className="ps-0 text-body">
        <img src={avatar} alt="avatar" className="thumb-md d-inline rounded-circle me-1" />
        <p className="d-inline-block align-middle mb-0">
          <span className="font-13 fw-medium">{name}</span>
        </p>
      </Link>
}, {
  header: 'Email',
  accessorKey: 'email'
}, {
  header: 'Status',
  cell: ({
    row: {
      original: {
        status
      }
    }
  }) => <span className={`badge  bg-${getCustomerStatusVariant(status)}-subtle text-${getCustomerStatusVariant(status)}`}>{status}</span>
}, {
  header: 'Order',
  accessorKey: 'order'
}, {
  header: 'Spend',
  cell: ({
    row: {
      original: {
        spend
      }
    }
  }) => <>
        {currency}
        {spend}
      </>
}, {
  id: '3',
  header: () => <div className="text-end">Action</div>,
  cell: () => <div className="text-end">
        <span role="button">
          <IconifyIcon icon="la:pen" className="text-secondary fs-18" />
        </span>
        <span role="button">
          <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
        </span>
      </div>
}];
const CustomerTable = ({
  customers
}) => {
  const pageSizeList = [2, 5, 10, 20, 50];
  return <ReactTable columns={columns} data={customers} rowsPerPageList={pageSizeList} pageSize={10} tableClass="mb-0 checkbox-all text-nowrap" theadClass="table-light" showPagination />;
};
export default CustomerTable;