import { LitElement, html, css } from 'lit-element';
import { store } from '../store';

export class ToDoItem extends LitElement {
    static get properties() {
        return {
            name: String,
            checked: Boolean
        };
    }

    constructor() {
        super();
    }

    static get styles() {
        return [
            css`
        .wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .to-do-text-unchecked {
            color: #3e434f;
            font-size: 33px;
            font-weight: 400;
            line-height: 80px;
            font-family: "Gotham Rounded - Book";
        }

        .to-do-text-checked {
            color: #bdc0ca;
            font-size: 33px;
            font-weight: 400;
            line-height: 80px;
            font-family: "Gotham Rounded - Book";
        }


        .to-do-checkbox-unchecked {
            width: 59px;
            height: 59px;
            border: 7px solid #eef0f5;
            border-radius: 50%;
        }

        .to-do-checkbox-checked {
            width: 59px;
            height: 59px;
            border: 7px solid #50e3a4;
            border-radius: 50%;
        }
        `
        ];
    }

    render() {
        // Anything that's related to rendering should be done in here.
        return html`
            <div class="wrapper">
                 <span class="${this.checked ? "to-do-text-checked" : "to-do-text-unchecked"}" @click=${this.clickItem}>${this.name}</span>
                 <span class="${this.checked ? "to-do-checkbox-checked" : "to-do-checkbox-unchecked"}" @click=${this.clickItem}></span>
            </div>
            `
    }


    clickItem(event) {
        this.checked ?
            store.dispatch({ type: "UNCHECK_TODO" }) :
            store.dispatch({ type: "CHECK_TODO" })
    }
}

window.customElements.define('to-do-item', ToDoItem);