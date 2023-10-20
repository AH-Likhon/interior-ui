import { Card, Col, Row } from "antd";
import Image from "next/image";
import news1 from "../../assets/new-1.jpg";
import news2 from "../../assets/new-2.jpg";
import news3 from "../../assets/new-3.jpg";

const LatestNews = () => {
  return (
    <div style={{ margin: "0 20px" }}>
      <h1 style={{ margin: "15px 0" }}>Latest News</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <>
          <Col style={{ marginBottom: "15px" }} className="gutter-row" span={8}>
            <div>
              <Card
                hoverable
                cover={
                  <Image
                    alt="example"
                    width={100}
                    height={100}
                    src={news1}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  />
                }
              >
                <h2 style={{ margin: "10px 0", color: "#203556" }}>
                  Multifunctional Furniture: Space-Saving Solutions for Compact
                  Homes
                </h2>
              </Card>
            </div>
          </Col>
          <Col style={{ marginBottom: "15px" }} className="gutter-row" span={8}>
            <div>
              <Card
                hoverable
                cover={
                  <Image
                    alt="example"
                    width={100}
                    height={100}
                    src={news2}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  />
                }
              >
                <h2 style={{ margin: "10px 0", color: "#203556" }}>
                  May 18, 2023 Insights Multifunctional Furniture:
                </h2>
              </Card>
            </div>
          </Col>
          <Col style={{ marginBottom: "15px" }} className="gutter-row" span={8}>
            <div>
              <Card
                hoverable
                cover={
                  <Image
                    alt="example"
                    width={100}
                    height={100}
                    src={news2}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  />
                }
              >
                <h2 style={{ margin: "10px 0", color: "#203556" }}>
                  Artistic Expressions: Incorporating Art into Interior Design
                </h2>
              </Card>
            </div>
          </Col>
        </>
      </Row>
    </div>
  );
};

export default LatestNews;
