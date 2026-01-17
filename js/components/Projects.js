/**
 * Projects Component
 */
import { Component, h } from '../core/Component.js';

export class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { projects = [] } = this.props;
        
        return h('section', { className: 'projects', id: 'projects' },
            h('h2', null, 'Projects'),
            h('div', { className: 'project-grid' },
                ...projects.map(project => 
                    h('div', { className: 'project-card', key: project.title },
                        h('h3', null, project.title),
                        h('p', null, project.description),
                        h('a', { href: project.link || '#', className: 'project-link', target: '_blank' }, project.linkText || 'View')
                    )
                ) 
            )
        );
    }
}

