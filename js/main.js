
// wait for the window content to load fully
window.addEventListener('DOMContentLoaded', () => {

    // create a gsap timeline instance (uses GSAP if available on the page)
    const timeline = window.gsap?.timeline({
        defaults: { duration: 0.75, ease: 'power1.out' }
    });

    // Animate paragraphs if GSAP loaded
    if (timeline) {
        // stagger will add a small delay between each `p` element
        timeline.from('p', { y: 20, opacity: 0, stagger: 0.2 }, '-=0.6');
    }

});



