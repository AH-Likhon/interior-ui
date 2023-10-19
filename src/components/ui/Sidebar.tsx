"use client";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { getUserInfo } from "@/services/auth.service";
import { sidebarItems } from "@/constants/sidebarItems";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const { Sider } = Layout;

const DashboardSidebar = () => {
  const { role } = getUserInfo() as any;
  const roleToLowerCase = role.toString().toLowerCase();
  const router = useRouter();
  if (!role) {
    router.push("/login");
  }

  return (
    // <Sider
    //   collapsible
    //   collapsed={collapsed}
    //   onCollapse={(value) => {
    //     console.log(value);
    //   }}
    //   width={280}
    //   style={{
    //     overflow: "auto",
    //     height: "100vh",
    //     position: "sticky",
    //     left: 0,
    //     top: 0,
    //     bottom: 0,
    //   }}
    // >
    //   <div
    //     style={{
    //       color: "white",
    //       fontSize: "2rem",
    //       textAlign: "center",
    //       fontWeight: "bold",
    //       marginBottom: ".5rem",
    //       padding: "10px 0px",
    //     }}
    //   >
    //     UMS
    //   </div>
    //   <Menu
    //     theme="dark"
    //     defaultSelectedKeys={["1"]}
    //     mode="inline"
    //     items={sidebarItems(role)}
    //   />
    // </Sider>
    <Sider
      style={{ minHeight: "100vh", paddingTop: "10px" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems(roleToLowerCase)}
      />
    </Sider>
  );
};

export default dynamic(() => Promise.resolve(DashboardSidebar), { ssr: false });
// export default DashboardSidebar;
