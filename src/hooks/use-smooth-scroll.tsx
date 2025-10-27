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
    let refreshHandler: (() => void) | null = null;
    let scrollHandler: (() => void) | null = null;
    let isCanceled = false;

    const initScroll = async () => {
      try {
        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        if (isCanceled) return;

        locomotiveScroll = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
          smartphone: { smooth: true },
          tablet: { smooth: true, breakpoint: 1024 }
        });

        scrollHandler = () => ScrollTrigger.update();
        locomotiveScroll.on('scroll', scrollHandler);

        ScrollTrigger.defaults({ scroller: scrollEl });

        ScrollTrigger.scrollerProxy(scrollEl, {
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

        refreshHandler = () => locomotiveScroll?.update();
        ScrollTrigger.addEventListener('refresh', refreshHandler);
        ScrollTrigger.refresh();
      } catch (error) {
        console.error('Error initializing Locomotive Scroll:', error);
      }
    };

    initScroll();

    return () => {
      isCanceled = true;

      if (scrollHandler && locomotiveScroll?.off) {
        locomotiveScroll.off('scroll', scrollHandler);
      }

      if (refreshHandler) {
        ScrollTrigger.removeEventListener('refresh', refreshHandler);
      }

      const scrollEl = scrollRef.current;
      ScrollTrigger.getAll()
        .filter(trigger => trigger.scroller === scrollEl)
        .forEach(trigger => trigger.kill());

      ScrollTrigger.defaults({});

      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return scrollRef;
}
