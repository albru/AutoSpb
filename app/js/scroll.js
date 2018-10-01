const scroll = (function name(params) {
  const linkNav = document.querySelectorAll('[href^="#"]') 
  const V = 0.3;
  const headerHeight = document.querySelector('.header-container').offsetHeight;
  console.log(headerHeight)

  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      e.preventDefault(); 
      const w = window.pageYOffset; 
      const hash = this.href.replace(/[^#]*(.*)/, '$1'); 
      let t = document.querySelector(hash).getBoundingClientRect().top - headerHeight;
      let start = null;

      requestAnimationFrame(step);  
      function step(time) {;
        if (start === null) start = time;
        const progress = time - start;
        let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          null  // URL с хэшем
        }
      }
    }, false);
  }
})()