/**
 * Navigation Component
 */
import { Component, h } from '../core/Component.js';
import { $, $$, scrollToElement, debounce } from '../utils/dom.js';

export class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return h('header', { className: 'heading' },
            h('nav', { className: 'navbar' },
                h('img', { className: 'logo', src: './assets/logo.svg', alt: 'logo' }),
                h('div', { className: 'menu_icon', onclick: 'toggleMenu()' },
                    h('div', { className: 'burger' },
                        h('div', { className: 'line line1' }),
                        h('div', { className: 'line line2' }),
                        h('div', { className: 'line line3' })
                    )
                ),
                h('ul', { className: 'nav-links' },
                    h('li', null, h('a', { href: '#home' }, 'Home')),
                    h('li', null, h('a', { href: '#about' }, 'About')),
                    h('li', null, h('a', { href: '#experience' }, 'Experience')),
                    h('li', null, h('a', { href: '#projects' }, 'Projects')),
                    h('li', null, h('a', { href: '#skills' }, 'Skills'))
                )
            ),
            h('div', { id: 'menu' },
                h('ul', null,
                    h('li', null, 'Home'),
                    h('li', null, 'About'),
                    h('li', null, 'Work')
                )
            )
        );
    }

    async mount(container, prepend = false) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            const element = this.render();
            const html = element.outerHTML;
            
            if (prepend) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                container.insertBefore(tempDiv.firstChild, container.firstChild);
            } else {
                container.insertAdjacentHTML('afterbegin', html);
            }
            this.element = container;
            this.onMount();
        }
    }

    onMount() {
        this.initNavigation();
        this.initMobileMenu();
        this.initScrollEffects();
    }

    initNavigation() {
        // Smooth scroll for navigation links
        $$('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const navbarHeight = $('.navbar').offsetHeight;
                scrollToElement(targetId, navbarHeight);
                
                // Close mobile menu if open
                const navLinks = $('.nav-links');
                if (navLinks.classList.contains('active')) {
                    this.toggleMenu();
                }
            });
        });

        // Highlight active nav link on scroll
        const highlightNavLink = debounce(() => {
            const sections = $$('section[id]');
            const navLinks = $$('.navbar ul li a');
            const scrollY = window.pageYOffset;
            const navbarHeight = $('.navbar').offsetHeight;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - navbarHeight - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, 100);

        window.addEventListener('scroll', highlightNavLink);
    }

    initMobileMenu() {
        // Make toggleMenu available globally
        window.toggleMenu = () => {
            this.toggleMenu();
        };

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const menuIcon = $('.menu_icon');
            const navLinks = $('.nav-links');

            if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        $$('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if ($('.nav-links').classList.contains('active')) {
                    this.toggleMenu();
                }
            });
        });
    }

    toggleMenu() {
        const menuIcon = $('.menu_icon');
        const navLinks = $('.nav-links');

        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active');
    }

    initScrollEffects() {
        const navbar = $('.navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }
}

