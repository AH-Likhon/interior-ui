"use client";

import CustomInput from "@/components/Forms/CustomInput";
import Form from "@/components/Forms/Form";

import { Col, Row, message, Button } from "antd";
import React from "react";
import CustomSelectField from "@/components/Forms/CustomSelectField";
import { ServiceStatusOptions } from "@/constants/global";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/BreadCrumb";

type IDProps = {
  params: any;
};

const ServiceEdit = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useGetSingleServiceQuery(id);

  const [updateService] = useUpdateServiceMutation();

  const onSubmit = async (data: any) => {
    // const tempObject = { ...values };
    // tempObject["date"] = dayjs(tempObject["date"]).toISOString();
    data["price"] = parseFloat(data["price"]);
    // console.log(data);
    try {
      const res = await updateService({ id, body: data });
      // @ts-ignore
      if (res?.data?.id) {
        message.success("Service data updated successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    title: data?.title || "",
    description: data?.description || "",
    category: data?.category || "",
    location: data?.location || "",
    price: data?.price || "",
    serviceStatus: data?.serviceStatus || "",
  };
  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "manage-service",
            link: "/admin/manage-service",
          },
        ]}
      />
      <h1>Update your service data</h1>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <CustomInput
                type="text"
                name="title"
                size="large"
                label="Title"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <CustomInput
                type="text"
                name="category"
                size="large"
                label="Category"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <CustomInput
                type="text"
                name="location"
                size="large"
                label="Location"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <CustomInput
                type="number"
                name="price"
                size="large"
                label="Price"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <CustomSelectField
                options={ServiceStatusOptions}
                name="serviceStatus"
                size="large"
                label="Service Status"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormTextArea name="description" label="Description" />
            </Col>
          </Row>
        </Row>
        {/* <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormDatePicker
              defaultValue={defaultValues?.date}
              name="date"
              label="Update your date"
            />
          </Col>
        </Row> */}
        <Button type="primary" htmlType="submit" ghost>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ServiceEdit;
