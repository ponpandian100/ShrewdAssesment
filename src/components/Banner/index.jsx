import React from "react";
import dRenderingCartoonShoppingCart1 from "../../assets/3d-rendering-cartoon-shopping-cart-1.png";
import combinedShape from "../../assets/combined-shape.svg";
import group2 from "../../assets/group-2.png";
import group4 from "../../assets/group-4.png";
import group6 from "../../assets/group-6.png";
import group7 from "../../assets/group-7.png";
import group from "../../assets/group.png";
import "./style.css";
import { Button } from "antd";
import BannerLogo from "../../assets/BannerLogo.png";

export const Banner = () => {

  return (
    <div className="background-green">
    
    <div className="container">
    <section className="banner pb-5">
      <div className="frame">
        <img className="group" alt="Decorative Group" src={group} />

        <div className="overlap">
          <div className="overlap-group">
            <img className="img" alt="Decorative Group 4" src={group4} />
            <img className="group-2" alt="Decorative Group 7" src={group7} />
            <img className="group-3" alt="Decorative Group 6" src={group6} />
            <img className="group-4" alt="Decorative Group 2" src={group2} />

            <div className="content">
              <div className="text-container">
                <div className="header">
                  <img className="BannerLogo" src={BannerLogo} alt="BannerLogo" />
                 
                </div>

                <h1 className="main-heading">
                  Don&#39;t miss out our daily <br />
                  amazing deals.
                </h1>
              </div>

              <p className="subtext">
                Save your money with our super doper offer Start your morning
                with our items.
              </p>

              <Button className="button-primary">
                <div className="button-content">
                  <div className="cart-icon">
                    <img
                      className="combined-shape"
                      alt="Cart Icon"
                      src={combinedShape}
                    />
                  </div>
                  <span className="button-text">Shop Deal Items</span>
                </div>
              </Button>
            </div>
          </div>
          

          <div className="overlap-group-2">
                       <img
             
              className="cartoon-shopping-cart"
              alt="3D Rendering Cartoon Shopping Cart"
              src={dRenderingCartoonShoppingCart1}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};