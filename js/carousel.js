/* ============================================================
   VERANDA HOTELS — CAROUSEL COMPONENT
   ============================================================ */

class Carousel {
  constructor(element, options = {}) {
    this.el       = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.el) return;

    this.track    = this.el.querySelector('.carousel__track');
    this.slides   = Array.from(this.el.querySelectorAll('.carousel__slide'));
    this.prevBtn  = this.el.querySelector('.carousel__arrow--prev');
    this.nextBtn  = this.el.querySelector('.carousel__arrow--next');
    this.dotsEl   = this.el.querySelector('.carousel__dots');

    this.current    = 0;
    this.total      = this.slides.length;
    this.autoPlay   = options.autoPlay !== false;
    this.interval   = options.interval || 5000;
    this.loop       = options.loop !== false;
    this.timer      = null;
    this.isDragging = false;
    this.startX     = 0;
    this.dots       = [];

    this.init();
  }

  init() {
    if (this.total <= 1) return;

    this.buildDots();
    this.bindEvents();
    this.goTo(0, false);

    if (this.autoPlay) this.startTimer();
  }

  buildDots() {
    if (!this.dotsEl) return;
    this.dotsEl.innerHTML = '';
    this.slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => this.goTo(i));
      this.dotsEl.appendChild(dot);
      this.dots.push(dot);
    });
  }

  bindEvents() {
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // Touch / drag support
    this.el.addEventListener('touchstart', e => {
      this.startX = e.touches[0].clientX;
      this.pauseTimer();
    }, { passive: true });

    this.el.addEventListener('touchend', e => {
      const diff = this.startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
      this.startTimer();
    }, { passive: true });

    // Pause on hover
    this.el.addEventListener('mouseenter', () => this.pauseTimer());
    this.el.addEventListener('mouseleave', () => this.startTimer());

    // Keyboard when focused
    this.el.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  goTo(index, animate = true) {
    if (!animate) this.track.style.transition = 'none';
    this.current = (index + this.total) % this.total;
    this.track.style.transform = `translateX(-${this.current * 100}%)`;

    if (!animate) {
      requestAnimationFrame(() => {
        this.track.style.transition = '';
      });
    }

    // Update dots
    this.dots.forEach((d, i) => {
      d.classList.toggle('active', i === this.current);
    });
  }

  prev() {
    this.goTo(this.current - 1);
    this.resetTimer();
  }

  next() {
    this.goTo(this.current + 1);
    this.resetTimer();
  }

  startTimer() {
    if (!this.autoPlay) return;
    this.timer = setInterval(() => this.next(), this.interval);
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    this.pauseTimer();
    this.startTimer();
  }

  destroy() {
    this.pauseTimer();
  }
}

// Export
window.Carousel = Carousel;
