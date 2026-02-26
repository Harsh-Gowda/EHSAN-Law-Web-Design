import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Refresh ScrollTrigger to ensure all markers and offsets are recalculated for the new page
        ScrollTrigger.refresh();
    }, [pathname]);

    return null;
};

export default ScrollToTop;
