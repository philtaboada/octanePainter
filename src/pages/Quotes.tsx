import quotes from "../assets/quotes.png";

const Quotes = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "end",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "95%",
            height: "300px",
            position: "relative",
            backgroundImage: `url(${quotes})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <div
              style={{
                padding: "0 20px",
                width: "60%",
                height: "200px",
              }}
            >
              <svg
                width="81"
                height="70"
                viewBox="0 0 81 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.8768 0C20.5727 1.04932 0.0113011 3.4335 0 32.6792V69.4756H31.919V30.1061H21.3204C20.649 19.5938 28.9408 16.8793 37.9577 14.7957L34.8768 0ZM77.6408 0C63.3367 1.04932 42.7753 3.43356 42.7641 32.6792V69.4756H74.6831V30.1061H64.0845C63.413 19.5938 71.7049 16.8793 80.7218 14.7957L77.6408 0Z"
                  fill="white"
                  fill-opacity="0.85"
                />
              </svg>
              <p
                style={{
                  fontSize: "25px",
                }}
              >
                Professional Home Repair and Others Services to Enhance the
                Appearance and Value of Your Property
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
