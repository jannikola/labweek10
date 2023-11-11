import { Col, Row } from "antd";
import React from "react";

function PreviewData({ data }) {
  console.log(data);
  return (
    <div style={{ border: "1px solid green", padding: "8px" }}>
      {Object.keys(data).map((key) => (
        <Row key={key} gutter={12} style={{ marginBottom: "4px" }}>
          <Col span={12} style={{ textAlign: "right", color: "green", fontSize: "22px" }}>
            <strong>{key}</strong>
          </Col>
          <Col style={{ textAlign: "left", fontSize: "22px" }} span={12}>{data[key]}</Col>
        </Row>
      ))}
    </div>
  );
}

export default PreviewData;
