"use client";
import { Col, DatePicker, Row, message } from "antd";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "antd/es/layout/layout";
import CustomModal from "@/components/ui/CustomModal";
import {
  useCreateReviewMutation,
  useFindReviewQuery,
} from "@/redux/api/reviewApi";
import CustomInput from "@/components/Forms/CustomInput";
import CustomSelectField from "@/components/Forms/CustomSelectField";
import { ReviewRatingOptions } from "@/constants/global";
import Form from "@/components/Forms/Form";

const DetailsPage = ({ params }: any) => {
  // @ts-ignore
  const { role, id } = getUserInfo();
  const [date, setSelectedDate] = useState(dayjs());
  const [createBooking] = useCreateBookingMutation();
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const { data, isLoading } = useGetSingleServiceQuery(params?.id);
  const { data: reviewData, isLoading: reviewLoading } = useFindReviewQuery(
    params?.id
  );

  const [createReview] = useCreateReviewMutation();

  const handleBooking = async () => {
    try {
      if (!id) {
        router.push("/login");
      }

      const bookingData = {
        userId: id,
        serviceId: params.id,
        date: dayjs(date).toISOString(),
      };
      const res = await createBooking(bookingData);
      // console.log(res, "checkng response");
      // @ts-ignore
      if (res?.data?.id) {
        message.success("Booking created successfully");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    try {
      data["rating"] = parseInt(data["rating"]);
      // console.log(data, "checking data");
      const res = await createReview({ id: params.id, body: data });

      // @ts-ignore
      if (res?.data?.id) {
        message.success("Review added successfully!");
      }

      // @ts-ignore
      if (error?.statusCode !== 200) {
        // @ts-ignore
        message.error(error?.message);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <div style={{ marginBottom: "30px" }}>
        <Navbar></Navbar>
      </div>
      <div style={{ width: "50%", marginLeft: "30px", minHeight: "100vh" }}>
        <h1>Title: {data?.title}</h1>
        <span>
          Choose your booking date
          <DatePicker
            style={{ width: "40%", margin: "10px 0 10px 20px" }}
            size="large"
            defaultValue={dayjs()}
            onChange={(date, dateString) => setSelectedDate(date!)}
          />
        </span>
        <br />
        <p style={{ margin: "10px 0" }}>Description: {data?.description}</p>
        <h4 style={{ marginBottom: "20px" }}>Price: {data?.price}</h4>
        <Button
          disabled={role && role !== "CUSTOMER"}
          onClick={() => {
            setOpen(true);
          }}
          // onClick={() => handleBooking(params?.id)}
          type="primary"
          ghost
        >
          Book Service
        </Button>
      </div>
      {!reviewData && (
        <>
          <Form submitHandler={onSubmit}>
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
                Added your review
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
                    name="comments"
                    size="large"
                    label="Your comment"
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
                  <CustomSelectField
                    options={ReviewRatingOptions}
                    name="rating"
                    size="large"
                    label="Your review"
                  />
                </Col>
              </Row>
            </div>

            <Button htmlType="submit" type="primary" ghost>
              Add review
            </Button>
          </Form>
        </>
      )}
      <CustomModal
        title="Booking service"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => handleBooking()}
      >
        <p className="my-5">Do you want to booking this service?</p>
      </CustomModal>
    </div>
  );
};

export default DetailsPage;
