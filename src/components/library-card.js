import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

class LibraryCard extends PolymerElement {
    static get is() {
        return 'library-card';
    }
    static get properties() {
        return {
            images: {
                type: Array,
                value() {
                    return [
                        { src: 'https://www.his-j.com/smp/test/images/ex01.jpg'},
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert01.jpg'},
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert02.jpg'},
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert03.jpg'},
                        { src: 'https://www.his-j.com/smp/test/images/Namib_Desert04.jpg'}
                    ];
                }
            }
        };
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
                width: 100%;
                margin: 0 3%;
            }
            .library-card {
                width: 48.5%;
                height: 40vh;
                -webkit-box-sizing:border-box;box-sizing:border-box;
                padding: 16px;
                margin: 3% 0 0 0;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
                            0 1px 5px 0 rgba(0, 0, 0, 0.12);
                            0 3px 1px -2px rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                background-color: #fff;
                background-repeat: no-repeat;
                background-size: cover;
            }
            .library-card:nth-child(2n) {
                margin-right: 3%;
            }
            @media screen and (max-width: 768px) {
                .library-card {
                    width: 100%;
                }
                .library-card:nth-child(2n) {
                    margin-right: initial;
                }
            }
        </style>

        <template is="dom-repeat" items="{{images}}">
            <div class="library-card" style="background-image: url([[item.src]])"><br/># [[index]]</div>
        </template>
        `;
    }
    constructor() {
        super();
    }
}

customElements.define('library-card', LibraryCard);