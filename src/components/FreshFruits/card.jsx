import { useState } from "react";
import { Button } from "antd";
import { HeartOutlined, HeartFilled , PlusOutlined, MinusOutlined} from "@ant-design/icons";
import Cart  from "../../assets/Cart.svg";
import combinedShape from "../../assets/combined-shape.svg";

export const Card = ({
    key,
    imageSrc,
    title,
    subtitle,
    price,
    oldPrice,
    discount,
    weight, }) => {
    
      const [favorites, setFavorites] = useState([]);
      const [quantity, setQuantity] = useState(0);

  
      const toggleFavorite = (index) => {
        setFavorites((prev) =>
          prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
      };
      
    return (
    <div className="card">
      <div className="card-image">
        <img className="rectangle" alt={title} src={imageSrc} />
      </div>
      <div className="card-content">
        <div className="">
          <p className="card_header category m-0">{title}</p>
          <h3 className="card_header product-name mt-2 mb-2">{subtitle}</h3>
        </div>
        <div className="card_pricing">
          <span className="price">{price}</span>
          <span className="old-price">{oldPrice}</span>
       
        </div>


        <div className="card-actions pt-2">
        {quantity === 0 ? (
          <Button
            type="primary"
            className="add-to-cart"
            size="large"
            onClick={() => setQuantity(1)}
          >
                       <img className="icon" alt="Cart" src={Cart} />
            Add to Cart
          </Button>
        ) : (
          <div className="quantity-control">
            <Button size="large" className="plus_minus" icon={<MinusOutlined />} onClick={() => setQuantity(quantity - 1)} />
            <p className="m-0 mt-2"><span className="quantity">{quantity}</span></p>
            <Button size="large" className="plus_minus" icon={<PlusOutlined />} onClick={() => setQuantity(quantity + 1)} />
          </div>
        )}
        <button className="wishlist">
          <div
                className="favorite-icon"
                onClick={() => toggleFavorite(key)}
              >
                {favorites.includes(key) ? (
                  <HeartFilled style={{ color: "red" }} />
                ) : (
                  <HeartOutlined />
                )}
              </div>
          </button>
      </div>
      </div>
      <div className="card-badge-left">
        <div className="discount-badge ms-3 mt-3">
           <div>
           <img className="icon" alt="Discount" src={combinedShape} />

           </div>
           <div>
           <span className="ms-1">{discount}</span>
           </div>
         
         
        </div>
      </div>
      <div className="card-badge-right">
      <div className="weight-badge mt-3 me-3">
          <span>{weight}</span>
        </div>
      </div>
    </div>
  );
  }