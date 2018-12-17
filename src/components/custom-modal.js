import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { PolymerElement, html } from '@polymer/polymer';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { IronOverlayBehavior } from '@polymer/iron-overlay-behavior/iron-overlay-behavior.js';

class SampleElement extends mixinBehaviors(IronOverlayBehavior, PolymerElement) {
    static get template() {
        return html`
      <style>
        :host {
          background: white;
        }
      </style>
      <p>Overlay Content</p>
    `;
    }
}
customElements.define('sample-element', SampleElement);