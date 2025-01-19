import React, { useState } from "react";
import "./style.css";
import { Typography } from "antd";

const { Title } = Typography;

const ExploreMoreProducts = () => {
  const [tags] = useState([
    "Fresh Milk Products", "Fresh Greens", "Fresh Greens", "Fresh Greens", 
    "Fresh Greens", "Fresh Greens", "Fresh Greens", "Fresh Greens", 
    "Healthy Drinks", "Healthy Drinks", "Healthy Drinks", "Healthy Drinks", 
    "Delicious Sweets", "Delicious Sweets", "Delicious Sweets", "Delicious Sweets", 
    "Delicious Sweets", "Delicious Sweets", "Delicious Sweets", "Sea Food", 
    "Indian Special", "Indian Special", "Indian Special", "Indian Special"
  ]);

  const gridStyle = {
    textAlign:"left",
    width: "100%",  
    marginBottom: "20px", 
  };

  const buttonStyle = {
    backgroundColor: "#f2f2f2",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    margin: "10px",
    cursor: "pointer",
  };

  return (
    <div className="container">
       <header className="header">
                  <Title level={2}>Explore More Products</Title>
                </header>
    
    <div style={gridStyle}>
        {tags.map((tag, index) => (
          <button key={index} style={buttonStyle}>
            <span  style={{fontSize: "15px"}}>{tag}</span>
          </button>
        ))}
      </div>

    </div>
   
  );
};

export default ExploreMoreProducts;
