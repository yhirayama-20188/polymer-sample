define(["./my-app.js"],function(_myApp){"use strict";function _templateObject3_915f6620033111e99838aba3bdd79006(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"shared-styles\">\n        :host {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n                  flex-flow: row wrap;\n        }\n        #modal-conts {\n          z-index: 2;\n          width: 100%;\n        }\n        #modal-conts img {\n          width: 100%;\n        }\n      </style>\n\n      <library-card>\n      </library-card>\n    "]);_templateObject3_915f6620033111e99838aba3bdd79006=function _templateObject3_915f6620033111e99838aba3bdd79006(){return data};return data}function _templateObject2_915f6620033111e99838aba3bdd79006(){var data=babelHelpers.taggedTemplateLiteral(["\n            <style>\n                :host {\n                    display: block;\n                }\n                button {\n                    font-weight: 400;\n                    line-height: 1.25;\n                    border: 1px solid transparent;\n                    padding: .5rem 1rem;\n                    font-size: 1rem;\n                    border-radius: .25rem;\n                    background-color: var(--app-primary-color, blue);\n                    transition: all .2s ease-in-out;\n                    color: #fff;\n                }\n                :host([clicked]) button {\n                background-color: #666;\n                }\n                :host([clicked]) button:hover {\n                background-color: #666;\n                color: #fff;\n                }\n            </style>\n            <div id=\"modal-box\">\n                <button type$=\"[[buttonType]]\" name=\"button\" on-click=\"handleModal\">[[buttonText]]\n                    <slot></slot>\n                </button>\n            </div>\n        "]);_templateObject2_915f6620033111e99838aba3bdd79006=function _templateObject2_915f6620033111e99838aba3bdd79006(){return data};return data}function _templateObject_915f6620033111e99838aba3bdd79006(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style>\n            :host {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: horizontal;\n                -webkit-box-direction: normal;\n                -ms-flex-flow: row wrap;\n                        flex-flow: row wrap;\n                width: 100%;\n                margin: 0 3%;\n            }\n            :host([clicked]) .library-card {\n                background-color: #666;\n            }\n            .library-card {\n                width: 48.5%;\n                height: 40vh;\n                -webkit-box-sizing:border-box;box-sizing:border-box;\n                padding: 16px;\n                margin: 3% 0 0 0;\n                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);\n                            0 1px 5px 0 rgba(0, 0, 0, 0.12);\n                            0 3px 1px -2px rgba(0, 0, 0, 0.2);\n                border-radius: 5px;\n                background-color: #fff;\n                background-repeat: no-repeat;\n                background-size: cover;\n            }\n            .library-card:nth-child(2n) {\n                margin-right: 3%;\n            }\n            @media screen and (max-width: 768px) {\n                .library-card {\n                    width: 100%;\n                }\n                .library-card:nth-child(2n) {\n                    margin-right: initial;\n                }\n            }\n        </style>\n\n        <template is=\"dom-repeat\" items=\"{{images}}\">\n            <div class=\"library-card\" style=\"background-image: url([[item.src]])\">\n                <modal-button\n                    button-text=\"This is Modal\"\n                    button-type=\"button\" on-click=\"modal\"># [[index]]</modal-button>\n            </div>\n        </template>\n        "]);_templateObject_915f6620033111e99838aba3bdd79006=function _templateObject_915f6620033111e99838aba3bdd79006(){return data};return data}var LibraryCard=function(_PolymerElement){babelHelpers.inherits(LibraryCard,_PolymerElement);babelHelpers.createClass(LibraryCard,null,[{key:"is",get:function get(){return"library-card"}},{key:"properties",get:function get(){return{images:{type:Array,value:function value(){return[{src:"https://www.his-j.com/smp/test/images/ex01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert02.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert03.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert04.jpg"}]}}}}},{key:"template",get:function get(){return(0,_myApp.html)(_templateObject_915f6620033111e99838aba3bdd79006())}}]);function LibraryCard(){babelHelpers.classCallCheck(this,LibraryCard);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LibraryCard).call(this))}return LibraryCard}(_myApp.PolymerElement);customElements.define("library-card",LibraryCard);var ModalButton=function(_PolymerElement2){babelHelpers.inherits(ModalButton,_PolymerElement2);babelHelpers.createClass(ModalButton,null,[{key:"properties",get:function get(){return{clicked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},buttonText:{type:String},buttonType:{type:String},images:{type:Array,value:function value(){return[{src:"https://www.his-j.com/smp/test/images/ex01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert01.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert02.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert03.jpg"},{src:"https://www.his-j.com/smp/test/images/Namib_Desert04.jpg"}]}}}}},{key:"template",get:function get(){return(0,_myApp.html)(_templateObject2_915f6620033111e99838aba3bdd79006())}}]);function ModalButton(){babelHelpers.classCallCheck(this,ModalButton);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ModalButton).call(this))}babelHelpers.createClass(ModalButton,[{key:"handleModal",value:function handleModal(){this.clicked=!this.clicked;var modal_conts=document.createElement("div");modal_conts.id="modal-conts";var modal_img=document.createElement("img");modal_img.src="https://www.his-j.com/smp/test/images/Namib_Desert01.jpg";modal_conts.appendChild(modal_img);if(this.clicked){document.body.appendChild(modal_conts)}else{var new_modal=document.getElementById("modal-conts");new_modal.parentNode.removeChild(new_modal)}}}]);return ModalButton}(_myApp.PolymerElement);customElements.define("modal-button",ModalButton);var MyView2=function(_PolymerElement3){babelHelpers.inherits(MyView2,_PolymerElement3);function MyView2(){babelHelpers.classCallCheck(this,MyView2);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MyView2).apply(this,arguments))}babelHelpers.createClass(MyView2,null,[{key:"template",get:function get(){return(0,_myApp.html)(_templateObject3_915f6620033111e99838aba3bdd79006())}}]);return MyView2}(_myApp.PolymerElement);window.customElements.define("my-view2",MyView2)});