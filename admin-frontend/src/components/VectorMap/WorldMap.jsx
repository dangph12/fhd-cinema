'use client';

import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/jsvectormap.min.css';

//components
import BaseVectorMap from './BaseVectorMap';
const WorldVectorMap = ({
  width,
  height,
  options
}) => {
  return <>
      <BaseVectorMap width={width} height={height} options={options} type="world" />
    </>;
};
export default WorldVectorMap;