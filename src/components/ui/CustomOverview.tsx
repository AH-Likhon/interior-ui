import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import img4 from "../../assets/slider-4-min.jpg";

import Link from "next/link";
import { useGetByCategoryQuery } from "@/redux/api/categoryApi";

const CustomOverview = () => {
  return (
    <div style={{ padding: "25px" }}>
      <h1 style={{ margin: "15px 0" }}>Overview</h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <>
          <Col style={{ marginBottom: "15px" }} className="gutter-row" span={8}>
            <div>
              <Card style={{ background: "#484893", color: "white" }}>
                <h4>
                  Experience a complete makeover for your home with our interior
                  design services. Our experts will revamp your living spaces,
                  creating a stylish and functional environment that reflects
                  your unique taste.
                </h4>
              </Card>
            </div>
          </Col>
          <Col style={{ marginBottom: "15px" }} className="gutter-row" span={8}>
            <div>
              <Card style={{ background: "#484893", color: "white" }}>
                <h4>
                  Elevate your workspace with our office interior design
                  solutions. We will optimize your office layout, incorporate
                  ergonomic designs, and infuse a professional ambiance to boost
                  productivity.
                </h4>
              </Card>
            </div>
          </Col>
          <Col style={{ marginBottom: "15px" }} className="gutter-row" span={8}>
            <div>
              <Card style={{ background: "#484893", color: "white" }}>
                <h4>
                  Make your special occasions truly memorable with our event
                  venue decor services. We specialize in creating captivating
                  settings for weddings, parties, and corporate events, turning
                  your vision into reality.
                </h4>
              </Card>
            </div>
          </Col>
        </>
      </Row>
    </div>
  );
};

export default CustomOverview;
