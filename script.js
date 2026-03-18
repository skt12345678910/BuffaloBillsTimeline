const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 150); // stagger effect
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));