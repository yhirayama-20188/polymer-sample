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
import './components/custom-button';
import './components/custom-card';
import './components/image-card';
import './components/data-view';
import '../../good-map.js'

class MyView1 extends PolymerElement {
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
        <h1><data-view></data-view></h1>
        <p>ナミビア北部、エトーシャ・パンと呼ばれる乾いたソーダ湖を中心に広がる22,270㎢のアフリカでも有数の名公園｡パンの外側に草原、深いブッシュがあり植生も変化に富み、殆どの動物を見ることができますが、レイヨウ類は種類も数も多く、南部特有のオリックスやスプリング・ボックも見られます｡野鳥も豊富で325種という記録も｡広い園内は時速60kmという速度制限があり、タイプの違う4ヶ所の快適な宿泊＆キャンピング設備があります｡自然の水場が多くあり、そこに集まる動物を観察したり、夜間、ライトアップして観察できるところもあります。</p>
      </custom-card>

      <image-card bg-image="https://www.his-j.com/smp/test/images/Namib_Desert03.jpg">
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
