import React from "react";
import { Button, Typography } from "antd";
import { Card } from "./card";
import "./style.css";
import arrowDropDown from "../../assets/arrow-drop-down.svg";
import arrowDropDown2 from "../../assets/arrow-drop-down-2.svg";
import TurmericPowder from "../../assets/tumeric.png";
import Chilly from "../../assets/chilly.png";
import Corpowder from "../../assets/corpowder.png";
import Caepowder from "../../assets/caepowder.png";
import Salt from "../../assets/salt.png";

const { Title } = Typography;

export const MasalaItems = () => {
  const products = [
    {
      imageSrc: TurmericPowder,
      title: "Powder",
      subtitle: "Turmeric Powder",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Chilly,
      title: "Powder",
      subtitle: "Chilly Powder",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Corpowder,
      title: "Powder",
      subtitle: "Coriander Powder",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Caepowder,
      title: "Powder",
      subtitle: "Caedmon Powder",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Salt,
      title: "Powder",
      subtitle: "Salt",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
  ];

  return (
    <div className="today-special-deals">
      <div className="container">
         <header className="header">
                  <Title level={2}>Spices & Masala Items</Title>
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
                    <Button className="explore-all" type="text">
            Explore All
          </Button>
                  </div>
                </header>
                <div className="product-list">
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>

      </div>
    </div>
  );
};
 