import React from "react";
import { Button, Typography } from "antd";
import { Card } from "./card";
import "./style.css";
import arrowDropDown from "../../assets/arrow-drop-down.svg";
import arrowDropDown2 from "../../assets/arrow-drop-down-2.svg";
import Coriander from "../../assets/coriander.jfif";
import Kale from "../../assets/kale.jfif";
import Spinach from "../../assets/spinach.jfif";
import Dill from "../../assets/dill.jfif";
import Beet from "../../assets/beet.jfif";

const { Title } = Typography;

export const HealthyGreens = () => {
  const products = [
    {
      imageSrc: Coriander,
      title: "Greens",
      subtitle: "Coriander Leave",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Kale,
      title: "Greens",
      subtitle: "Kale",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Spinach,
      title: "Greens",
      subtitle: "Spinach",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Dill,
      title: "Greens",
      subtitle: "Dill Leave",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Beet,
      title: "Greens",
      subtitle: "Beet Leave",
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
                  <Title level={2}>Healthy Greens</Title>
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
 