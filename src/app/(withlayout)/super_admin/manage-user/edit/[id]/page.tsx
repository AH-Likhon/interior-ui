"use client";

import FormDatePicker from "@/components/Forms/CustomDatePicker";
import CustomInput from "@/components/Forms/CustomInput";
import Form from "@/components/Forms/Form";
import {
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";
import { Col, Row, message, Button } from "antd";
import React from "react";
import dayjs from "dayjs";
import CustomSelectField from "@/components/Forms/CustomSelectField";
import {
  BookingStatusOptions,
  ServiceStatusOptions,
  UserRole,
} from "@/constants/global";
import {
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import FormTextArea from "@/components/Forms/FormTextArea";
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
    role: data?.role || "",
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
            label: "manage-service",
            link: "/super_admin/manage-user",
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
            <Col
              className="gutter-row"
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <CustomSelectField
                options={UserRole}
                name="role"
                size="large"
                label="Role"
              />
            </Col>

            {/* <Col
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
            </Col> */}
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

export default ManageUserEditPage;
