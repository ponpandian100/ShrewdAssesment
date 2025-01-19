import { Row, Col } from 'antd';
import ShrewdLogo from '../../assets/ShrewdLogo.jfif';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Twitter from '../../assets/twitter.png';
import './style.css';

const Footer = () => {
  const SocialMedia = [
    { title: 'LinkedIn', icon: LinkedIn },
    { title: 'Instagram', icon: Instagram },
    { title: 'Facebook', icon: Facebook },
    { title: 'Twitter', icon: Twitter },
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <Row gutter={[16, 16]} justify="space-between">
            <Col xs={24} sm={12} md={8} className="footer-column">
              <div className="footer-logo">
                <img src={ShrewdLogo} alt="Logo" className="footer-logo-img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Ut elit tellus, luctus nec ullamcorper dapibus leo.</p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={4} className="footer-column">
              <div className="footer-links">
                <h4>Company</h4>
                <p>Home</p>
                <p>About</p>
                <p>Categories</p>
                <p>Contact Us</p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={6} className="footer-column">
              <div className="footer-location">
                <h4>Location</h4>
                <p>New No.44, 4th Street Extn.</p>
                <p>Gandhipuram-641012</p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={6} className="footer-column">
              <div className="footer-contact">
                <h4>Reach Us</h4>
                <p>Phone: +44 7429 056569</p>
                <p>
                  Email: <span className="footer-email">Shrewdbusines3@gmail.com</span>
                </p>
              </div>
              <div className="footer-social">
                {SocialMedia.map((item, index) => (
                  <img
                    key={index}
                    src={item.icon}
                    alt={item.title}
                    className="footer-social-icon"
                  />
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>
          All Rights Reserved 2023-2025.{' '}
          <span className="footer-links-text">
            Terms & Conditions &nbsp; Privacy Policy &nbsp; Refund Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
