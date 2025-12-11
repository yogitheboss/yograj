# Architecture Overview

## Component System

The portfolio uses a custom component-based architecture inspired by React/Vue, but built entirely with vanilla JavaScript.

### Core Concepts

1. **Components**: Reusable UI pieces that encapsulate HTML, logic, and state
2. **Templates**: HTML files with template syntax for dynamic content
3. **Data-Driven**: Centralized data source for easy content management
4. **Modular CSS**: Component-specific stylesheets

## Component Lifecycle

```
Component Creation
    ↓
Constructor(props)
    ↓
render() → HTML String
    ↓
mount(container) → DOM Insertion
    ↓
onMount() → Setup Event Listeners
    ↓
[Component Active]
    ↓
onUnmount() → Cleanup (if needed)
```

## Data Flow

```
data/portfolio.js
    ↓
js/app.js (imports data)
    ↓
Component Props
    ↓
Template Engine (renders HTML)
    ↓
DOM
```

## Template Engine

The template engine supports:

- **Variables**: `{{variableName}}`
- **Nested Paths**: `{{object.property}}`
- **Loops**: `{{#each arrayName}}...{{/each}}`
- **Nested Loops**: Loops within loops with proper scoping
- **Conditionals**: `{{#if condition}}...{{/if}}`
- **This Reference**: `{{this}}` for array items

### Example

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

## File Organization

### Separation of Concerns

- **HTML Templates** (`components/`): Structure and layout
- **JavaScript Logic** (`js/components/`): Behavior and interactivity
- **CSS Styles** (`css/`): Visual presentation
- **Data** (`data/`): Content and configuration

### Benefits

1. **Maintainability**: Easy to find and update specific features
2. **Reusability**: Components can be reused across pages
3. **Scalability**: Easy to add new features without affecting existing code
4. **Testability**: Each component can be tested independently
5. **Collaboration**: Multiple developers can work on different components

## Adding New Features

### Step-by-Step Guide

1. **Add Data** (`data/portfolio.js`)
2. **Create Template** (`components/Feature.html`)
3. **Create Component** (`js/components/Feature.js`)
4. **Create Styles** (`css/feature.css`)
5. **Import Styles** (`style.css`)
6. **Use in App** (`js/app.js`)

## Performance Considerations

- Components load templates asynchronously
- CSS is modular and only loads what's needed
- No framework overhead - pure vanilla JS
- Small bundle size
- Fast initial load

## Browser Support

- Modern browsers with ES6+ support
- ES6 Modules required (needs server)
- CSS Grid and Flexbox
- Intersection Observer API (for animations)

## Future Enhancements

- Component caching
- Lazy loading
- Build system for production
- TypeScript support
- State management system
- Router for multi-page support

