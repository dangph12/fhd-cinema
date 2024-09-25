import ComponentContainerCard from '@/components/ComponentContainerCard';
import { socialStats } from '../data';
const SocialMedia = () => {
  return <ComponentContainerCard title="By Social Media">
      <div className="table-responsive">
        <table className="table mb-0">
          <thead className="table-light">
            <tr>
              <th>Source</th>
              <th className="text-end">Views</th>
              <th className="text-end">Uniques</th>
            </tr>
          </thead>
          <tbody>
            {socialStats.map((social, idx) => <tr key={idx}>
                <td>{social.source}</td>
                <td className="text-end">{social.views}k</td>
                <td className="text-end">{social.uniques}k</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </ComponentContainerCard>;
};
export default SocialMedia;