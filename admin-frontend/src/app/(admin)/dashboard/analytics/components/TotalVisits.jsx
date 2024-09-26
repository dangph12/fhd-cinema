import ComponentContainerCard from '@/components/ComponentContainerCard';
import { visits } from '../data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
const TotalVisits = () => {
  return <ComponentContainerCard title="Total Visits">
      <div className="table-responsive">
        <table className="table mb-0">
          <thead className="table-light">
            <tr>
              <th className="border-top-0">Channel</th>
              <th className="border-top-0">Sessions</th>
              <th className="border-top-0">Prev.Period</th>
              <th className="border-top-0">% Change</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit, idx) => <tr key={idx}>
                <td>
                  <Link to="" className="text-primary">
                    {visit.name}
                  </Link>
                </td>
                <td>
                  {visit.sessions.amount}
                  <small className="text-muted">({visit.sessions.percentage}%)</small>
                </td>
                <td>
                  {visit.period.amount}
                  <small className="text-muted">({visit.period.percentage}%)</small>
                </td>
                <td>
                  {visit.changeVariant === 'danger' ? '-' : ''}
                  {visit.change}%{' '}
                  <IconifyIcon icon={`fa6-solid:${visit.changeVariant === 'danger' ? 'caret-down' : 'caret-up'}`} className={`text-${visit.changeVariant} font-16`} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <p className="m-0 fs-12 fst-italic ps-2 text-muted">
        Last data updated - 13min ago{' '}
        <Link to="" className="link-danger ms-1 ">
          <IconifyIcon icon="iconoir:refresh" className="align-middle" />
        </Link>
      </p>
    </ComponentContainerCard>;
};
export default TotalVisits;