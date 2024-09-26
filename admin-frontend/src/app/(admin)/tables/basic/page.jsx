import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, Table } from 'react-bootstrap';
import { basicTableData, borderTableData, stripedRowTableData, tableData } from './data';
import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
const BasicTable = () => {
  return <ComponentContainerCard title="Basic Example">
      <div className="table-responsive">
        <Table className="mb-0 table-centered">
          <thead className="table-light">
            <tr>
              <th>Compny</th>
              <th>Bill</th>
              <th>Average Bill</th>
              <th>Paid Bill</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {basicTableData.map((item, idx) => <tr key={idx}>
                <td>
                  <img src={item.logo} alt="avatar" className="rounded-circle thumb-md me-1 d-inline" />
                  {item.name}
                </td>
                <td>{item.bill}</td>
                <td>
                  {currency}
                  {item.avgBill}
                </td>
                <td>
                  {currency}
                  {item.paidBill}
                </td>
                <td className="text-end">
                  <Dropdown className="d-inline-block">
                    <DropdownToggle as="a" className="arrow-none" id="dLabel11" role="button">
                      <IconifyIcon icon="la:ellipsis-v" className="fs-20 text-muted" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end" aria-labelledby="dLabel11">
                      <DropdownItem href="#">Creat Project</DropdownItem>
                      <DropdownItem href="#">Open Project</DropdownItem>
                      <DropdownItem href="#">Tasks Details</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const BorderedTable = () => {
  return <ComponentContainerCard title="Bordered Table">
      <div className="table-responsive">
        <table className="table table-bordered mb-0 table-centered">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Price</th>
              <th>Order Status</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {borderTableData.map((item, idx) => <tr key={idx}>
                <td>#{item.id}</td>
                <td>{item.date}</td>
                <td>
                  {currency}
                  {item.price}
                </td>
                <td>
                  <span className={`badge bg-${item.status === 'Rejected' ? 'danger' : 'success'}`}>{item.status}</span>
                </td>
                <td className="text-end">
                  <Dropdown className="d-inline-block">
                    <DropdownToggle as="a" className="arrow-none" id="dLabel11" role="button">
                      <IconifyIcon icon="la:ellipsis-v" className="fs-20 text-muted" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end" aria-labelledby="dLabel11">
                      <DropdownItem href="#">Creat Project</DropdownItem>
                      <DropdownItem href="#">Open Project</DropdownItem>
                      <DropdownItem href="#">Tasks Details</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </ComponentContainerCard>;
};
const StripedRowsTable = () => {
  return <ComponentContainerCard title="Striped Rows">
      <Table striped className="table mb-0">
        <thead className="table-light">
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Contact No</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {stripedRowTableData.map((item, idx) => <tr key={idx}>
              <td>
                <img src={item.avatar} alt="avatar" className="rounded-circle thumb-md me-1 d-inline" /> Aaron Poulin
              </td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
              <td className="text-end">
                <span role="button">
                  <IconifyIcon icon="la:pen" className="text-secondary font-16" />
                </span>
                <span role="button">
                  <IconifyIcon icon="la:trash-alt" className="text-secondary font-16" />
                </span>
              </td>
            </tr>)}
        </tbody>
      </Table>
    </ComponentContainerCard>;
};
const TableHeadOptions = () => {
  return <ComponentContainerCard title="Table Head Options">
      <div className="table-responsive">
        <Table className="mb-0">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>XYZ@Example.com</td>
              <td>
                <span className="badge bg-transparent border border-success text-success">Business</span>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>XYZ@Example.com</td>
              <td>
                <span className="badge bg-transparent border border-warning text-warning">Personal</span>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>XYZ@Example.com</td>
              <td>
                <span className="badge bg-transparent border border-danger text-danger">Disabled</span>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>XYZ@Example.com</td>
              <td>
                <span className="badge bg-transparent border border-success text-success">Business</span>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>XYZ@Example.com</td>
              <td>
                <span className="badge bg-transparent border border-warning text-warning">Personal</span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const HoverableRowsTable = () => {
  return <ComponentContainerCard title="Hoverable Rows">
      <div className="table-responsive">
        <Table className="table-hover mb-0">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 3).map((item, idx) => <tr key={idx}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
              </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const DarkTable = () => {
  return <ComponentContainerCard title="Dark Table">
      <div className="table-responsive">
        <Table variant="dark" className="mb-0">
          <thead>
            <tr>
              <th className="rounded-bottom-0">#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th className="rounded-bottom-0">Username</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 3).map((item, idx) => <tr key={idx}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
              </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const ContextualClasses = () => {
  return <ComponentContainerCard title="Contextual Classes">
      <div className="table-responsive-sm">
        <table className="table mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr className="table-success">
              <th scope="row">5</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr className="table-info">
              <th scope="row">7</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr className="table-warning">
              <th scope="row">9</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ComponentContainerCard>;
};
const CaptionsTable = () => {
  return <ComponentContainerCard title="Captions Table">
      <div className="table-responsive-sm">
        <Table className="mb-0">
          <caption>List of users</caption>
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 3).map((item, idx) => <tr key={idx}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
              </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const SmallTable = () => {
  return <ComponentContainerCard title="Small Table">
      <div className="table-responsive-sm">
        <Table size="sm" className="mb-0">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 3).map((item, idx) => <tr key={idx}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
              </tr>)}
          </tbody>
        </Table>
      </div>
    </ComponentContainerCard>;
};
const BasicTables = () => {
  return <>
      <PageMetaData title="Basic Tables" />
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <BasicTable />
        </Col>
        <Col md={6} lg={6}>
          <BorderedTable />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <StripedRowsTable />
        </Col>
        <Col md={6} lg={6}>
          <TableHeadOptions />
        </Col>
      </Row>
      <div className="row justify-content-center">
        <Col md={6} lg={6}>
          <HoverableRowsTable />
        </Col>
        <Col md={6} lg={6}>
          <DarkTable />
        </Col>
      </div>
      <div className="row justify-content-center">
        <Col md={6} lg={6}>
          <ContextualClasses />
        </Col>
        <Col md={6} lg={6}>
          <CaptionsTable />
          <SmallTable />
        </Col>
      </div>
    </>;
};
export default BasicTables;