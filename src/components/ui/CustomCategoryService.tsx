import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import img4 from "../../assets/slider-4-min.jpg";

import Link from "next/link";
import { useGetByCategoryQuery } from "@/redux/api/categoryApi";

const CustomCategoryService = () => {
  const { data, isLoading } = useGetByCategoryQuery("");

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div style={{ padding: "25px" }}>
      <h1 style={{ margin: "15px 0" }}>Events By Category</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data?.map((service: any) => (
          <>
            <Col
              style={{ marginBottom: "15px" }}
              className="gutter-row"
              span={8}
            >
              <div>
                <Card
                  hoverable
                  cover={
                    <Image
                      alt="example"
                      width={100}
                      height={100}
                      src={service?.image ? service?.image : img4}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "300px",
                      }}
                    />
                  }
                >
                  <h2 style={{ margin: "10px 0" }}>
                    Category: {service?.category}
                  </h2>
                  <h4>Title: {service?.title}</h4>
                  <h4>Status: {service?.serviceStatus}</h4>
                  <p>
                    Description:{" "}
                    {service?.description?.length > 100
                      ? `${service?.description.slice(0, 100)}....`
                      : service?.description}
                  </p>
                  <p>Price: {service?.price}</p>

                  {/* <Button type="primary">
                    <Link href={`details/${service?.id}`}>Details</Link>
                  </Button> */}
                </Card>
              </div>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default CustomCategoryService;
