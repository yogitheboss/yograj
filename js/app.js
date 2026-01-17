/**
 * Main Application Entry Point
 */
import { portfolioData } from '../data/portfolio.js';
import { Navigation } from './components/Navigation.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Experience } from './components/Experience.js';
import { Projects } from './components/Projects.js';
import { Skills } from './components/Skills.js';
import { $ } from './utils/dom.js';

class App {
    constructor() {
        this.data = portfolioData;
        this.components = {};
        this.init();
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            this.render();
        }
    }

    async render() {
        const appContainer = document.getElementById('app');
        if (!appContainer) {
            console.error('App container not found');
            return;
        }

        // Initialize Navigation - mount to body (prepend)
        const nav = new Navigation();
        await nav.mount('body', false);
        this.components.navigation = nav;
        // Initialize Hero Section
        const hero = new Hero({
            name: this.data.personal.name,
            pronouns: this.data.personal.pronouns,
            role: this.data.personal.role,
            age: this.data.personal.age,
            location: this.data.personal.location,
            tagline: this.data.personal.tagline,
            social: this.data.personal.social
        });
        await hero.mount('#app', true);
        this.components.hero = hero;

        // Initialize About Section
        const about = new About({
            about: this.data.personal.about
        });
        await about.mount('#app', true);
        this.components.about = about;

        // Initialize Experience Section
        const experience = new Experience({
            experiences: this.data.experience
        });
        await experience.mount('#app', true);
        this.components.experience = experience;

        // Initialize Projects Section
        const projects = new Projects({
            projects: this.data.projects
        });
        await projects.mount('#app', true);
        this.components.projects = projects;

        // Initialize Skills Section
        const skills = new Skills({
            skills: this.data.skills
        });
        await skills.mount('#app', true);
        this.components.skills = skills;

        // Initialize scroll progress indicator
        this.initScrollProgress();
    }

    initScrollProgress() {
        const scrollProgress = document.createElement('div');
        scrollProgress.className = 'scroll-progress';
        document.body.appendChild(scrollProgress);

        window.addEventListener('scroll', () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            scrollProgress.style.transform = `scaleX(${scrolled / scrollable})`;
        });
    }
}

// Initialize the app
const app = new App();

