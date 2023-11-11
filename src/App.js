import { useState } from "react";
import "./App.css";
import DataEntryForm from "./components/form/DataEntryForm";
import { Col, Row } from "antd";
import PreviewData from "./components/preview/PreviewData";

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <Row style={{ marginTop: "36px" }}>
        <Col
          span={12}
          offset={6}
          style={{
            border: "1px solid green",
            marginBottom: "8px",
          }}
        >
          <h1>Data entry form</h1>
          <Col style={{ padding: "8px" }}>
            <DataEntryForm data={data} setData={setData} />
          </Col>
        </Col>
      </Row>
      <Row>
        {Object.keys(data).length > 0 && (
          <Col span={12} offset={6}>
            <PreviewData data={data} />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default App;
