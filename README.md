# Portfolio Website - Modular Architecture

A robust, modular portfolio website built with vanilla JavaScript, following modern component-based architecture principles similar to React/Vue, but without any frameworks.

## 📁 Project Structure

```
yograj/
├── index.html              # Main HTML entry point
├── style.css               # Main stylesheet (imports all CSS modules)
├── app.js                  # Legacy app.js (kept for reference)
│
├── components/             # HTML Component Templates
│   ├── Header.html
│   ├── Hero.html
│   ├── About.html
│   ├── Experience.html
│   ├── Projects.html
│   └── Skills.html
│
├── js/                     # JavaScript Modules
│   ├── app.js             # Main application entry point
│   │
│   ├── core/              # Core framework files
│   │   ├── Component.js   # Component base class & template engine
│   │   └── Router.js      # Router for navigation
│   │
│   ├── components/        # Component classes
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   │
│   └── utils/              # Utility functions
│       ├── dom.js         # DOM manipulation helpers
│       └── animations.js  # Animation utilities
│
├── css/                    # CSS Modules
│   ├── base.css           # Variables, reset, global styles
│   ├── navigation.css
│   ├── hero.css
│   ├── about.css
│   ├── experience.css
│   ├── projects.css
│   ├── skills.css
│   └── scroll-progress.css
│
└── data/                   # Data files
    └── portfolio.js       # Centralized portfolio data
```

## 🚀 Features

### Component-Based Architecture
- **Reusable Components**: Each section is a separate component
- **Template Engine**: Simple templating system with `{{variable}}` and `{{#each}}` syntax
- **Lifecycle Hooks**: Components support `onMount()` and `onUnmount()` hooks
- **State Management**: Components can manage their own state

### Modular CSS
- **Component-Based Styles**: Each component has its own CSS file
- **Easy Maintenance**: Update styles without affecting other components
- **Organized Structure**: Clear separation of concerns

### Data-Driven
- **Centralized Data**: All portfolio data in `data/portfolio.js`
- **Easy Updates**: Update content in one place
- **Type-Safe**: Clear data structure

### Utilities
- **DOM Helpers**: Simplified DOM manipulation
- **Animation Utilities**: Reusable animation functions
- **Router**: Navigation handling (ready for future expansion)

## 🛠️ Getting Started

### Running Locally

Since this uses ES6 modules, you need to run it through a local server:

**Option 1: Using Python**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option 3: Using VS Code Live Server**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then open `http://localhost:8000` in your browser.

## 📝 Adding New Components

1. **Create HTML Template** (`components/YourComponent.html`):
```html
<div class="your-component">
    <h2>{{title}}</h2>
    <p>{{description}}</p>
</div>
```

2. **Create Component Class** (`js/components/YourComponent.js`):
```javascript
import { Component } from '../core/Component.js';
import { ComponentLoader, TemplateEngine } from '../core/Component.js';

export class YourComponent extends Component {
    constructor(props) {
        super(props);
    }

    async render() {
        const template = await ComponentLoader.load('./components/YourComponent.html');
        return TemplateEngine.render(template, this.props);
    }
}
```

3. **Create CSS** (`css/your-component.css`):
```css
.your-component {
    /* Your styles */
}
```

4. **Import CSS** in `style.css`:
```css
@import url('./css/your-component.css');
```

5. **Use in App** (`js/app.js`):
```javascript
import { YourComponent } from './components/YourComponent.js';

// In render method:
const yourComponent = new YourComponent({ title: 'Title', description: 'Desc' });
await yourComponent.mount('#app', true);
```

## 🔧 Template Syntax

### Variables
```html
<h1>{{name}}</h1>
```

### Loops
```html
{{#each items}}
    <div>{{title}}</div>
{{/each}}
```

### Nested Loops
```html
{{#each experiences}}
    <div>
        <h3>{{title}}</h3>
        <ul>
            {{#each responsibilities}}
            <li>{{this}}</li>
            {{/each}}
        </ul>
    </div>
{{/each}}
```

### Conditionals
```html
{{#if showContent}}
    <p>Content here</p>
{{/if}}
```

## 📦 Component API

### Component Class
```javascript
class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async render() {
        // Return HTML string
    }

    onMount() {
        // Called after component is mounted
    }

    setState(newState) {
        // Update state and re-render
    }
}
```

### Mounting Components
```javascript
// Replace content
await component.mount('#container');

// Append content
await component.mount('#container', true);
```

## 🎨 Styling Guidelines

- Use CSS variables from `base.css` for colors and gradients
- Keep component styles in their respective CSS files
- Follow BEM naming convention for complex components
- Use mobile-first responsive design

## 📚 Data Structure

Update `data/portfolio.js` to modify content:

```javascript
export const portfolioData = {
    personal: { ... },
    experience: [ ... ],
    projects: [ ... ],
    skills: { ... }
};
```

## 🔄 Future Enhancements

- [ ] Add routing for multi-page support
- [ ] Implement state management system
- [ ] Add component caching
- [ ] Build system for production
- [ ] Add TypeScript support
- [ ] Implement lazy loading for components

## 📄 License

This project is open source and available for personal use.

