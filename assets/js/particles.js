/**
 * Subtle particle grid animation
 * Rose/lavender dots with faint connecting lines, slow drift
 * Respects prefers-reduced-motion
 */
(function () {
    var canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        canvas.style.display = 'none';
        return;
    }

    var ctx = canvas.getContext('2d');
    var particles = [];
    var PARTICLE_COUNT = 60;
    var CONNECTION_DISTANCE = 150;
    var mouseX = -1000;
    var mouseY = -1000;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Track mouse for subtle interaction
    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Create particles
    function createParticle() {
        var isRose = Math.random() > 0.5;
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5 + 0.5,
            color: isRose ? 'rgba(232,180,184,' : 'rgba(184,169,201,',
            baseOpacity: Math.random() * 0.3 + 0.1
        };
    }

    for (var i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
                var dx = particles[i].x - particles[j].x;
                var dy = particles[i].y - particles[j].y;
                var dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DISTANCE) {
                    var opacity = (1 - dist / CONNECTION_DISTANCE) * 0.08;
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(232,180,184,' + opacity + ')';
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw and update particles
        for (var k = 0; k < particles.length; k++) {
            var p = particles[k];

            // Subtle mouse repulsion
            var mdx = p.x - mouseX;
            var mdy = p.y - mouseY;
            var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mDist < 120) {
                var force = (120 - mDist) / 120 * 0.5;
                p.vx += (mdx / mDist) * force * 0.02;
                p.vy += (mdy / mDist) * force * 0.02;
            }

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Dampen velocity
            p.vx *= 0.999;
            p.vy *= 0.999;

            // Wrap around edges
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
            if (p.y < -10) p.y = canvas.height + 10;
            if (p.y > canvas.height + 10) p.y = -10;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.baseOpacity + ')';
            ctx.fill();
        }

        requestAnimationFrame(draw);
    }

    draw();
})();
