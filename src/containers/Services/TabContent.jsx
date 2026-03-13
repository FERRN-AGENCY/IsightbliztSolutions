import React from 'react';
import { images } from '../../constants';

const TabContent = ({ data }) => {
  if (!data) return <div className="placeholder">No content available.</div>;

  return (
    <div className="tab-pane active">
      <div className="div-block-3">
        {/* Header Block */}
        <div 
            className="div-block-6"
            style={{ 
            backgroundImage: `url(${images.servicesbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border:'none',
          }}
            >
          <div className="div-block-7">
            <h2 className="text-block-10">{data.title}</h2>
            <p className="text-block-11">{data.description}</p>
          </div>
          <a href="https://calendly.com/jeffersonmeet/30min" className="link-book">{data.cta}</a>
        </div>

        {/* Cards */}
        {data.cards.map((card) => (
          <div key={card.id} className="card-services">
            <div className="div-block-4">
              <img src={card.icon} alt="icon" loading="lazy" />
            </div>
            <div className="div-block-5">
              <div className="text-block-8">{card.title}</div>
              <div className="text-block-9">{card.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContent;