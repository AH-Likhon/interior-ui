import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import { Col, Row } from "antd";

const CustomReviews = () => {
  const { data, isLoading } = useGetAllReviewsQuery("");
  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ marginBottom: "30px" }}>Customer reviews</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data?.map((review: any) => (
          <>
            <Col
              style={{ marginBottom: "15px" }}
              className="gutter-row"
              span={8}
            >
              <h2 style={{ margin: "10px 0" }}>
                Title: {review?.service?.title}
              </h2>
              <p>User: {review?.users?.name}</p>
              <p style={{ margin: "10px 0" }}>Comment: {review?.comments}</p>
              <p>Rating: {review?.rating}</p>
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default CustomReviews;
