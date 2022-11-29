import React from "react";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";
import "./awards.css";

const Awards = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="We have had over 400,000 users find homes successfully using our site!"
            subtitle="Our Awards"
          />

          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
