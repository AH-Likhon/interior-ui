import { Card, Col, Row } from "antd";
import React from "react";

const SectionOne = () => {
  return (
    <div style={{ margin: "0 20px" }}>
      <h1 style={{ margin: "10px 0", color: "#073842", fontSize: "70px" }}>
        About Our Design Philosophy
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col style={{ marginBottom: "15px" }} className="gutter-row" span={6}>
          <div>
            <Card>
              <h2 style={{ margin: "10px 0", color: "#203556" }}>
                Initial Consultation
              </h2>
              <p style={{ color: "#203556" }}>
                The process begins with an initial consultation where a
                representative from Inspired Interiors meets with the client to
                discuss their project requirements, goals, and vision.
              </p>
            </Card>
          </div>
        </Col>
        <Col style={{ marginBottom: "15px" }} className="gutter-row" span={6}>
          <div>
            <Card>
              <h2 style={{ margin: "10px 0", color: "#203556" }}>
                Project Assessment and Space Analysis
              </h2>
              <p style={{ color: "#203556" }}>
                The design team conducts a thorough assessment of the space,
                taking measurements, photographs, and gathering any relevant
                architectural drawings or floor plans.
              </p>
            </Card>
          </div>
        </Col>
        <Col style={{ marginBottom: "15px" }} className="gutter-row" span={6}>
          <div>
            <Card>
              <h2 style={{ margin: "10px 0", color: "#203556" }}>
                Design Concept Development
              </h2>
              <p style={{ color: "#203556" }}>
                Based on the clients preferences and the information gathered
                during the assessment, Inspired Interiors develops a design
                concept.
              </p>
            </Card>
          </div>
        </Col>
        <Col style={{ marginBottom: "15px" }} className="gutter-row" span={6}>
          <div>
            <Card>
              <h2 style={{ margin: "10px 0", color: "#203556" }}>
                Design Presentation and Approval
              </h2>
              <p style={{ color: "#203556" }}>
                Inspired Interiors presents the design concept and space plans
                to the client, utilizing visual aids such as 3D renderings,
                sketches, and material samples.
              </p>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SectionOne;
