/**
 * Hero Component
 */
import { Component, h } from '../core/Component.js';

export class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, pronouns, role, tagline, social } = this.props;
        
        return h('section', { className: 'main' },
            h('div', { className: 'text' },
                h('div', { className: 'name' },
                    h('h1', null,
                        h('span', { className: 'highlight' }, name)
                    ),
                    h('h2', { className: 'pronouns' },
                        h('span', null, pronouns)
                    )
                ),
                h('div', { className: 'tagline' },
                    h('h2', { className: 'role' },
                        h('span', { className: 'web_image' },
                            h('img', { src: './assets/Web.svg', alt: 'web' })
                        ),
                        h('span', { className: 'text-gradient' }, role)
                    ),
                    h('h2', { className: 'passion' }, tagline)
                ),
                h('div', { className: 'connect' },
                    h('a', { href: social.linkedin, target: '_blank', 'aria-label': 'LinkedIn' },
                        h('img', { src: './assets/linkedin.svg', alt: 'linkedin' })
                    ),
                    h('a', { href: social.github, target: '_blank', 'aria-label': 'GitHub' },
                        h('img', { src: './assets/github.svg', alt: 'github' })
                    ),
                    h('a', { href: social.twitter, target: '_blank', 'aria-label': 'Twitter' },
                        h('img', { src: './assets/twitter.svg', alt: 'twitter' })
                    )
                )
            ),
            h('div', { className: 'poster_boy' },
                h('img', { src: './assets/poster_boy.svg', alt: 'hero' })
            )
        );
    }
}

