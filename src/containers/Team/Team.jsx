import React, { useEffect, useCallback, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { teamData } from './TeamData';
import Props from '../../components/Props/Props';
import { images } from './../../constants';
import './Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(teamData[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]); // Track actual possible scroll points

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    active: window.innerWidth <= 676 
  });

  const gridRef = useRef(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    const viewport = document.getElementById('team-mobile-scroll');
    if (viewport && !emblaApi) {
      emblaRef(viewport); 
    }
    if (emblaApi) {
      // This gets the correct number of dots based on the screen width
      setScrollSnaps(emblaApi.scrollSnapList()); 
      emblaApi.on('select', onSelect);
      onSelect();
    }
  }, [emblaApi, emblaRef, onSelect]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="team-section">
      <div className="container">
        <Props company="Team" title="The" passage="Behind" highlightOne="Experts" highlightTwo="Insightblitz" id="Team" />

        <div className="team-layout">
          <div className="team-grid-wrapper" id="team-mobile-scroll">
            <div className="team-grid" ref={gridRef}>
              {teamData.map((member) => (
                <div 
                  key={member.id} 
                  className={`member-wrapper ${selectedMember.id === member.id ? 'active' : ''}`}
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="member-image-wrap">
                    <img src={member.img} alt={member.name} className="member-thumb" />
                    <div className="member-tag">{member.abbr}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="team-spotlight">
            <div className="spotlight-frame">
              <img src={selectedMember.img} alt={selectedMember.name} className="spotlight-img" />
              <div className="spotlight-content">
                <div className="spotlight-text">
                  <h3>{selectedMember.name}</h3>
                  <p>{selectedMember.role}</p>
                </div>
                <a href={selectedMember.twitter} target="_blank" rel="noreferrer" className="x-link">
                  <img src={images.twitter} alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Pagination Footer: Now it only maps the reachable dots */}
        <div className="pagination-footer" >
          {scrollSnaps.map((_, index) => (
            <div
              key={index}
              className={`dot ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;