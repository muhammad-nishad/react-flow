
import  { useState } from "react";
import ReactFlow, { MiniMap, Controls, Background } from "react-flow-renderer";
import Card from "./Card";

const initialNodes = [];
const initialEdges = [];

const FlowComponent = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeId, setNodeId] = useState(0);

  const addCard = (type) => {
    const newNode = {
      id: `${nodeId}`,
      data: {
        label: (
          <Card
            title={type === "request" ? "Request Card" : "Response Card"}
            fields={[
              {
                label: "Content Name",
                placeholder: "Enter here",
                key: "contentName",
              },
            ]}
            onChange={(key, value) => console.log(key, value)}
          />
        ),
      },
      position: { x: Math.random() * 300, y: Math.random() * 300 },
    };

    setNodes((nds) => [...nds, newNode]);
    setNodeId((prevId) => prevId + 1);
  };

  const onConnect = (params) => setEdges((eds) => [...eds, params]);

  return (
    <div>
      <button onClick={() => addCard("request")}>Add Request Card</button>
      <button onClick={() => addCard("response")}>Add Response Card</button>

      <div style={{ height: 500 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          style={{ background: "#f0f0f0" }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowComponent;
