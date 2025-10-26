'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useSmoothScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let locomotiveScroll: any;

    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current!,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          smartphone: { smooth: true },
          tablet: { smooth: true, breakpoint: 1024 }
        });

        locomotiveScroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollRef.current, {
          scrollTop(value) {
            return arguments.length
              ? locomotiveScroll.scrollTo(value, { duration: 0, disableLerp: true })
              : locomotiveScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          },
          pinType: scrollRef.current!.style.transform ? 'transform' : 'fixed'
        });

        ScrollTrigger.addEventListener('refresh', () => locomotiveScroll.update());
        ScrollTrigger.refresh();
      } catch (error) {
        console.error('Error initializing Locomotive Scroll:', error);
      }
    };

    initScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return scrollRef;
}