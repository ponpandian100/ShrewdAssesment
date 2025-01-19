import React from "react";
import { Row, Col, Typography, Button } from "antd";
import "./style.css";
import Vegetables from "../../assets/Vegetables.avif";
import Milk from "../../assets/Milk.webp";
import Fruits from "../../assets/Fruits.jfif";
import Greens from "../../assets/Greens.avif";
import SeaFoods from "../../assets/SeaFoods.webp";
import Eggs from "../../assets/Eggs.webp";
import arrowDropDown from "../../assets/arrow-drop-down.svg";
import arrowDropDown2 from "../../assets/arrow-drop-down-2.svg";

const { Title } = Typography;

const ExploreCategories = () => {
  const categories = [
    { title: "Vegetables", image: Vegetables },
    { title: "Fruits", image: Fruits },
    { title: "Sea Food", image: SeaFoods },
    { title: "Milk", image: Milk },
    { title: "Eggs", image: Eggs },
    { title: "Greens", image: Greens },
  ];

  return (
    <div className="explore-categories">
      <div className="container">
        <header className="header">
          <Title level={2}>Explore Categories</Title>
          <div className="explore-navigation">
            <Button
              className="arrow-button"
              type="text"
              icon={<img className="arrow" alt="Previous" src={arrowDropDown} />}
            />
            <Button
              className="arrow-button"
              type="text"
              icon={<img className="arrow" alt="Next" src={arrowDropDown2} />}
            />
          </div>
        </header>
        <Row gutter={[16, 16]} justify="center">
          {categories.map((category, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <div className="image-container">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
              </div>
              <p className="category-title">{category.title}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ExploreCategories;
