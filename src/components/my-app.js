/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';
import { store } from '../store';

import './to-do-item';
import './to-do-button';

class MyApp extends LitElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      css`
      .box {
        width: 100%;
        height: 100vh;
        padding: 60px;
        background-color: beige;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .content-box {
        width: 700px;
        height: 1296px;
        background-color: white;
        padding: 122px 105px;
        display: flex;
        flex-direction: column;
      }

      .button {
        margin-top: -90px;
      }
      `
    ];
  }

  render() {
    // console.log('store Added', store.getState().map(item => item.checked ? "checked" : "unchecked"));
    const toDoS = store.getState().map(item => html`<to-do-item name=${item.name} .checked="${item.checked}"></to-do-item>`);

    // Anything that's related to rendering should be done in here.
    return html`
      <div class="box">
        <div class="content-box">
          ${toDoS}
        </div>
        <div class="button">
          <to-do-button></to-do-button>
        </div>
      </div>
    `
  }
}

window.customElements.define('my-app', MyApp);
