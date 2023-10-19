"use client";
import { DatePicker, message } from "antd";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import Navbar from "@/components/ui/Navbar";

const DetailsPage = ({ params }: any) => {
  // @ts-ignore
  const { role, id } = getUserInfo();
  const [date, setSelectedDate] = useState(dayjs());
  const [createBooking] = useCreateBookingMutation();
  const router = useRouter();
  const { data, isLoading } = useGetSingleServiceQuery(params?.id);
  if (isLoading) {
    return <p>loading</p>;
  }
  const handleBooking = async (serviceId: string) => {
    if (!id) {
      router.push("/login");
    }

    const bookingData = {
      userId: id,
      serviceId: params.id,
      date: dayjs(date).toISOString(),
    };
    const res = await createBooking(bookingData);
    console.log(res, "checkng response");
    // @ts-ignore
    if (res?.data?.id) {
      message.success("Booking created successfully");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1>{data?.title}</h1>
      <DatePicker
        style={{ width: "100%" }}
        size="large"
        defaultValue={dayjs()}
        onChange={(date, dateString) => setSelectedDate(date!)}
      />
      <Button
        disabled={role && role !== "CUSTOMER"}
        onClick={() => handleBooking(data?.id)}
        type="primary"
        ghost
      >
        Book Service
      </Button>
    </div>
  );
};

export default DetailsPage;
