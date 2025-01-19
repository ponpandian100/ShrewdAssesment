import React from 'react';
import { Row, Col } from 'antd';
import Logo from "../../assets/BannerLogo.png";

import ProfileComponent from "./ProfileComponent"
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './style.css';

const { Option } = Select;

const HeaderComponent = () => {
  return (<>
  <div className="top-navigation pt-3">
  <div className="container ">
 
  <Row >
    <Col xs={24} sm={24} md={24} lg={2} xl={2} xxl={2} >
    <img src={Logo} alt="logo" width="110px" />
    </Col>
    <Col xs={24} sm={24} md={24} lg={12} xl={14} xxl={14} >
    <div className="search-bar-container">
      <Input.Group compact>
        <Select size="large" defaultValue="All Categories" className="category-dropdown">
          <Option value="all">All Categories</Option>
          <Option value="electronics">Electronics</Option>
          <Option value="fashion">Fashion</Option>
          <Option value="groceries">Groceries</Option>
        </Select>
        <span className="bg-grey"><span className="line">&nbsp;</span></span>
        <Input
          size="large"
          placeholder="Search For Product..."
          suffix={<SearchOutlined />}
          className="search-input"
        />
      </Input.Group>
    </div>
    </Col>
    <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
     <ProfileComponent />
    </Col>
  </Row>
  </div>
  </div>
  </>)
}

export default HeaderComponent;



