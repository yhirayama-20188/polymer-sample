import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ModalButton extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
                button {
                    font-weight: 400;
                    line-height: 1.25;
                    border: 1px solid transparent;
                    padding: .5rem 1rem;
                    font-size: 1rem;
                    border-radius: .25rem;
                    background-color: var(--app-primary-color, blue);
                    transition: all .2s ease-in-out;
                    color: #fff;
                }
                :host([clicked]) button {
                background-color: #666;
                }
                :host([clicked]) button:hover {
                background-color: #666;
                color: #fff;
                }
            </style>
            <button type$="[[buttonType]]" name="button" on-click="handleClick">[[buttonText]]
                <slot></slot>
            </button>
        `;
    }
    static get properties() {
        return {
            clicked: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true
            },
            buttonText: {
                type: String
            },
            buttonType: {
                type: String
            },
        };
    }
    constructor() {
        super();
        //this.addEventListener('click', this.modal.bind(this));
    }
    // modal() {
    //     this.clicked = !this.clicked;
    // }
    handleClick() {
        const div = document.createElement("div");
        const text = document.createTextNode("こんにちは!");
        div.appendChild(text);
        this.appendChild(div);
    }
}
customElements.define('modal-button', ModalButton);