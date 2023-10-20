"use client";

import UMBreadCrumb from "@/components/ui/BreadCrumb";
import { useMyProfileQuery } from "@/redux/api/userApi";
import { useVerifyUser } from "@/utils/customHooks";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const CustomerPage = () => {
  useVerifyUser("customer");

  const { data, isLoading } = useMyProfileQuery("");
  if (isLoading) {
    return <p>loading</p>;
  }
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "Customer",
            link: "/customer",
          },
        ]}
      />
      <div>
        <h1 style={{ margin: "10px 0" }}>Your profile page</h1>
        <p style={{ margin: "10px 0" }}>Your name: {data?.name}</p>
        <p style={{ margin: "10px 0" }}>Your email: {data?.email}</p>
        <p style={{ margin: "10px 0" }}>Your address: {data?.address}</p>
        <p style={{ margin: "10px 0" }}>Your contact No: {data?.contactNo}</p>
      </div>
      <Link href="/customer/update-profile">
        <Button type="primary" ghost>Update your profile</Button>
      </Link>
    </div>
  );
};

export default CustomerPage;
