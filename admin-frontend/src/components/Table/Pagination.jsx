import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import IconifyIcon from '../wrappers/IconifyIcon';
const getVisiblePages = (totalPages, currentPage) => {
  if (totalPages > 1) {
    if (currentPage === 1) {
      return [currentPage, currentPage + 1, currentPage + 2].filter(page => page > 0 && page <= totalPages);
    } else if (currentPage === totalPages) {
      return [currentPage - 2, currentPage - 1, currentPage].filter(page => page > 0 && page <= totalPages);
    } else {
      return [currentPage - 1, currentPage, currentPage + 1].filter(page => page > 0 && page <= totalPages);
    }
  }
  return [1];
};
const Pagination = ({
  table,
  rowsPerPageList,
  currentPage,
  totalPages
}) => {
  const pageSizeList = rowsPerPageList ?? [5, 10, 25, 50, 100];
  const [visiblePages, setVisiblePages] = useState([1]);
  useEffect(() => {
    setVisiblePages(getVisiblePages(totalPages, currentPage));
  }, [currentPage]);
  return <div className="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
      <div className="col-sm">
        <div className="d-flex align-items-center gap-2">
          <div className="text-muted text-nowrap">
            Showing <span className="fw-semibold">{currentPage}</span> of <span className="fw-semibold">{totalPages}</span> Pages
          </div>
          <div className="d-flex align-items-center gap-2">
            <label htmlFor="page-size-select">Show: </label>
            <select name="page-size-select" id="page-size-select" className="form-select w-auto" value={table.getState().pagination.pageSize} onChange={e => {
            table.setPageSize(Number(e.target.value));
          }}>
              {pageSizeList.map(pageSize => <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>)}
            </select>
          </div>
        </div>
      </div>
      <Col sm="auto" className="mt-3 mt-sm-0">
        <ul className="pagination pagination-rounded m-0">
          <li className="page-item">
            <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className={clsx('page-link', {
            disabled: !table.getCanPreviousPage()
          })}>
              <IconifyIcon icon="fa-solid:chevron-left" height={8} width={8} />
            </button>
          </li>
          {visiblePages.map((page, idx) => <li key={idx} className={clsx('page-item', {
          active: page === currentPage
        })}>
              <button onClick={() => table.setPageIndex(page - 1)} className="page-link">
                {page}
              </button>
            </li>)}
          <li className="page-item">
            <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className={clsx('page-link', {
            disabled: !table.getCanNextPage()
          })}>
              <IconifyIcon icon="fa-solid:chevron-right" height={8} width={8} />
            </button>
          </li>
        </ul>
      </Col>
    </div>;
};
export default Pagination;