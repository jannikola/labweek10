import React from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";

const options = [
  {
    label: "Alberta",
    value: "Alberta",
  },
  {
    label: "British Columbia",
    value: "British Columbia",
  },
  {
    label: "Manitoba",
    value: "Manitoba",
  },
  {
    label: "New Brunswick",
    value: "New Brunswick",
  },
  {
    label: "Newfoundland and Labrador",
    value: "Newfoundland and Labrador",
  },
  {
    label: "Northwest Territories",
    value: "Northwest Territories",
  },
  {
    label: "Nova Scotia",
    value: "Nova Scotia",
  },
  {
    label: "Nunavut",
    value: "Nunavut",
  },
  {
    label: "Ontario",
    value: "Ontario",
  },
  {
    label: "Prince Edward Island",
    value: "Prince Edward Island",
  },
  {
    label: "Quebec",
    value: "Quebec",
  },
  {
    label: "Saskatchewan",
    value: "Saskatchewan",
  },
];

const DataEntryForm = ({ data, setData }) => {
  const [form] = Form.useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    const filteredData = Object.keys(data).reduce((acc, key) => {
      if (data[key]) {
        acc[key] = data[key];
      }
      return acc;
    }, {});

    // remove it from the data
    if (filteredData["Terms & Conditions"]) {
      delete filteredData["Terms & Conditions"];
    }
    setData(filteredData);

    // reset the form
    form.resetFields();
  };

  return (
    <Form
      layout={"vertical"}
      defaultValue={data}
      form={form}
      initialValues={{ layout: "vertical" }}
      onFinish={onSubmit}
    >
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item
            name="Email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Email is required field!",
              },
            ]}
          >
            <Input placeholder="Enter email" type="email" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="Full name"
            label="Full name"
            rules={[
              {
                required: true,
                message: "Full name is required field!",
              },
            ]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="Address" label="Address">
            <Input placeholder="1234 Main St" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="Address 2" label="Address 2">
            <Input placeholder="Apartment, studio, or floor" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="City" label="City">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="Province" label="Province">
            <Select placeholder="Choose..." options={options} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="Postal code" label="Postal code">
            <Input />
          </Form.Item>
        </Col>
        <Col span={16} offset={4}>
          <Form.Item
            name="Terms & Conditions"
            valuePropName="checked"
            required
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree with terms and conditions!")
                      ),
              },
            ]}
          >
            <Checkbox>Agree on Terms & Conditions</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={16} offset={4}>
          <Form.Item>
            <Button
              style={{ backgroundColor: "green" }}
              htmlType="submit"
              type="primary"
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default DataEntryForm;
