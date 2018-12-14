import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

// class DataTitle extends PolymerElement {
//     static get properties() {
//         return {
//             title1: "エトーシャ国立公園 ナミビア",
//             title2: "ライブラリー",
//             title3: "行き方",
//             title4: "プラン",
//             title5: "参考"
//         };
//     }

//     _formatName(title1, title2, title3, title4, title5) {
//         return `${title1}, ${title2}, ${title3}, ${title4}, ${title5}`;
//     }

//     static get template() {
//         return html`
//       My name is <span>[[_formatName(title1, title2, title3, title4, title5)]]</span>
//     `;
//     }
// }
// customElements.define('data-title', DataTitle);

class XCustom extends PolymerElement {
    static get is() {
        return 'x-custom';
    }
    static get properties() {
        return {
            given: "John",
            family: "Taylor"
        };
    }

    _formatName(given, family) {
        return `${this.family}, ${this.given}`;
    }

    static get template() {
        return html`
      My name is <span>[[_formatName(given, family)]]</span>
    `;
    }
}
customElements.define('x-custom', XCustom);