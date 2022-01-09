import { useState, useEffect } from "react";
import rgbToHex from "../Utils/Utils";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <article
      className={`color${index > 10 && "color-light"}`}
      style={{
        background: `rgb(${bcg})`,
      }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <br/>
      <br/>
      <br/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      {alert && <p className="alert" >copied </p>}

      </div>
    </article>
  );
};
export default SingleColor;
