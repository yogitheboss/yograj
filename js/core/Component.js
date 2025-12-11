/**
 * Component System - A simple component-based architecture
 * Similar to React/Vue but using vanilla JavaScript with JSX-like syntax
 */

/**
 * JSX-like helper function to create HTML elements
 * Usage: h('div', { className: 'my-class' }, 'Content', h('span', null, 'Nested'))
 */
function h(tag, props = {}, ...children) {
    // Handle component functions
    if (typeof tag === 'function') {
        return tag(props || {}, ...children);
    }
    
    // Create element
    const element = document.createElement(tag);
    
    // Set attributes
    if (props) {
        Object.keys(props).forEach(key => {
            if (key === 'className') {
                element.className = props[key];
            } else if (key === 'style' && typeof props[key] === 'object') {
                Object.assign(element.style, props[key]);
            } else if (key.startsWith('on') && typeof props[key] === 'function') {
                const eventName = key.substring(2).toLowerCase();
                element.addEventListener(eventName, props[key]);
            } else if (key === 'onclick' && typeof props[key] === 'string') {
                // Handle string onclick attributes (for inline handlers)
                element.setAttribute('onclick', props[key]);
            } else if (key !== 'key' && key !== 'ref') {
                element.setAttribute(key, props[key]);
            }
        });
    }
    
    // Append children
    children.forEach(child => {
        if (child == null || child === false || child === undefined) {
            return;
        }
        if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(String(child)));
        } else if (child instanceof Node) {
            element.appendChild(child);
        } else if (Array.isArray(child)) {
            child.forEach(c => {
                if (c instanceof Node) {
                    element.appendChild(c);
                } else if (typeof c === 'string' || typeof c === 'number') {
                    element.appendChild(document.createTextNode(String(c)));
                }
            });
        }
    });
    
    return element;
}

/**
 * Convert JSX-like element to HTML string
 */
function elementToHTML(element) {
    if (typeof element === 'string' || typeof element === 'number') {
        return String(element);
    }
    if (element instanceof Node) {
        return element.outerHTML;
    }
    if (Array.isArray(element)) {
        return element.map(e => elementToHTML(e)).join('');
    }
    return String(element);
}

class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
        this.element = null;
    }

    /**
     * Set state and re-render component
     */
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }

    /**
     * Render component - to be overridden by child classes
     * Should return JSX-like elements using h() function or HTML string
     */
    render() {
        throw new Error('Render method must be implemented');
    }

    /**
     * Mount component to DOM
     */
    async mount(container, append = false) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            const result = this.render();
            let html;
            
            // Convert result to HTML string
            if (result instanceof Node) {
                html = result.outerHTML;
            } else if (typeof result === 'string') {
                html = result;
            } else if (Array.isArray(result)) {
                html = result.map(r => elementToHTML(r)).join('');
            } else {
                html = String(result);
            }
            
            if (append) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                while (tempDiv.firstChild) {
                    container.appendChild(tempDiv.firstChild);
                }
            } else {
                container.innerHTML = html;
            }
            this.element = container;
            this.onMount();
        }
    }

    /**
     * Lifecycle hook - called after component is mounted
     */
    onMount() {
        // Override in child classes
    }

    /**
     * Lifecycle hook - called before component is unmounted
     */
    onUnmount() {
        // Override in child classes
    }

    /**
     * Update component props
     */
    updateProps(newProps) {
        this.props = { ...this.props, ...newProps };
        this.render();
    }
}

export { Component, h };
