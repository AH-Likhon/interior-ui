"use client";

import CustomInput from "@/components/Forms/CustomInput";
import Form from "@/components/Forms/Form";
import UMBreadCrumb from "@/components/ui/BreadCrumb";
import {
  useMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";
import { useVerifyUser } from "@/utils/customHooks";
import { Button, Col, Row, message } from "antd";

const UpdateProfilePage = () => {
  useVerifyUser("admin");
  const { data, isLoading } = useMyProfileQuery("");

  const [updateMyProfile] = useUpdateMyProfileMutation();
  const onSubmit = async (data: any) => {
    try {
      const res = await updateMyProfile({ body: data });
      // @ts-ignore
      if (res?.data?.id) {
        message.success("User data updated successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  const defaultValues = {
    address: data?.address || "",
    contactNo: data?.contactNo || "",
    name: data?.name || "",
    // location: data?.location || "",
    // price: data?.price || "",
    // serviceStatus: data?.serviceStatus || "",
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Admin",
            link: "/admin",
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

        <Button type="primary" htmlType="submit" ghost>
          Update your profile
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProfilePage;
