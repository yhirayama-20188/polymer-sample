import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DataSample extends PolymerElement {
    static get is() {
        return 'data-sample';
    }
    static get properties() {
        return {
            textcolor: {
                type: String,
                value: 'green'
            },
            first: {
                type: String,
                value: 'joe',
                notify: true
            },
            last: {
                type: String,
                value: 'doe',
                notify: true
            }
        };
    }

    _fullName() {
        return `${this.first}, ${this.last} ${new Date()}`;
    }

    static get template() {
        return html`[[_fullName()]]`;
    }
}

window.customElements.define('data-sample', DataSample);