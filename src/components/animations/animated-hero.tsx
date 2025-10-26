
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AnimatedHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        // Split text animation
        const titleChars = titleRef.current?.textContent?.split('') || [];
        if (titleRef.current) {
          titleRef.current.innerHTML = titleChars
            .map(char => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');
        }
  
        // Hero timeline
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' }
        });
  
        tl.from(titleRef.current?.querySelectorAll('span') || [], {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.02,
          duration: 1.2,
          ease: 'back.out(1.7)'
        })
        .from(subtitleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8
        }, '-=0.6')
        .from(ctaRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6
        }, '-=0.4');
  
        // Parallax effect
        gsap.to(heroRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          },
          y: 300,
          opacity: 0.5,
          scale: 0.95
        });
      }, heroRef);
  
      return () => ctx.revert();
    }, []);
  
    return (
      <section 
        ref={heroRef}
        data-scroll-section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient" 
               style={{ backgroundSize: '400% 400%' }}></div>
        </div>
  
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" data-scroll data-scroll-speed="2">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            ZERTOV AGENCY
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            We Create Digital Experiences That Transform Brands
          </p>
          
          <div ref={ctaRef} className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105">
              Start Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Work
            </button>
          </div>
        </div>
      </section>
    );
  }