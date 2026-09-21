/**
 * Analytics events: a thin wrapper around GoatCounter.
 * A silent no-op when GoatCounter isn't loaded (no site code set, blocked by
 * the visitor, or offline), so analytics can never break the site.
 * Only fixed event names are sent, never anything a visitor types.
 */
(function () {
    function track(name, title) {
        try {
            if (window.goatcounter && typeof window.goatcounter.count === 'function') {
                window.goatcounter.count({ path: name, title: title || name, event: true });
            }
        } catch (e) {
            // Ignore: analytics must never affect the page
        }
    }

    window.trackEvent = track;

    // Contact link clicks (email + LinkedIn)
    document.addEventListener('click', function (event) {
        var link = event.target.closest && event.target.closest('.contact-email, .contact-links a');
        if (!link) return;

        var href = link.getAttribute('href') || '';
        if (href.indexOf('mailto:') === 0) {
            track('click/email', 'Clicked email');
        } else if (href.indexOf('linkedin.com') !== -1) {
            track('click/linkedin', 'Clicked LinkedIn');
        }
    });
})();
