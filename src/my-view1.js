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

class MyView1 extends PolymerElement {
  static get properties() {
    return {
      data: {
        type: Object,
        value: function() {
          return {
            place: "エトーシャ国立公園 ナミビア"
          };
        }
      }
    };
  }
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
        <h1>{{data.place}} とは</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
        <custom-button
          button-text="Click Me!"
          button-type="button"></custom-button>
      </custom-card>

      <image-card>
        <custom-card>
          <div class="circle">1.2</div>
          <h1>View One-2</h1>
          <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
          <custom-button
            button-text="Click Me!"
            button-type="button"></custom-button>
        </custom-card>
      </imgae-card>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
