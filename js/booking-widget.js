/* ============================================================
   VERANDA HOTELS — BOOKING WIDGET
   ============================================================ */

class BookingWidget {
  constructor(containerId) {
    this.el = document.getElementById(containerId);
    if (!this.el) return;

    this.state = {
      property: 'Veranda Lagoon Bhubaneswar',
      checkIn:  '',
      checkOut: '',
      rooms:    1,
      adults:   2,
      children: 0,
      promo:    ''
    };

    this.render();
    this.bind();
  }

  render() {
    const properties = [
      'Veranda Lagoon Bhubaneswar',
      'Veranda Lake Resort Raipur',
      'Veranda on Sea Goa',
      'Veranda Manor Jungpana',
      'Veranda Palm Beach Resort Vizag',
      'Veranda Himalayan Spa Resort Shimla',
      'Veranda Tea Resort Coorg',
      'Veranda Oasis Resort Jaipur',
      'Veranda Heritage Udaipur',
    ];

    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    this.el.innerHTML = `
      <div class="booking-widget">
        <div class="booking-widget__inner">

          <!-- Property -->
          <div class="booking-widget__field">
            <label class="booking-widget__label">Select Property</label>
            <select class="booking-widget__select" id="bw-property">
              ${properties.map(p => `<option value="${p}">${p}</option>`).join('')}
            </select>
          </div>

          <!-- Dates -->
          <div class="booking-widget__field booking-widget__dates">
            <div class="booking-widget__field" style="flex:1">
              <label class="booking-widget__label">Check In</label>
              <input type="date" class="booking-widget__input" id="bw-checkin" min="${today}" value="${today}">
            </div>
            <div class="booking-widget__dates-arrow">→</div>
            <div class="booking-widget__field" style="flex:1">
              <label class="booking-widget__label">Check Out</label>
              <input type="date" class="booking-widget__input" id="bw-checkout" min="${tomorrow}" value="${tomorrow}">
            </div>
          </div>

          <!-- Rooms & Guests -->
          <div class="booking-widget__field" style="position:relative;">
            <label class="booking-widget__label">Rooms &amp; Guests</label>
            <div class="booking-widget__guests" id="bw-guests-trigger">
              <span class="booking-widget__guests-text" id="bw-guests-text">
                1 Room · 2 Adults · 0 Children
              </span>
              <div class="booking-widget__guests-add">+</div>
            </div>
            <!-- Stepper Popover -->
            <div class="guest-stepper" id="bw-stepper">
              <div class="guest-stepper__row">
                <span class="guest-stepper__label">Rooms</span>
                <div class="guest-stepper__controls">
                  <button class="guest-stepper__btn" data-type="rooms" data-action="dec">−</button>
                  <span class="guest-stepper__count" id="bw-rooms-count">1</span>
                  <button class="guest-stepper__btn" data-type="rooms" data-action="inc">+</button>
                </div>
              </div>
              <div class="guest-stepper__row">
                <span class="guest-stepper__label">Adults</span>
                <div class="guest-stepper__controls">
                  <button class="guest-stepper__btn" data-type="adults" data-action="dec">−</button>
                  <span class="guest-stepper__count" id="bw-adults-count">2</span>
                  <button class="guest-stepper__btn" data-type="adults" data-action="inc">+</button>
                </div>
              </div>
              <div class="guest-stepper__row">
                <span class="guest-stepper__label">Children</span>
                <div class="guest-stepper__controls">
                  <button class="guest-stepper__btn" data-type="children" data-action="dec">−</button>
                  <span class="guest-stepper__count" id="bw-children-count">0</span>
                  <button class="guest-stepper__btn" data-type="children" data-action="inc">+</button>
                </div>
              </div>
              <button class="btn-primary" id="bw-stepper-done" style="width:100%;justify-content:center;margin-top:10px;">Done</button>
            </div>
          </div>

          <!-- Promo -->
          <div class="booking-widget__field">
            <label class="booking-widget__label">Promo Code</label>
            <input type="text" class="booking-widget__input" id="bw-promo" placeholder="Enter code">
          </div>

          <!-- Search -->
          <button class="btn-search" id="bw-search">Search</button>
        </div>
      </div>
    `;
  }

  bind() {
    const stepper = document.getElementById('bw-stepper');
    const trigger = document.getElementById('bw-guests-trigger');
    const doneBtn = document.getElementById('bw-stepper-done');

    // Toggle stepper
    trigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      stepper?.classList.toggle('open');
    });

    doneBtn?.addEventListener('click', () => {
      stepper?.classList.remove('open');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!trigger?.contains(e.target) && !stepper?.contains(e.target)) {
        stepper?.classList.remove('open');
      }
    });

    // Stepper buttons
    document.querySelectorAll('.guest-stepper__btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type   = btn.dataset.type;
        const action = btn.dataset.action;
        const mins   = { rooms: 1, adults: 1, children: 0 };
        const maxs   = { rooms: 10, adults: 10, children: 6 };

        if (action === 'inc') {
          this.state[type] = Math.min(this.state[type] + 1, maxs[type]);
        } else {
          this.state[type] = Math.max(this.state[type] - 1, mins[type]);
        }

        this.updateCounts();
      });
    });

    // Date sync
    document.getElementById('bw-checkin')?.addEventListener('change', (e) => {
      const next = new Date(e.target.value);
      next.setDate(next.getDate() + 1);
      const checkoutEl = document.getElementById('bw-checkout');
      if (checkoutEl) {
        checkoutEl.min = next.toISOString().split('T')[0];
        if (checkoutEl.value <= e.target.value) {
          checkoutEl.value = next.toISOString().split('T')[0];
        }
      }
    });

    // Search
    document.getElementById('bw-search')?.addEventListener('click', () => {
      const property = document.getElementById('bw-property')?.value || '';
      const checkIn  = document.getElementById('bw-checkin')?.value  || '';
      const checkOut = document.getElementById('bw-checkout')?.value || '';
      const promo    = document.getElementById('bw-promo')?.value    || '';

      const params = new URLSearchParams({
        property, checkIn, checkOut, promo,
        rooms:    this.state.rooms,
        adults:   this.state.adults,
        children: this.state.children
      });

      window.location.href = `booking.html?${params.toString()}`;
    });
  }

  updateCounts() {
    const rooms    = document.getElementById('bw-rooms-count');
    const adults   = document.getElementById('bw-adults-count');
    const children = document.getElementById('bw-children-count');
    const text     = document.getElementById('bw-guests-text');

    if (rooms)    rooms.textContent    = this.state.rooms;
    if (adults)   adults.textContent   = this.state.adults;
    if (children) children.textContent = this.state.children;
    if (text)     text.textContent     = `${this.state.rooms} Room · ${this.state.adults} Adults · ${this.state.children} Children`;
  }
}

window.BookingWidget = BookingWidget;
