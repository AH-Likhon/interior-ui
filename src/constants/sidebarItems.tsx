import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import { USER_ROLE } from "./role";
import type { MenuProps } from "antd";
import Link from "next/link";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage-faculty`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    // ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      key: "manage-user",
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-service`}>Manage service</Link>,
      key: "manage-service",
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
      key: "manage-booking",
      icon: <TableOutlined />,
    },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/department`}>Department</Link>,
    //       key: `/${role}/department`,
    //     },
    //     {
    //       label: <Link href={`/${role}/building`}>Building</Link>,
    //       key: `/${role}/building`,
    //     },
    //     {
    //       label: <Link href={`/${role}/room`}>Rooms</Link>,
    //       key: `/${role}/room`,
    //     },
    //     {
    //       label: <Link href={`/${role}/course`}>Course</Link>,
    //       key: `/${role}/course`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/semester-registration`}>
    //           Semester registration
    //         </Link>
    //       ),
    //       key: `/${role}/semester-registration`,
    //     },
    //     {
    //       label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
    //       key: `/${role}/offered-course`,
    //     },
    //     {
    //       label: (
    //         <Link href={`/${role}/offered-course-section`}>
    //           Course sections
    //         </Link>
    //       ),
    //       key: `/${role}/offered-course-section`,
    //     },
    //   ],
    // },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    // ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/manage-user`}>Manage All User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },
    // {
    //   label: "Management",
    //   key: "management",
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       label: <Link href={`/${role}/department`}>Department</Link>,
    //       key: `/${role}/department`,
    //     },
    //   ],
    // },
  ];

  const customerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/booking`}>My booking</Link>,
      icon: <TableOutlined />,
      key: `/${role}/booking`,
    },
  ];

  // const studentSidebarItems: MenuProps["items"] = [
  //   ...defaultSidebarItems,
  //   {
  //     label: <Link href={`/${role}/courses`}>Courses</Link>,
  //     icon: <TableOutlined />,
  //     key: `/${role}/courses`,
  //   },
  //   {
  //     label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
  //     icon: <ScheduleOutlined />,
  //     key: `/${role}/courses/schedule`,
  //   },
  //   {
  //     label: <Link href={`/${role}/registration`}>Registration</Link>,
  //     icon: <ThunderboltOutlined />,
  //     key: `/${role}/registration`,
  //   },
  //   {
  //     label: <Link href={`/${role}/payment`}>Payment</Link>,
  //     icon: <CreditCardOutlined />,
  //     key: `/${role}/payment`,
  //   },
  //   {
  //     label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
  //     icon: <FileTextOutlined />,
  //     key: `/${role}/academic-report`,
  //   },
  // ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.CUSTOMER) return customerSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
