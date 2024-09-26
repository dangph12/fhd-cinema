import ReactTable from '@/components/Table';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getProductStatusIcon, getProductStatusVariant } from '@/utils/variants-icons';
import { Link } from 'react-router-dom';
const columns = [{
  header: 'ID',
  cell: ({
    row: {
      original: {
        id
      }
    }
  }) => <Link to={`/apps/ecommerce/orders/${id}`}>#{id}</Link>
}, {
  header: 'Product',
  cell: ({
    row: {
      original: {
        name,
        description
      }
    }
  }) => <p className="d-inline-block align-middle mb-0">
        <span className="d-block align-middle mb-0 product-name text-body">{name}</span>
        <span className="text-muted font-13">{description}</span>
      </p>
}, {
  header: 'Date',
  cell: ({
    row: {
      original: {
        createdAt
      }
    }
  }) => <>{createdAt.toLocaleDateString()}</>
}, {
  header: 'Payment',
  accessorKey: 'paymentType'
}, {
  header: 'Status',
  cell: ({
    row: {
      original: {
        status
      }
    }
  }) => <span className={`badge bg-${getProductStatusVariant(status)}-subtle text-${getProductStatusVariant(status)}`}>
        <IconifyIcon icon={getProductStatusIcon(status)} className="me-1" /> {status}
      </span>
}, {
  header: 'Price',
  cell: ({
    row: {
      original: {
        sellPrice
      }
    }
  }) => <>
        {currency}
        {sellPrice}
      </>
}, {
  id: 'action',
  header: () => <div className="text-end">Action</div>,
  cell: () => <div className="text-end w-100">
        <span role="button">
          <IconifyIcon icon="la:pen" className="text-secondary fs-18" />
        </span>
        <span role="button">
          <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
        </span>
      </div>
}];
const OrdersTable = ({
  orders
}) => {
  const pageSizeList = [2, 5, 10, 20, 50];
  return <ReactTable columns={columns} data={orders} rowsPerPageList={pageSizeList} pageSize={10} tableClass="mb-0" theadClass="table-light" showPagination />;
};
export default OrdersTable;