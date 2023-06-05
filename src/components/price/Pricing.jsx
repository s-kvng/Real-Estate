import React from "react";
import img from "../images/about.jpg";
import PriceCard from "../home/pricing/PriceCard";
import Back from "../common/Back";

const Pricing = () => {
  return (
    <section className="price">
      <Back
        name="30 days money back guarantee"
        title="No Extra Fees. Friendly Support"
        cover={img}
      />

      <div className="container mb5 mt">
        <PriceCard />
      </div>
    </section>
  );
};

export default Pricing;
