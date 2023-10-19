"use client";

import CustomInput from "@/components/Forms/CustomInput";
import Form from "@/components/Forms/Form";
import UMBreadCrumb from "@/components/ui/BreadCrumb";
import { useUpdateUserPasswordMutation } from "@/redux/api/authApi";

import { changePasswordSchema } from "@/schemas/changePassword";
import { getUserInfo } from "@/services/auth.service";
import { useVerifyUser } from "@/utils/customHooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import React from "react";

const ChangePasswordPage = () => {
  useVerifyUser("admin");
  const [updateUserPassword] = useUpdateUserPasswordMutation();
  // @ts-ignore
  const { id } = getUserInfo();

  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      const res = await updateUserPassword({ body: data });

      // @ts-ignore
      if (res?.data?.id) {
        message.success("Password updated successfully!");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <div>
        <Form
          submitHandler={onSubmit}
          resolver={yupResolver(changePasswordSchema)}
        >
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Service Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="password"
                  name="previousPassword"
                  size="large"
                  label="Old Password"
                />
              </Col>
              <br />
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CustomInput
                  type="password"
                  name="newPassword"
                  size="large"
                  label="New Password"
                />
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary" ghost>
            Update Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
