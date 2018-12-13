import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DataView extends PolymerElement {
    static get properties() {
        return {
            data: {
                type: Object,
                value: function () { return {
                    place: "エトーシャ国立公園 ナミビア"
                }; }
            }
        };
    }
    static get template() {
        return html`{{data.place}}`;
    }
}
customElements.define('data-view', DataView);