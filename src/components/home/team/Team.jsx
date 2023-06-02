import React from 'react';
import Heading from '../../common/Heading';
import './Team.css';
import { team } from '../../data/Data';

const Team = () => {
  return (
    <>

        <section className='team'>
            <div className="container">

                <Heading title="Team" subtitle="Team mamtes"/>

                <div className="content mtop grid3">

                    {team.map((val , index)=>( 
                        <div className='box' id={index}>
                            <button className="btn3">{ val.list } Listings</button>
                            <div className="detail">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                    <i className="fa fa-circle-check"></i>
                                </div>
                                <i className="fa fa-location-dot"></i>
                                <label htmlFor="">{val.address}</label>
                                <h4>{val.name}</h4>

                               <ul>
                               {val.icon.map((icon , index)=>(
                                    <li key={index}> {icon}</li>
                                ))}
                               </ul>
                               <div className="button flex">
                                <button>
                                    <i className='fa fa-envelop'></i>
                                    Message
                                </button>

                                <button className="btn4">
                                    <i className="fa fa-phone-alt"></i>
                                </button>
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    </>
  )
}

export default Team