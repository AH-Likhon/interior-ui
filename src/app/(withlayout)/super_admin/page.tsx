"use client";

import { useVerifyUser } from "@/utils/customHooks";
import React from "react";

const SuperAdminPage = () => {
  useVerifyUser("super_admin");

  return (
    <div>
      <h1>Welcome to the super admin page</h1>
    </div>
  );
};

export default SuperAdminPage;
