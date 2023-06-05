import React from "react";
import './contact.css'
import img from "../images/about.jpg";
import Back from "../common/Back";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <Back
          name="Contact Us"
          title="Get Help & Friendly Support"
          cover={img}
        />

        <div className="container">
          <form action="" className="shadow">
            <h4>Fillup The Form</h4>
            <div>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="text" placeholder="Email" name="" />
            </div>
            <input type="text" placeholder="subject" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
