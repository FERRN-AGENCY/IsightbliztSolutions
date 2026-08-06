import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Slider.css';

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
    const stats = [
        { number: 200, suffix: "+", title: 'Projects Launched', prefix: "" },
        { number: 500, suffix: "M+", title: 'Total Funds Raised', prefix: "$" },
        { number: 100, suffix: "M+", title: 'Total Followers', prefix: "" },
    ];

    const sliderRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const counters = gsap.utils.toArray('.stat-number');
            
            counters.forEach((counter) => {
                const targetValue = parseInt(counter.getAttribute('data-target'));
                
                gsap.to(counter, {
                    innerText: targetValue,
                    duration: 2,
                    snap: { innerText: 1 }, // Rounds to whole numbers
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 90%", // Starts when the stat is near bottom of screen
                    },
                    ease: "power1.out",
                });
            });
        }, sliderRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='app__slider' ref={sliderRef}>
            {stats.map((item, index) => (
                <div key={index} className="stat-card">
                    <h2>
                        {item.prefix}
                        <span className="stat-number" data-target={item.number}>0</span>
                        {item.suffix}
                    </h2>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Slider;