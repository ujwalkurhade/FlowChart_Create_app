import React from "react";
import { useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";
let nodeId = 0;

const NewNode = () => {
  const reactFlowInstance = useReactFlow();

  // Reactring Shap Button
  const rectingleClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 200,
        y: Math.random() * 500,
      },

      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);
  // Ovel Shap Button
  const ovalClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 200,
        y: Math.random() * 500,
      },
      style: {
        width: 160,
        height: 55,
        borderRadius: 80,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  // Dimand Shap Button

  const dimand = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 200,
        y: Math.random() * 500,
      },
      style: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <div>
      <button
        onClick={rectingleClick}
        className="border-2"
      >
        RectingleButtom
      </button>
      <button onClick={ovalClick} className="border-2">
        OvelButtom
      </button>
      <button onClick={dimand} className="border-2">
        Dimand
      </button>
    </div>
  );
};

export default NewNode;
