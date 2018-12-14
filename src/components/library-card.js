import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class LibraryCard extends PolymerElement {
    static get is() {
        return 'library-card';
    }
    static get template() {
        return html`
        <style>
            :host {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -ms-flex-flow: row wrap;
                        flex-flow: row wrap;
                width: 50%;
                -webkit-box-sizing:border-box;box-sizing:border-box;
                padding: 16px;
                height: 30vh;
            }
            .library-card {
                width: 100%;
                border-radius: 5px;
                background-color: #fff;
                background-image: url(https://www.his-j.com/smp/test/images/ex01.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
                            0 1px 5px 0 rgba(0, 0, 0, 0.12);
                            0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }
        </style>

        <div class="library-card">ライブラリーカード</div>
        `;
    }
    constructor() {
        super();
    }
}

customElements.define('library-card', LibraryCard);