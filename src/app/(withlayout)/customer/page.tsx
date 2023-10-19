"use client";

import { getUserInfo } from "@/services/auth.service";
import { useVerifyUser } from "@/utils/customHooks";
import { useRouter } from "next/navigation";

const CustomerPage = () => {
  useVerifyUser("customer");
  // const router = useRouter();
  // const { role } = getUserInfo() as any;
  // const roleToLowerCase = role.toString().toLowerCase();
  // if (roleToLowerCase !== "customer") {
  //   router.push("/login");
  // }
  return (
    <div>
      <h1>Welcome to my profile</h1>
    </div>
  );
};

export default CustomerPage;
