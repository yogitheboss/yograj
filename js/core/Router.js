/**
 * Simple Router - Handles navigation and URL changes
 */
class Router {
    constructor() {
        this.routes = [];
        this.currentRoute = null;
        this.init();
    }

    /**
     * Initialize router
     */
    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            this.handleRoute(window.location.hash);
        });

        // Handle initial load
        this.handleRoute(window.location.hash );
    }

    /**
     * Register a route
     */
    route(path, handler) {
        this.routes.push({ path, handler });
    }

    /**
     * Navigate to a route
     */
    navigate(path) {
        window.location.hash = path;
        this.handleRoute(path);
    }

    /**
     * Handle route change
     */
    handleRoute(hash) {
        const path = hash.replace('#', '') ;
        const route = this.routes.find(r => r.path === path);

        if (route) {
            this.currentRoute = path;
            route.handler();
            this.updateActiveNavLink(path);
        }
    }

    /**
     * Update active navigation link
     */
    updateActiveNavLink(activePath) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activePath}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Get current route
     */
    getCurrentRoute() {
        return this.currentRoute;
    }
}

export default Router;

