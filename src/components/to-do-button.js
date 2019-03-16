import { LitElement, html, css } from 'lit-element';
// import plus from '../../images/plus.png';

export class ToDoButton extends LitElement {
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
            }
        `
        ];
    }

    render() {
        // Anything that's related to rendering should be done in here.
        return html`
         <div class="button">
         </div>
      `
    }

    constructor() {
        super();
    }
}

window.customElements.define('to-do-button', ToDoButton);