"use client";

import { Col, Row, message, Button } from "antd";
import Image from "next/image";
import login from "../../assets/login.png";
import { SubmitHandler } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import Form from "@/components/Forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "@/components/Forms/CustomInput";
import { loginSchema } from "@/schemas/login";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import Link from "next/link";

type FormValues = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const [loginUser] = useLoginUserMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await loginUser({ ...data }).unwrap();

      if (res?.accessToken) {
        message.success("User logged in successfully!");
        router.back();
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  return (
    <div>
      <Row style={{ minHeight: "100vh" }} justify="center" align="middle">
        <Col sm={12} md={16} lg={10}>
          <Image src={login} alt="login image" width={450} />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1>Login to your account!</h1>
          <div>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
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
              <Button type="primary" ghost htmlType="submit">
                Login
              </Button>
            </Form>
            <Link href="/register">
              <p style={{ marginTop: "10px" }}>
                Have no account? Click to register
              </p>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
