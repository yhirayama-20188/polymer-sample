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
import './components/custom-card';
import './components/custom-button';
import './components/custom-modal';
import '../../good-map.js'

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        good-map {
          display: block;
          height: 400px;
        }
      </style>

      <custom-card>
        <div class="circle">3</div>
        <h1>行き方</h1>
        <h2>どこにある？</h2>
        <p>ウィントフック</p>
        <p>ウィントフック（アフリカーンス語: Windhoek）は、ナミビアの首都[3]。ドイツ語読みのヴィントフック (Windhuk) と表記されることもある。ナマ語ではǀAiǁgams、ヘレロ語ではOtjomuiseという。(Wikipediaより)</p>
        <good-map api-key="AIzaSyAQuo91bcoB-KwWXaANroTrzpNZRFcNJ1k"></good-map>
      </custom-card>

      <custom-card>
        <h2>フライトルート</h2>
        <p>成田 or 羽田空港　⇒（ドーハ乗り継ぎ）⇒　ウィントフック</p>
        <p>・カタール航空。直行便はないのでカタール航空を利用した場合は、ドーハ乗り継ぎとなる。航空会社の格付け調査を行なう英国のスカイトラックスでは、2018年の世界のベストエアライン「エアライン・オブ・ザ・イヤー2018」においてカタール航空を2位と順位付けしているためサービス面では心配いらないだろう。</p>
        <custom-button
          button-text="カタール航空利用・ウィントフック行き航空券を検索"
          button-type="button"></custom-button>
        <p>アフリカの他の国にも行ってみたいという人はケープタウン（南アフリカ）経由のルートも考えられる。</p>
        <p>成田 or 羽田空港　⇒　ケープタウン　⇒　ウィントフック</p>
        <p>上のルートで検索すると上手く検索結果が返ってこないので下のように取ればよい。</p>
        <p>成田 or 羽田空港　⇔　ケープタウン</p>
        <p>ケープタウン　⇔　ウィントフック</p>
        <p>・ケープタウンまでは乗り継ぎが一回だとシンガポール航空、カタール航空、エミレーツ航空といった選択になるだろう。先に述べた「エアライン・オブ・ザ・イヤー2018」においてはシンガポール航空が1位、エミレーツ航空が4位となっている。乗り継ぎが2回以上になれば先に挙げたフライトよりも価格を抑えた便が見つかるかもしれません。</p>
        <p>さらに安い方法を検討するならケープタウン　⇔　ウィントフック間をバスで移動することもできるが、予約代行はないので基本的に現地で個人での手配になるだろう。</p>
      </custom-card>

      <custom-card>
        <h2>陸路（ウィントフック　⇔　エトーシャ国立公園）</h2>
      </custom-card>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
