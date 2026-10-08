window.portfolio = {
    getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    },
    toggleTheme() {
        const next = window.portfolio.getTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch { }
        return next;
    },
    initReveal() {
        const io = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        const scan = () => document.querySelectorAll('.reveal:not(.show)').forEach(el => io.observe(el));
        new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
        scan();
    },
    initProgress() {
        const bar = document.createElement('div');
        bar.className = 'progress';
        document.body.appendChild(bar);
        const update = () => {
            const h = document.documentElement.scrollHeight - innerHeight;
            bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
        };
        addEventListener('scroll', update, { passive: true });
        addEventListener('resize', update);
        update();
    }
};

// Theme button works in plain JS too
document.addEventListener('click', e => {
    if (!e.target.closest('[data-theme-toggle]')) return;
    const next = window.portfolio.getTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch { }
});
// count-up numbers + spotlight glow on cards
(function () {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        run(e.target);
    }), { threshold: 0.5 });

    function run(el) {
        const end = parseFloat(el.dataset.count);
        const dec = +(el.dataset.dec || 0);
        const suf = el.dataset.suffix || '';
        const t0 = performance.now();
        (function step(t) {
            const p = Math.min((t - t0) / 1200, 1);
            el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec) + suf;
            if (p < 1) requestAnimationFrame(step);
        })(t0);
    }

    const scan = () => document.querySelectorAll('[data-count]:not([data-seen])')
        .forEach(el => { el.dataset.seen = 1; io.observe(el); });
    new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
    scan();

    addEventListener('pointermove', e => {
        const c = e.target.closest && e.target.closest('.card');
        if (!c) return;
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
})();