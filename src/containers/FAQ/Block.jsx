import React from "react";
import { images } from "../../constants";
import "./Block.css";

const Block = ({ title, title2, title3, word, word2, description, cta }) => {
  return (
    <div className="block">
      <div
        className="block-6"
        style={{
          backgroundImage: `url(${images.faqbg})`,
          backgroundSize: "cover",
          // backgroundPosition: "bottom right",
        }}
      >
        <div className="block-7">
          <h2 className="block-10">
            <span>{title}</span> {word} <br />
            <span>{title2}</span> {word2} <span>{title3}</span>
          </h2>
          <p className="block-11">{description}</p>
        </div>
        <a href="https://calendly.com/jeffersonmeet/30min" className="link">
          {cta}
        </a>
      </div>
    </div>
  );
};

export default Block;
