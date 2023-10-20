"use client";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import { message } from "antd";
import CustomTable from "@/components/ui/CustomTable";
import { useVerifyUser } from "@/utils/customHooks";
import ActionBar from "@/components/ui/ActionBar";
import {
  useDeleteServiceMutation,
  useGetAllServiceQuery,
} from "@/redux/api/serviceApi";
import UMBreadCrumb from "@/components/ui/BreadCrumb";
import CustomModal from "@/components/ui/CustomModal";

const ManageServicePage = () => {
  useVerifyUser("admin");
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetAllServiceQuery({ ...query });
  const [deleteService] = useDeleteServiceMutation();
  const services = data?.services;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteService(id);
      // @ts-ignore
      if (res?.data?.id) {
        message.success("Department Deleted successfully");
        setOpen(false);
      }
    } catch (err: any) {
      // console.log(err);
      message.error(err.message);
      setOpen(false);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Service Status",
      dataIndex: "serviceStatus",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/manage-service/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                // onClick={() => console.log(data)}
                type="primary"
                ghost
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setServiceId(data?.id);
              }}
              // onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />

      <ActionBar title="Manage service page">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          <Link href="/admin/manage-service/create">
            <Button type="primary">Create service</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              ghost
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <CustomTable
        loading={isLoading}
        columns={columns}
        dataSource={services}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <CustomModal
        title="Remove admin"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deleteHandler(serviceId)}
      >
        <p className="my-5">Do you want to remove this service?</p>
      </CustomModal>
    </div>
  );
};

export default ManageServicePage;
