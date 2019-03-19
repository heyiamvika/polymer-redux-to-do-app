import { LitElement, html, css } from 'lit-element';
import { store } from '../store';

export class ToDoButton extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
        };
    }

    static get styles() {
        return [
            css`
            .button {
                width: 180px;
                height: 180px;
                border-radius: 50%;
                background-color: #50e3a4;
                box-shadow: 0 3px 10px rgba(62, 192, 136, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `
        ];
    }

    render() {
        // Anything that's related to rendering should be done in here.
        return html`
         <div class="button">
            <img src="../../images/plus.png"/>
         </div>
      `
    }
}

window.customElements.define('to-do-button', ToDoButton);