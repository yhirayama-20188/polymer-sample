import{PolymerElement,html}from"./my-app.js";class LibraryCard extends PolymerElement{static get is(){return"library-card"}static get properties(){return{images:{type:Array,value(){return[{src:"https://www.his-j.com/smp/test/images/ex01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert02.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert03.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert04.jpg"}]}}}}static get template(){return html`
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
            :host([clicked]) .library-card {
                background-color: #666;
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
            <div class="library-card" style="background-image: url([[item.src]])">
                <modal-button
                    button-text="This is Modal"
                    button-type="button" on-click="modal"># [[index]]</modal-button>
            </div>
        </template>
        `}constructor(){super()}}customElements.define("library-card",LibraryCard);class ModalButton extends PolymerElement{static get properties(){return{clicked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},buttonText:{type:String},buttonType:{type:String},images:{type:Array,value(){return[{src:"https://www.his-j.com/smp/test/images/ex01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert02.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert03.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert04.jpg"}]}}}}static get template(){return html`
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
        `}constructor(){super()}handleModal(){this.clicked=!this.clicked;const modal_conts=document.createElement("div");modal_conts.id="modal-conts";const modal_img=document.createElement("img");modal_img.src="https://www.his-j.com/smp/test/images/Namib_Desert01.jpg";modal_conts.appendChild(modal_img);if(this.clicked){document.body.appendChild(modal_conts)}else{const new_modal=document.getElementById("modal-conts");new_modal.parentNode.removeChild(new_modal)}}}customElements.define("modal-button",ModalButton);class MyView2 extends PolymerElement{static get template(){return html`
      <style include="shared-styles">
        :host {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
                  flex-flow: row wrap;
        }
        #modal-conts {
          z-index: 2;
          width: 100%;
        }
        #modal-conts img {
          width: 100%;
        }
      </style>

      <library-card>
      </library-card>
    `}}window.customElements.define("my-view2",MyView2);