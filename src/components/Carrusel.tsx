import React, { useState } from "react";
import { Carousel, Image, Space } from "antd";
import title from "../assets/title.png";
import staining from "../assets/staining.png";
import drywall from "../assets/drywall.png";
import PainterMain from "../assets/PainterMain.png";
import floorMain from "../assets/floorMain.png";
import drywall1 from "../assets/drywall1.jpg";
import drywall2 from "../assets/drywall2.jpg";
import drywall3 from "../assets/drywall3.jpg";
import drywall4 from "../assets/drywall4.jpg";
import flooring1 from "../assets/flooring1.jpg";
import flooring2 from "../assets/flooring2.jpg";
import flooring3 from "../assets/flooring3.jpg";
import flooring4 from "../assets/flooring4.jpg";
import painting1 from "../assets/painter1.jpg";
import painting2 from "../assets/painter2.jpg";
import painting3 from "../assets/painter3.jpg";
import painting4 from "../assets/painter4.jpg";
import staining1 from "../assets/staining1.jpg";
import staining2 from "../assets/staining2.jpg";
import staining3 from "../assets/staining3.jpg";
import staining4 from "../assets/staining4.jpg";
import title1 from "../assets/title1.jpg";
import title2 from "../assets/title2.jpg";
import title3 from "../assets/title3.jpg";
import title4 from "../assets/title4.jpg";

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  height: "805px",
};

const Carrusel = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const onChange = (currentSlide: number) => {
    currentSlide;
  };

  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <Space wrap={true} style={contentStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Image
                id="deckstaining"
                preview={{ visible: false }}
                width={300}
                src={staining}
                alt=""
                onClick={() => setVisible1(true)}
              />
              <Images
                visible={visible1}
                setVisible={setVisible1}
                image1={staining1}
                image2={staining2}
                image3={staining3}
                image4={staining4}
              />
              <div
                className="services-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "80%",
                  height: "auto",
                  borderTop: "none",
                  borderRight: "1px solid white",
                  borderBottom: "1px solid white",
                  borderLeft: "1px solid white",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                  }}
                >
                  Staining
                </div>
                <div>Deck</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Image
                id="titeinstallation"
                preview={{ visible: false }}
                width={300}
                src={title}
                alt=""
                onClick={() => setVisible3(true)}
              />
              <Images
                visible={visible3}
                setVisible={setVisible3}
                image1={title1}
                image2={title2}
                image3={title3}
                image4={title4}
              />
              <div
                className="services-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "80%",
                  height: "auto",
                  borderTop: "none",
                  borderRight: "1px solid white",
                  borderBottom: "1px solid white",
                  borderLeft: "1px solid white",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                  }}
                >
                  Tile
                </div>
                <div>Instalation</div>
              </div>
            </div>
          </Space>
        </div>
        <div>
          <Space wrap={true} style={contentStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Image
                preview={{ visible: false }}
                width={300}
                src={floorMain}
                alt=""
                onClick={() => setVisible4(true)}
              />
              <Images
                visible={visible4}
                setVisible={setVisible4}
                image1={flooring1}
                image2={flooring2}
                image3={flooring3}
                image4={flooring4}
              />
              <div
                className="services-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "80%",
                  height: "auto",
                  borderTop: "none",
                  borderRight: "1px solid white",
                  borderBottom: "1px solid white",
                  borderLeft: "1px solid white",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                  }}
                >
                  Floring
                </div>
                <div>Service</div>
              </div>
            </div>
            <div
              id="residentialpainting"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Image
                preview={{ visible: false }}
                width={300}
                src={PainterMain}
                alt=""
                onClick={() => setVisible(true)}
              />
              <Images
                visible={visible}
                setVisible={setVisible}
                image1={painting1}
                image2={painting2}
                image3={painting3}
                image4={painting4}
              />
              <div
                className="services-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "80%",
                  height: "auto",
                  borderTop: "none",
                  borderRight: "1px solid white",
                  borderBottom: "1px solid white",
                  borderLeft: "1px solid white",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                  }}
                >
                  Residential
                </div>
                <div>Paint</div>
              </div>
            </div>
          </Space>
        </div>
        <div>
          <Space wrap={true} style={contentStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Image
                id="drywallinstallation"
                preview={{ visible: false }}
                width={300}
                src={drywall}
                alt=""
                onClick={() => setVisible2(true)}
              />
              <Images
                visible={visible2}
                setVisible={setVisible2}
                image1={drywall1}
                image2={drywall2}
                image3={drywall3}
                image4={drywall4}
              />
              <div
                className="services-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "80%",
                  height: "auto",
                  borderTop: "none",
                  borderRight: "1px solid white",
                  borderBottom: "1px solid white",
                  borderLeft: "1px solid white",
                  color: "white",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                  }}
                >
                  Drywall
                </div>
                <div>Installation</div>
              </div>
            </div>
          </Space>
        </div>
      </Carousel>
    </>
  );
};

function Images({ visible, setVisible, image1, image2, image3, image4 }: any) {
  return (
    <div style={{ display: "none" }}>
      <Image.PreviewGroup
        preview={{
          visible,
          onVisibleChange: (vis) => setVisible(vis),
        }}
      >
        <Image src={image1} />
        <Image src={image2} />
        <Image src={image3} />
        <Image src={image4} />
      </Image.PreviewGroup>
    </div>
  );
}

export default Carrusel;
