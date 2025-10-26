import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function RevealText() {
    const textRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        const words = textRef.current?.querySelectorAll('.word');
        
        gsap.from(words || [], {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1
          },
          opacity: 0.2,
          stagger: 0.1
        });
      }, textRef);
  
      return () => ctx.revert();
    }, []);
  
    return (
      <section data-scroll-section className="py-32 px-4 bg-white">
        <div ref={textRef} className="max-w-6xl mx-auto">
          <p className="text-4xl md:text-6xl font-bold text-gray-900 leading-relaxed">
            {`We believe in the power of design to transform businesses and create memorable experiences that last forever`.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-3 mb-2">{word}</span>
            ))}
          </p>
        </div>
      </section>
    );
  }
  