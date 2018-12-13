import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CustomButton extends PolymerElement {
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
                    color: #fff;
                    background-color: var(--app-primary-color, blue);
                    transition: all .2s ease-in-out;
                }
                :host([clicked]) button {
                background-color: #666;
                }
                :host([clicked]) button:hover {
                background-color: #666;
                color: #fff;
                }
            </style>
            <button type$="[[buttonType]]" name="button">[[buttonText]]</button>
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
        this.addEventListener('click', this.toggle.bind(this));
    }
    toggle() {
        this.clicked = !this.clicked;
    }
}
customElements.define('custom-button', CustomButton);