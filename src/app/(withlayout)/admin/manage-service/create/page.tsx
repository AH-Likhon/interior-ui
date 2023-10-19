"use client";

import FormDatePicker from "@/components/Forms/CustomDatePicker";
import CustomInput from "@/components/Forms/CustomInput";
import CustomSelectField from "@/components/Forms/CustomSelectField";
import Form from "@/components/Forms/Form";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/BreadCrumb";
import { ServiceStatusOptions } from "@/constants/global";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { serviceSchema } from "@/schemas/service";
import { useVerifyUser } from "@/utils/customHooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";

const CreateServicePage = () => {
  useVerifyUser("admin");
  const [createService] = useCreateServiceMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      data["price"] = parseFloat(data["price"]);
      const res = await createService(data);
      console.log(res, "checking response");
      // @ts-ignore
      if (res?.data?.id) {
        message.success("Admin created successfully!");
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
          {
            label: "manage-service",
            link: "/admin/manage-service",
          },
        ]}
      />
      <h1>Manage service</h1>

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
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
          </div>

          <Button htmlType="submit" type="primary" ghost>
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateServicePage;
