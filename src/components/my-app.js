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
import './add-to-do-box';

class MyApp extends LitElement {
  constructor() {
    super();
    this.currentDate = new Date();
    this.lightboxOpen = false;
  }

  static get properties() {
    return {
    };
  }

  static get styles() {
    return [
      css`
      .box {
        width: 100%;
        min-height: 100vh;
        padding: 60px;
        background-color: beige;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
      }

      .content-box {
        width: 700px;
        background-color: white;
        padding: 122px 105px 192px 105px;
        display: flex;
        flex-direction: column;
      }

      .date-box {
        width: 100%;
        min-height: 55px;
        margin-bottom: 125px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .day-of-the-week {
        text-transform: uppercase;
        color: #616473;
        font-size: 26px;
        font-weight: 500;
        line-height: 80px;
        font-family: "Gotham-Rounded-Book", Helvetica, Arial, sans-serif;
      }

      .button {
        position: relative;
        bottom: 90px;
        margin-left: auto;
        margin-right: auto;
      }
      `
    ];
  }

  render() {
    const toDoS = store.getState().map(item => html`<to-do-item name=${item.name} .checked="${item.checked}"></to-do-item>`);

    // Anything that's related to rendering should be done in here.
    return html`
      <div class="box">
        <div class="content-box">
          <div class="date-box">
            <span class="date"></span>
            <span class="day-of-the-week">${this.getDayOfTheWeek()}</span>
          </div>
          ${toDoS}
        </div>
        <div class="button">
            <to-do-button @click=${this.openCloseLightbox}></to-do-button>
        </div>
        ${this.lightboxOpen ? html`<add-to-do-box></add-to-do-box>` : html``}; 
      </div>
    `
  }

  openCloseLightbox() {
    console.log(this.lightboxOpen);
    this.lightboxOpen = !this.lightboxOpen;
    console.log(this.lightboxOpen);
  }

  getDayOfTheWeek() {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const thisDay = this.currentDate.getDay();
    return weekdays[thisDay];
  }
}

window.customElements.define('my-app', MyApp);
