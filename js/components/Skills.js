/**
 * Skills Component
 */
import { Component, h } from '../core/Component.js';

export class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { skills } = this.props;
        const { frontend = [], backend = [], tools = [] } = skills || {};
        
        return h('section', { className: 'skills', id: 'skills' },
            h('h2', null, 'Skills'),
            h('div', { className: 'skills-grid' },
                h('div', { className: 'skill-category' },
                    h('h3', null,
                        h('i', { className: 'fas fa-code' }),
                        ' Frontend'
                    ),
                    h('div', { className: 'skill-tags' },
                        ...frontend.map(skill => 
                            h('span', { key: skill.name },
                                h('i', { className: skill.icon }),
                                ` ${skill.name}`
                            )
                        )
                    )
                ),
                h('div', { className: 'skill-category' },
                    h('h3', null,
                        h('i', { className: 'fas fa-server' }),
                        ' Backend'
                    ),
                    h('div', { className: 'skill-tags' },
                        ...backend.map(skill => 
                            h('span', { key: skill.name },
                                h('i', { className: skill.icon }),
                                ` ${skill.name}`
                            )
                        )
                    )
                ),
                h('div', { className: 'skill-category' },
                    h('h3', null,
                        h('i', { className: 'fas fa-tools' }),
                        ' Tools & Others'
                    ),
                    h('div', { className: 'skill-tags' },
                        ...tools.map(skill => 
                            h('span', { key: skill.name },
                                h('i', { className: skill.icon }),
                                ` ${skill.name}`
                            )
                        )
                    )
                )
            )
        );
    }
}

