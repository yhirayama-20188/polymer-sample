/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './components/custom-btton';
import './custom-card';
import './image-card';

class MyReferenceView extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <custom-card>
        <div class="circle">1.1</div>
        <h1>Wikipedia</h1>
        <ul>
            <li><a href="https://ja.wikipedia.org/wiki/Category:%E3%83%8A%E3%83%9F%E3%83%93%E3%82%A2%E3%81%AE%E5%9B%BD%E7%AB%8B%E5%85%AC%E5%9C%92">Category:ナミビアの国立公園</li>
        </ul>
      </custom-card>
      `;
    }
}

window.customElements.define('my-reference-view', MyReferenceView);
