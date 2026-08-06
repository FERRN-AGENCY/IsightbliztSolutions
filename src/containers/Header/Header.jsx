import React from "react";
import Props from "../../components/Props/Props";

const Header = () => {
  return (
    <div className="app__header">
      <Props
        company="Insightblitz Solutions"
        title=""
        passage="Behind Web3's"
        passage2=""
        highlightOne="The KOL Engine"
        highlightTwo="Biggest Launches"
        description="Insightblitz helps blockchain, NFT, and crypto projects grow through trusted KOLs, Alpha Groups, and influencer campaigns that create real market attention."
        buttonText="Book a Call"
        id=""
        showLine={true}
      />
    </div>
  );
};

export default Header;
