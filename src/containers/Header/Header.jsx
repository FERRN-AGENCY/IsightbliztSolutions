import React from "react";
import Props from "../../components/Props/Props";

const Header = () => {
  return (
    <div className="app__header">
      <Props
        company="Insightblitz Solutions"
        title=""
        highlightOne="We Turn "
        passage="Web3 Projects Into Market Leaders Through"
        highlightTwo="  GTM + KOL Growth"
        passage2=""
        description="Insightblitz helps Web3 teams go from strategy to market through execution-led GTM, KOL campaigns, partnerships, and community growth."
        buttonText="Book a Call"
        id=""
        showLine={true}
      />
    </div>
  );
};

export default Header;
