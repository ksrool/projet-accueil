const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeIns.forEach(fade => {
  observer.observe(fade);
});