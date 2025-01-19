import React from "react";
import { Row, Col, Badge, Avatar } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./style.css";
import Profile from "../../assets/Profile.png";

const ProfileComponent = () => {
  return (
    <div className="header-container mt-2">
      <Row align="middle" justify="end" gutter={[16, 16]} >
       
        <Col xs={24} sm={7} md={7} lg={7} xl={7} xxl={7} >
          <div className="favorites">
            <Badge count={2} size="small" className="favorite-badge">
              <HeartOutlined className="icon" />
            </Badge>
            <span>Favorites</span>
          </div>
        </Col>

       
        <Col xs={24} sm={5} md={5} lg={5} xl={5} xxl={5} >
          <div className="cart">
            <ShoppingCartOutlined className="icon" />
            <span>Cart</span>
          </div>
        </Col>

      
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} >
          <Row className="profile">
            <Avatar
              src={Profile}
              alt="Profile"
            />
            <span>Pon Pandian </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileComponent;