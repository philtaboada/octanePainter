import { Row, Space } from "antd";
import imageBg from "../assets/aboutus.png";

const AboutUs = () => {
  return (
    <Row id="aboutus" style={{ marginTop: "800px", padding: "0 3vw" }}>
      <Space
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
        wrap={true}
      >
        <Space
          style={{
            minWidth: "50%",
          }}
          direction="vertical"
        >
          <div
            style={{
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                fontWeight: 300,
                color: "black",
              }}
            >
              <span style={{ position: "relative", top: "-8px" }}>
                <svg
                  width="49"
                  height="5"
                  viewBox="0 0 62 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="49" height="5" fill="#5BCCC8" />
                </svg>
              </span>
              About
              <span
                style={{
                  color: "black",
                  fontWeight: 900,
                  paddingLeft: "5px",
                }}
              >
                Us
              </span>
            </div>
          </div>
          <div
            style={{
              width: "450px",
            }}
          >
            <p
              style={{
                paddingTop: "20px",
              }}
            >
              We are a Minneapolis Residential and Commercial Remodeling
              Contractor. Our values are consistent pricing through industries,
              high quality service, and respect for our customers' homes.
            </p>
            <p
              style={{
                paddingTop: "20px",
              }}
            >
              Covering several areas of residential remodeling, our team is able
              to tackle projects involving several trades, including drywall &
              paint, tile installation, flooring installation, high-end
              staining, and more.
            </p>
            <p
              style={{
                paddingTop: "20px",
              }}
            >
              No commercial project is too large for us either, and we have been
              able to tackle large sized projects involving water damage,
              demolition, and drywall restoration. Send us a message if you are
              interested in our services.
            </p>
          </div>
        </Space>
        <Space
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            width: "350px",
            marginTop: "80px",
          }}
        >
          <img
            style={{
              width: "450px",
              height: "auto",
            }}
            src={imageBg}
            alt="painter"
          />
        </Space>
      </Space>
    </Row>
  );
};

export default AboutUs;
