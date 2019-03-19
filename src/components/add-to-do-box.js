import { LitElement, html, css } from 'lit-element';
import { store } from '../store';

export class AddToDoBox extends LitElement {
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
            .box {
                width: 600px;
                height: 400px;
                background-color: #ffffff;
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                top: 250px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 60px 20px;
                box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
            }

            .user-input {
                width: 80%;
                height: 70%;
                border: 2px solid #50e3a4;
            }

            .add-button {
                width: 30%;
                height: 20%;
                background-color: #50e3a4;
                border: none;
                border-radius: 30px;
                box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
            }
        `
        ];
    }

    render() {
        // Anything that's related to rendering should be done in here.
        return html`
         <div class="box">
             <input class="user-input" type="text">
             <button class="add-button" @click=${this.addNewToDo}>Add To Do</button>
         </div>
      `
    }

    addNewToDo() {
        store.dispatch({ type: "ADD_TODO" });
    }
}

window.customElements.define('add-to-do-box', AddToDoBox);