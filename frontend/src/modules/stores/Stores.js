import React, { useEffect, useState } from "react";
import { fetchSnacks } from "../../../src/components/services/UserService";
import BannerSecond from "../home/components/BannerSecond";
import { NavLink } from "react-router-dom";
import VisaBanner from "../home/components/VisaBanner";

function Stores() {
  const buttonStyle = {
    border: "2px solid #8bc34a",
    borderRadius: "15px",
    padding: "10px 20px",
    color: "#8bc34a",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent",
    display: "inline-block",
    marginBottom: "20px",
  };

  const tittle = {
    borderRadius: "15px",
    color: "#8bc34a",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "transparent",
    display: "inline-block",
  };

  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    getSnacks();
  }, []);

  const getSnacks = async () => {
    let res = await fetchSnacks();
    if (res && res.data) {
      setSnacks(res.data.data);
    }
  };
  return (
    <div>
      <BannerSecond />
      <section className="value-combo">
        <h2 className="">
          <button style={buttonStyle}>FHD SNACKS COMBO</button>
        </h2>

        <div className="combo-container">
          {snacks.map((items) => (
            <div className="combo-item1 shadow" key={items.snackId}>
              <NavLink className="nav-link" to="">
                <img
                  style={{ width: "100%" }}
                  src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/662613?width=350&height=350&referenceScheme=HeadOffice&allowPlaceHolder=true"
                  alt=""
                />
              </NavLink>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#3b8d00",
                  marginTop: "30px",
                }}
              >
                <h4 style={tittle}>{items.snackName}</h4>
              </h3>
              <p style={{ fontSize: "20px" }}>{items.snackPrice} VND</p>
            </div>
          ))}
        </div>
      </section>

     <VisaBanner/>
    </div>
  );
}

export default Stores;
