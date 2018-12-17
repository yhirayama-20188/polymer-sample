import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ModalButton extends PolymerElement {
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
            images: {
                type: Array,
                value() {
                    return [
                        { src: 'https://www.his-j.com/smp/test/images/ex01.jpg' },
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert01.jpg' },
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert02.jpg' },
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert03.jpg' },
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert04.jpg' }
                    ];
                }
            }
        };
    }
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
            <div id="modal-box">
                <button type$="[[buttonType]]" name="button" on-click="handleModal">[[buttonText]]
                    <slot></slot>
                </button>
            </div>
        `;
    }
    constructor() {
        super();
    }
    handleModal() {
        this.clicked = !this.clicked;
        const modal_conts = document.createElement("div");
        modal_conts.id = "modal-conts"
        const modal_img = document.createElement("img");
        modal_img.src = "https://www.his-j.com/smp/test/images/Namib_Desert01.jpg";
        modal_conts.appendChild(modal_img);
        if (this.clicked) {
            document.body.appendChild(modal_conts);
        } else {
            const new_modal = document.getElementById('modal-conts');
            new_modal.parentNode.removeChild(new_modal);
        }
    }
}
customElements.define('modal-button', ModalButton);