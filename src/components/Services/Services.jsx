import React from 'react';
import Back from '../common/Back';
import img from '../images/services.jpg'
import FeaturedCard from '../featured/FeaturedCard';

const Services = () => {
  return (
    <>
        <section className="services mb5">
            <Back name="Services" title="Services -All Services" cover={img} />

            <div className="featured container">
                <FeaturedCard />
            </div>
        </section>
    </>
  )
}

export default Services