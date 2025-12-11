/**
 * About Component
 */
import { Component, h } from '../core/Component.js';

export class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { about } = this.props;
        
        return h('section', { className: 'about', id: 'about' },
            h('h2', null, 'About Me'),
            h('p', null, about)
        );
    }
}

