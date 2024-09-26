import ComponentContainerCard from '@/components/ComponentContainerCard';
import { socialStats } from '../data';
const VisitsDetails = () => {
  return <ComponentContainerCard title="Visits Details">
      <div className="table-responsive">
        <table className="table mb-0">
          <thead className="table-light">
            <tr>
              <th>URL</th>
              <th className="text-end">Views</th>
              <th className="text-end">Uniques</th>
            </tr>
          </thead>
          <tbody>
            {socialStats.map((social, idx) => <tr key={idx}>
                <td>{social.url}</td>
                <td className="text-end">{social.views}k</td>
                <td className="text-end">{social.uniques}k</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </ComponentContainerCard>;
};
export default VisitsDetails;