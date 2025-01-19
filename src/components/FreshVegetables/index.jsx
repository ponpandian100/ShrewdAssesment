import React from "react";
import { Button, Typography } from "antd";
import { Card } from "./card";
import "./style.css";
import arrowDropDown from "../../assets/arrow-drop-down.svg";
import arrowDropDown2 from "../../assets/arrow-drop-down-2.svg";
import Onion from "../../assets/Onion.png";
import Carrot from "../../assets/Carrot.png";
import BeetRoot from "../../assets/BeetRoot.png";
import Potato from "../../assets/Potato.png";
import EggPlant from "../../assets/EggPlant.jpg";

const { Title } = Typography;

export const FreshVegetables = () => {
  const products = [
    {
      imageSrc: Onion,
      title: "Vegetable",
      subtitle: "Onion",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Carrot,
      title: "Vegetable",
      subtitle: "Carrot",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: BeetRoot,
      title: "Vegetable",
      subtitle: "Beet Root",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Potato,
      title: "Vegetable",
      subtitle: "Potato",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: EggPlant,
      title: "Vegetable",
      subtitle: "Egg Plant",
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
                  <Title level={2}>Fresh Vegetables</Title>
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
 