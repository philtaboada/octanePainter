import { DownOutlined, MobileOutlined } from "@ant-design/icons";
import { Col, Menu, Row } from "antd";

const Navbar = () => {
  return (
    <Row style={{ width: "100%" }}>
      <Col xs={18} sm={18} lg={18} offset={6}>
        <Menu
          onClick={({ key }) => {
            if (key === "#") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              const element = document.querySelector(key);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
          style={{
            justifyContent: "flex-end",
            marginTop: "80px",
            position: "absolute",
            right: "0%",
            left: "25%",
            background: "#f2f2f2",
          }}
          mode="horizontal"
          theme="light"
          triggerSubMenuAction="click"
          items={[
            {
              style: { marginRight: "8%" },
              label: "HOME",
              key: "#",
            },
            {
              style: { marginRight: "8%" },
              label: "ABOUT US",
              key: "#aboutus",
            },

            {
              style: { marginRight: "8%" },
              label: "SERVICES",
              icon: <DownOutlined />,
              key: "#services",
              children: [
                {
                  label: "Deck Staining",
                  key: "#deckstaining",
                },
                {
                  label: "Drywall Installation",
                  key: "#drywallinstallation",
                },
                {
                  label: "Tite Installation",
                  key: "#titeinstallation",
                },
                {
                  label: "Residential Painting",
                  key: "#residentialpainting",
                },
              ],
            },

            {
              style: { background: "#159792", color: "white", top: 0 },
              label: "185 458 856",
              key: "tel:185458856",
              icon: <MobileOutlined />,
            },
          ]}
        ></Menu>
      </Col>
    </Row>
  );
};

export default Navbar;
