import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

import defaultNodes from "./component/nodes.js";
import defaultEdges from "./component/edges.js";

import "reactflow/dist/style.css";
import Dispaly_FlowChart from "./component/Dispaly_FlowChart.jsx";
import NewNode from "./component/NewNode.jsx";

function Flow() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-cen items-start">
        <NewNode />
      </div>
      <div>
        <Dispaly_FlowChart />
      </div>
    </div>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
