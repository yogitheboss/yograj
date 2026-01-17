/**
 * Experience Component
 */
import { Component, h } from '../core/Component.js';

export class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { experiences = [] } = this.props;
        
        return h('section', { className: 'experience', id: 'experience' },
            h('h2', null, 'Experience'),
            ...experiences.map(exp => 
                h('div', { className: 'exp-card', key: exp.company },
                    exp.image ? h('div', { className: 'company-image-wrapper' },
                        h('a', { href: exp.projectUrl || '#', target: '_blank', className: 'company-image-link' },
                            h('img', { src: exp.image, alt: exp.company, className: 'company-image' })
                        )
                    ) : null,
                    h('div', { className: 'exp-content' },
                        h('h3', null, exp.title),
                        h('h4', null,
                            h('a', { href: exp.companyUrl || '#', target: '_blank' }, exp.company)
                        ),
                        h('p', { className: 'date' }, exp.date),
                        h('ul', null,
                            ...(exp.responsibilities || []).map((resp, idx) => 
                                h('li', { key: idx }, resp)
                            )
                        )
                    )
                )
            )
        );
    }
}

