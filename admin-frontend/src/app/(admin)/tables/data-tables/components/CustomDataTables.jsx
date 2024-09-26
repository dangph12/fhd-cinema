import ComponentContainerCard from '@/components/ComponentContainerCard'
import ReactTable from '@/components/Table'
import { Col, FormCheck, Row } from 'react-bootstrap'
const columns = [
  {
    id: 'select',
    header: () => <FormCheck id="customer-checkbox" />,
    cell: ({
      row: {
        original: { id },
      },
    }) => (
      <div
        style={{
          width: 16,
        }}>
        <FormCheck id={`checkbox-${id}`} />
      </div>
    ),
  },
  {
    header: 'accountId',
    accessorKey: 'accountId',
  },
  {
    header: 'accountName',
    accessorKey: 'accountName',
  },
  {
    header: 'accountType',
    accessorKey: 'customer.customerName',
  },
]
const CustomerDetailTable = ({ accounts }) => {
  const pageSizeList = [2, 5, 10, 20, 50]
  return (
    <ComponentContainerCard title="Accounts Details">
      <ReactTable
        columns={columns}
        data={accounts}
        rowsPerPageList={pageSizeList}
        pageSize={10}
        tableClass="datatable"
        theadClass="table-light"
        showPagination
      />
    </ComponentContainerCard>
  )
}
const CustomDataTables = ({ accounts }) => {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12}>
          <CustomerDetailTable accounts={accounts} />
        </Col>
      </Row>
    </>
  )
}
export default CustomDataTables;
