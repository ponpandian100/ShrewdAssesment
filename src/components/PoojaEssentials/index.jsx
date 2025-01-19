import React from "react";
import { Button, Typography } from "antd";
import { Card } from "./card";
import "./style.css";
import arrowDropDown from "../../assets/arrow-drop-down.svg";
import arrowDropDown2 from "../../assets/arrow-drop-down-2.svg";
import Betel from "../../assets/betel.png";
import Deepam from "../../assets/deepam.png";
import Banana from "../../assets/banana.png";
import Agar from "../../assets/agar.png";
import Bell from "../../assets/bell.png";

const { Title } = Typography;

export const PoojaEssentials = () => {
  const products = [
    {
      imageSrc: Betel,
      title: "Vegetables",
      subtitle: "Betel Leaves",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Deepam,
      title: "Pooja Essentials",
      subtitle: "Deepam Oil",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Banana,
      title: "Fruits",
      subtitle: "Banana",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Agar,
      title: "Pooja Essentials",
      subtitle: "Agarbathi",
      price: "£2.99",
      oldPrice: "£3.99",
      discount: "25%",
      weight: "2 kg",
    },
    {
      imageSrc: Bell,
      title: "Pooja Essentials",
      subtitle: "Brass Bell",
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
                  <Title level={2}>Pooja Essentials</Title>
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
 