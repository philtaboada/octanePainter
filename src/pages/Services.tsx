import services from "../assets/services.png";
import Carrusel from "../components/Carrusel";

const Services = () => {
  return (
    <div
      id="services"
      style={{
        width: "100%",
        minHeight: "300px",
        marginTop: "180px",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${services})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "300",
            color: "white",
            fontSize: "30px",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              fontWeight: 300,
            }}
          >
            <span style={{ fontWeight: 900, paddingRight: "5px" }}>Our</span>
            Services
          </div>
        </div>
        <Carrusel />
        <div
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          Push to more
        </div>
      </div>
    </div>
  );
};

export default Services;
