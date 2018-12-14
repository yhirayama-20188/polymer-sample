import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DataView extends PolymerElement {
    static get is() {
        return 'data-view';
    }
    static get properties() {
        return {
            place: {
                type: String,
                value: 'エトーシャ国立公園',
                notify: true
            },
            country: {
                type: String,
                value: 'ナビミア',
                notify: true
            },
            textcolor: {
                type: String,
                value: 'green'
            }
        };
    }

    _placeName() {
        // var place = `${this.place}`;
        // var country = `${this.country}`;
        // var textcolor = `${this.textcolor}`;
        // var ex_array = [];
        // return ex_array = [place, country, textcolor];
        return `${this.place}, ${this.country}`;
    }

    static get template() {
        return html`<span style$="color: {{textcolor}}">[[_placeName()]]</span>`;
    }
}
customElements.define('data-view', DataView);