import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ImageCard extends PolymerElement {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
            }
            .img-card {
                margin: 24px;
                border-radius: 5px;
                background-color: #fff;
                background-repeat: no-repeat;
                background-size: cover;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
                            0 1px 5px 0 rgba(0, 0, 0, 0.12);
                            0 3px 1px -2px rgba(0, 0, 0, 0.2);
                padding: 200px 0 16px;
            }
        </style>

        <div class="img-card" style$="background-image: url({{bgImage}});">
            <slot></slot>
        </div>
        `;
    }
    static get properties() {
        return {
            bgImage: {
                type: String
            }
        };
    }
    constructor() {
        super();
    }
}

customElements.define('image-card', ImageCard);