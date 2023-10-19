"use client";

import FormDatePicker from "@/components/Forms/CustomDatePicker";
import CustomInput from "@/components/Forms/CustomInput";
import Form from "@/components/Forms/Form";
import { Col, Row, message, Button } from "antd";
import React from "react";
import UMBreadCrumb from "@/components/ui/BreadCrumb";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";
import { useVerifyUser } from "@/utils/customHooks";

type IDProps = {
  params: any;
};

const ManageUserEditPage = ({ params }: IDProps) => {
  useVerifyUser("super_admin");
  const { id } = params;

  const { data, isLoading } = useGetSingleUserQuery(id);

  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await updateUser({ id, body: data });
      // @ts-ignore
      if (res?.data?.id) {
        message.success("User data updated successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  // @ts-ignore
  const defaultValues = {
    address: data?.address || "",
    contactNo: data?.contactNo || "",
    name: data?.name || "",
  };
  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super admin",
            link: "/super_admin",
          },
          {
            label: "manage-admin",
            link: "/super_admin/manage-admin",
          },
        ]}
      />
      <h1>Update user data</h1>
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
                name="address"
                size="large"
                label="Address"
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
                name="contactNo"
                size="large"
                label="Contact No"
              />
            </Col>
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <CustomInput type="text" name="name" size="large" label="Name" />
            </Col>
          </Row>
        </Row>

        <Button type="primary" ghost htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ManageUserEditPage;
