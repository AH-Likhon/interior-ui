"use client";
import { getUserInfo } from "@/services/auth.service";
import { useVerifyUser } from "@/utils/customHooks";
import { useRouter } from "next/navigation";
import React from "react";

const AdminPage = () => {
  useVerifyUser("admin");

  return (
    <div>
      <h1>this is admin page</h1>
    </div>
  );
};

export default AdminPage;
