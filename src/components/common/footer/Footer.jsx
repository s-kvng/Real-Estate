import React from "react";
import { footer } from "../../data/Data";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>

            <button className="btn5">Contact Us</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Do you need any Help With Anything?</h2>
              <p>
                Recieve update, hot deals , tuttorials, discounts sent straight
                in your inbox every month
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" name="" />
                <button>Subcribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box small">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className="legal">
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
