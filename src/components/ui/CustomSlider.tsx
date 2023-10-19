"use client";

import { Carousel } from "antd";
import Image from "next/image";
import img1 from "../../assets/slider-1-min.jpg";
import img2 from "../../assets/slider-2-min.jpg";
import img3 from "../../assets/slider-3-min.jpg";
import img4 from "../../assets/slider-4-min.jpg";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const contentStyle: React.CSSProperties = {
  height: "450px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CustomSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={img1}
                alt="img-slider-1"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={img2}
                alt="img-slider-2"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={img3}
                alt="img-slider-3"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image
                src={img4}
                alt="img-slider-4"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </h3>
          </div>
        </Carousel>
      )}
    </>
  );
};

// export default CustomSlider;
export default dynamic(() => Promise.resolve(CustomSlider), { ssr: false });
