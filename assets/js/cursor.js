/**
 * Custom cursor with rose glow trail
 * Desktop only — disabled on touch devices and when prefers-reduced-motion is set
 */
(function () {
    // Skip on touch devices or reduced motion preference
    var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) return;

    var cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    var TRAIL_COUNT = 5;
    var trails = [];
    for (var i = 0; i < TRAIL_COUNT; i++) {
        var trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trails.push({
            el: trail,
            x: 0,
            y: 0
        });
    }

    var mouseX = 0;
    var mouseY = 0;
    var cursorVisible = false;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!cursorVisible) {
            cursorVisible = true;
            cursor.classList.add('visible');
            document.body.classList.add('custom-cursor-active');
        }
    });

    document.addEventListener('mouseleave', function () {
        cursorVisible = false;
        cursor.classList.remove('visible');
        document.body.classList.remove('custom-cursor-active');
        trails.forEach(function (t) {
            t.el.style.opacity = '0';
        });
    });

    document.addEventListener('mouseenter', function () {
        cursorVisible = true;
        cursor.classList.add('visible');
        document.body.classList.add('custom-cursor-active');
    });

    function animate() {
        // Position main cursor
        cursor.style.left = mouseX - 6 + 'px';
        cursor.style.top = mouseY - 6 + 'px';

        // Trail follows with delay
        var prevX = mouseX;
        var prevY = mouseY;

        for (var i = 0; i < trails.length; i++) {
            var t = trails[i];
            var speed = 0.15 - i * 0.02;

            t.x += (prevX - t.x) * speed;
            t.y += (prevY - t.y) * speed;

            t.el.style.left = t.x - 3 + 'px';
            t.el.style.top = t.y - 3 + 'px';
            t.el.style.opacity = cursorVisible ? String(0.4 - i * 0.07) : '0';

            prevX = t.x;
            prevY = t.y;
        }

        requestAnimationFrame(animate);
    }

    animate();
})();
