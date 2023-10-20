"use client";

import UMBreadCrumb from "@/components/ui/BreadCrumb";
import { useMyProfileQuery } from "@/redux/api/userApi";
import { useVerifyUser } from "@/utils/customHooks";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const SuperAdminPage = () => {
  useVerifyUser("super_admin");

  const { data, isLoading } = useMyProfileQuery("");

  // console.log("Data", data);

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
        ]}
      />
      <div>
        <h1 style={{ margin: "10px 0" }}>Your profile page</h1>
        <p style={{ margin: "10px 0" }}>Your name: {data?.name}</p>
        <p style={{ margin: "10px 0" }}>Your email: {data?.email}</p>
        <p style={{ margin: "10px 0" }}>Your address: {data?.address}</p>
        <p style={{ margin: "10px 0" }}>Your contact No: {data?.contactNo}</p>
      </div>
      <Link href="/super_admin/update-profile">
        <Button type="primary" ghost>
          Update my profile
        </Button>
      </Link>
    </div>
  );
};

export default SuperAdminPage;
