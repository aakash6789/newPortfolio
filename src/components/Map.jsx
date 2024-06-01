
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";
import features from '../features.json'

const Map = () => {
  return (
    <ComposableMap>
    <Geographies geography={features}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} style={{
            default: { fill: "#FFFFFF" },
            hover: { fill: "#FFFFFF" },
            pressed: { fill: "#FFFFFF" },
          }} />
        ))
      }
    </Geographies>
    <Annotation
      subject={[74.5937, 19.0760]}
      dx={60}
      dy={130}
      connectorProps={{
        stroke: "blue",
        strokeWidth: 3,
        strokeLinecap: "round"
      }}
    >
      {/* <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
        {"India"}
      </text> */}
      <text x="-2" y='8' textAnchor="end" alignmentBaseline="middle" fill="white">
      {"India"}
      </text>
    </Annotation>
  </ComposableMap>
  );
};

export default Map;
