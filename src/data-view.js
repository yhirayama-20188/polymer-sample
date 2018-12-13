import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './my-view.js';

class DataView extends PolymerElement {
    static get properties() {
        return {
            user: {
                type: Object,
                value: function () { return { given: "San", family: "Zhang" }; }
            }
        };
    }
    static get template() {
        return html`
      <user-view given="{{user.given}}" family="{{user.family}}"></user-view>
    `;
    }
}
customElements.define('data-view', DataView);