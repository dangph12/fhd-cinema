"use client";

import { useEffect, useState, useRef } from 'react';
const BaseVectorMap = ({
  width,
  height,
  options,
  type
}) => {
  const selectorId = type + new Date().getTime();
  const ref = useRef(null);
  const [map, setMap] = useState();
  useEffect(() => {
    if (!map && ref.current) {
      const map = new window['jsVectorMap']({
        selector: ref.current,
        map: type,
        ...options
      });
      setMap(map);
    }
  }, [selectorId, map, options, type, ref]);
  return <div id={selectorId} ref={ref} style={{
    width: width,
    height: height
  }}></div>;
};
export default BaseVectorMap;