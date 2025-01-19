import React from "react";
import { Button, Typography } from "antd";
import { Card } from "./card";
import "./style.css";
import arrowDropDown from "../../assets/arrow-drop-down.svg";
import arrowDropDown2 from "../../assets/arrow-drop-down-2.svg";
import Watermelon from "../../assets/watermelon.jfif";
import Coconut from "../../assets/coconut.jfif";
import Kiwi from "../../assets/kiwi.jfif";
import Pineapple from "../../assets/pineapple.jfif";
import Palms from "../../assets/palms.png";

const { Title } = Typography;

export const FreshFruits = () => {
  const products = [
    {
      imageSrc: Watermelon,
      title: "Fruits",
      subtitle: "Watermelon",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Coconut,
      title: "Fruits",
      subtitle: "Coconut",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Kiwi,
      title: "Fruits",
      subtitle: "Kiwi",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Pineapple,
      title: "Fruits",
      subtitle: "Pineapple",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Palms,
      title: "Fruits",
      subtitle: "Palms",
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
                  <Title level={2}>Summer Fresh Fruits</Title>
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
 