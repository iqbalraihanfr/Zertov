import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ParallaxCards() {
    const sectionRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const ctx = gsap.context(() => {
        const cards = sectionRef.current?.querySelectorAll('.parallax-card');
        
        cards?.forEach((card, index) => {
          // Card entrance animation
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotation: -5,
            duration: 1,
            ease: 'power3.out',
            delay: index * 0.1
          });
  
          // Parallax effect on scroll
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            },
            y: -50 * (index % 2 === 0 ? 1 : -1),
            rotation: 2 * (index % 2 === 0 ? 1 : -1)
          });
        });
      }, sectionRef);
  
      return () => ctx.revert();
    }, []);
  
    const projects = [
      { title: 'E-Commerce Platform', category: 'Web Development', color: 'from-blue-500 to-purple-600' },
      { title: 'Brand Identity', category: 'Design', color: 'from-pink-500 to-orange-500' },
      { title: 'Mobile App', category: 'App Development', color: 'from-green-500 to-teal-500' },
      { title: '3D Experience', category: 'WebGL', color: 'from-indigo-500 to-blue-600' }
    ];
  
    return (
      <section 
        ref={sectionRef}
        data-scroll-section
        className="py-32 px-4 bg-black"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-20">
          Featured Work
        </h2>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="parallax-card group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
              data-scroll
              data-scroll-speed={index % 2 === 0 ? "1" : "-1"}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <span className="text-sm font-semibold mb-2 opacity-80">{project.category}</span>
                <h3 className="text-4xl font-bold mb-4 transform group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="w-12 h-1 bg-white transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }