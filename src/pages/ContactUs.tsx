import contactUs from "../assets/contactus.png";
import Email from "../components/Email";

const ContactUs = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "85vh",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          fontWeight: 300,
          color: "black",
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <span style={{ position: "relative", top: "-8px" }}>
          &#160; &#160; &#160; &#160; &#160;
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
        Contact
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
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "95%",
            height: "300px",
            position: "relative",
            backgroundImage: `url(${contactUs})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div style={{ position: "absolute", top: "15vh", right: "5vw" }}>
        <Email />
      </div>
    </div>
  );
};

export default ContactUs;
