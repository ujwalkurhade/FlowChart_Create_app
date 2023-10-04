import React from "react";

import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

import defaultNodes from "./nodes.js";
import defaultEdges from "./edges.js";
const edgeOptions = {
  animated: false,
  style: {
    stroke: "white",
  },
};
const connectionLineStyle = { stroke: "white" };
const Dispaly_FlowChart = () => {
  return (
    <div className="h-[99vh] w-[180vh] flex justify-center items-center">
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        className="bg-[#151517]"
        defaultEdgeOptions={edgeOptions}
        // fitView
        connectionLineStyle={connectionLineStyle}
      />
    </div>
  );
};

export default Dispaly_FlowChart;
