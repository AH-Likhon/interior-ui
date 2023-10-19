"use client";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { Layout, Row, Space, Spin } from "antd";
import DashboardSidebar from "@/components/ui/Sidebar";
import SidebarContents from "@/components/ui/SidebarContents";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);
  if (!userLoggedIn) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  // if (!userLoggedIn) {
  //   return null;
  // }

  return (
    <Layout hasSider>
      <DashboardSidebar />
      <SidebarContents>{children}</SidebarContents>

      {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
    </Layout>
  );
};

// export default DashboardLayout;
export default dynamic(() => Promise.resolve(DashboardLayout), { ssr: false });
