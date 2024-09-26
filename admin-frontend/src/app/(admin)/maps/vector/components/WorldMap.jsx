import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/jsvectormap.min.css';
import BaseVectorMap from '@/components/VectorMap/BaseVectorMap';
const WorldMap = ({
  width,
  height,
  options
}) => <BaseVectorMap width={width} height={height} options={options} type="world" />;
export default WorldMap;