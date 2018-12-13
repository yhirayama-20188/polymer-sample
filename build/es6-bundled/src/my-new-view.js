define(["./my-app.js"],function(_myApp){"use strict";class MyNewView extends _myApp.PolymerElement{static get template(){return _myApp.html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <custom-card>
        <div class="circle">New</div>
        <h1>New View</h1>
        <p>New View.</p>
        <custom-button 
          button-text="Click Me!" 
          button-type="button"></custom-button>
      </custom-card>
    `}}window.customElements.define("my-new-view",MyNewView)});