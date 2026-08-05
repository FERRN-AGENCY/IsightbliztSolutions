import React from "react";
import Props from "../../components/Props/Props";
import { PartnerMarquee } from "../../components";

const Partners = () => {
  return (
    <div className="Partners">
      <Props
        company="Industries"
        title=""
        passage="The Businesses That"
        highlightOne="Built For"
        highlightTwo="Need It Most"
        description="We deploy AI systems for clinics, real estate teams, and high-ticket service businesses that can't afford to miss a lead no matter what time it comes in."
        buttonText=""
        id="Partners"
        showLine={false}
      />
      <PartnerMarquee />
    </div>
  );
};

export default Partners;
