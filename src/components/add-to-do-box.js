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
                width: 500px;
                height: 250px;
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
                padding: 80px 20px 60px 20px;
                box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
            }

            .close-button {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 20px;
                right: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                background-color: inherit;
            }

            .close-button img {
                width: inherit;
                height: inherit;
                transform: rotate(45deg);
            }

            .user-input {
                width: 80%;
                height: 40%;
                border: 2px solid #eef0f5;
                font-size: 23px;
                font-weight: 400;
                font-family: "Gotham-Rounded-Book", Helvetica, Arial, sans-serif;
                color: #3e434f;
                padding: 20px 10px;
            }

            .user-input:focus {
                outline: none;
                border: 2px solid #50e3a4;
            }

            .add-button {
                min-width: 30%;
                height: 20%;
                background-color: #50e3a4;
                border: none;
                border-radius: 30px;
                box-shadow: 0 6px 15px rgba(207, 211, 218, 0.35);
                font-size: 23px;
                font-weight: 400;
                font-family: "Gotham-Rounded-Book", Helvetica, Arial, sans-serif;
                color: #3e434f;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .add-button:hover {
                color: #bdc0ca;
            }

        `
        ];
    }

    render() {
        // Anything that's related to rendering should be done in here.
        return html`
         <div class="box">
            <button class="close-button"><img src="../../images/plus.png"/></button>
            <input class="user-input" type="text">
            <button class="add-button" @click=${this.addNewToDo}>Add To Do</button>
         </div>
      `
    }

    addNewToDo() {
        store.dispatch({ type: "ADD_TODO", text: "This is a text" });
    }
}

window.customElements.define('add-to-do-box', AddToDoBox);