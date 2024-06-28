const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_column">

            <h3>ONLINE SHOPPING</h3>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
          </div>
          <div className="footer_column">
            <h3>CUSTOMER POLICIES</h3>
            
            <a href="#">Contact Us</a>
            <a href="#">FAQ's</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Order's</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Privacy policy</a>
            <a href="#">Grievance Officer</a>
          </div>
          <div className="footer_column">
            <div className="footer_adds">
              <div>
                <img
                  className="footer_img"
                  src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                />
              </div>
              <div className="footer_guarantee">
                <strong>100% ORIGINAL </strong>
                guarantee for all products at myntra.com
              </div>
            </div>
            <div className="footer_adds">
              <div>
                <img
                  className="footer_img"
                  src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                />
              </div>
              <div className="footer_guarantee">
                <strong>Return within 14days</strong>of receiving your order
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_css">
          <div className="copyright">
            © 2024 www.myntra.com. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
