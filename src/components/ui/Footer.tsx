import { Layout } from "antd";

const { Footer } = Layout;

const FooterPage = () => {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Interior Design Company | All Rights
        Reserved
      </Footer>
    </div>
  );
};

export default FooterPage;
