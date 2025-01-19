import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { AppstoreOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./style.css";
import { RiHomeLine } from "react-icons/ri";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import Avocado from "../../assets/Avocado.png";

const Navigation = () => {
    const [ selected, setSelected ] = useState("home");
 
  return (
    <div classNme="navigation-container-component">
        <div className="container">
        <div className="mt-4 mb-4">
      <Row >
        
        <Col xs={24} sm={24} md={24} lg={11} xxl={9} className="button-group">
          <Button className={selected === "home" ?"button-menu-select menu-button" :"menu-button"} onClick={()=>setSelected("home")} icon={<RiHomeLine />} size="large">
            Home
          </Button>
          <Button className={selected === "categories" ?"button-menu-select menu-button" :"menu-button"} onClick={()=>setSelected("categories")} icon={<AppstoreOutlined />} size="large">
            Categories
          </Button>
          <Button className={selected === "about" ?"button-menu-select menu-button" :"menu-button"} onClick={()=>setSelected("about")} icon={<InfoCircleOutlined />} size="large">
            About
          </Button>
          <Button className={selected === "contact" ?"button-menu-select menu-button" :"menu-button"} onClick={()=>setSelected("contact")} icon={<HiMiniDevicePhoneMobile />} size="large">
            Contact
          </Button>
        </Col>

        
        <Col xs={24} sm={24} md={24} lg={8} xxl={11} className="marquee-box">
        <div className="marquee-container">
      <div className="marquee-content">
        <span>Purchase your fresh veggies before 10 AM and enjoy a 25% discount! </span>
        <img
          src={Avocado}
          alt="Avocado"
          className="marquee-image"
          
        />
      </div>
    </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={3} xxl={3} className="promotions-container">
          <Button className="promotions-button" size="large">
            <span className="dashboard-icon-button"><AppstoreOutlined /></span>
            Promotions
          </Button>
        </Col>
      </Row>
    </div>

        </div>
       

    </div>
   
  );
};

export default Navigation;
