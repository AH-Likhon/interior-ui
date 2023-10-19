"use client";

import CustomInput from "@/components/Forms/CustomInput";
import { Col, Row, message, Button } from "antd";
import Image from "next/image";
import login from "../../assets/login.png";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schemas/register";
import Form from "@/components/Forms/Form";
import { useCreateUserMutation } from "@/redux/api/userApi";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const [createUser] = useCreateUserMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      if (data.password !== data.confirmPassword) {
        return message.error("Password does not matched!");
      }

      const { confirmPassword, ...othersData } = data;
      const res = await createUser({ ...othersData }).unwrap();

      if (res?.id) {
        message.success("User created successfully!");
        router.push("/login");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div>
      <Row style={{ minHeight: "100vh" }} justify="center" align="middle">
        <Col sm={12} md={16} lg={10}>
          <Image src={login} alt="Register image" width={450} />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1>Register your account!</h1>
          <div>
            <Form
              submitHandler={onSubmit}
              resolver={yupResolver(registerSchema)}
            >
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <CustomInput
                  name="email"
                  type="email"
                  size="large"
                  label="Email"
                  required
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <CustomInput
                  name="password"
                  type="password"
                  size="large"
                  label="Password"
                  required
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <CustomInput
                  name="confirmPassword"
                  type="password"
                  size="large"
                  label="Password"
                  required
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <CustomInput
                  name="name"
                  type="text"
                  size="large"
                  label="Name"
                  required
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <CustomInput
                  name="contactNo"
                  type="text"
                  size="large"
                  label="Contact No"
                  required
                />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                }}
              >
                <CustomInput
                  name="address"
                  type="text"
                  size="large"
                  label="Address"
                  required
                />
              </div>
              <Button type="primary" ghost htmlType="submit">
                Register
              </Button>
            </Form>
            <Link href="/login">
              <p style={{ marginTop: "10px" }}>
                Already registered? Please log in
              </p>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
