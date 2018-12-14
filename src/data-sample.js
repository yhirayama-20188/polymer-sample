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
        var textcolor = `${this.textcolor}`;
        var first = `${this.first}`;
        var last = `${this.last}`;
        return [textcolor, first, last];
        //return `${this.first}, ${this.last} ${new Date()}`;
    }

    static get template() {
        return html`<div style$="color: {{textcolor}}">[[_fullName()]]</div>`;
    }
}

window.customElements.define('data-sample', DataSample);