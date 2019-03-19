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

        .to-do-text {
            font-size: 33px;
            font-weight: 400;
            font-family: "Gotham-Rounded-Book", Helvetica, Arial, sans-serif;
            line-height: 88px;
        }

        .to-do-text-unchecked {
            color: #3e434f;
        }

        .to-do-text-checked {
            color: #bdc0ca;
        }

        .to-do-checkbox {
            width: 59px;
            height: 59px;
            border: 7px solid;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .to-do-checkbox-unchecked {
            border-color: #eef0f5;
        }

        .to-do-checkbox-checked {
            border-color: #50e3a4;
        }
        `
        ];
    }

    render() {
        // Anything that's related to rendering should be done in here.
        return html`
            <div class="wrapper">
                 <span class="${this.checked ? "to-do-text to-do-text-checked" : "to-do-text to-do-text-unchecked"}" @click=${this.clickItem}>${this.name}</span>
                 <span class="${this.checked ? "to-do-checkbox to-do-checkbox-checked" : "to-do-checkbox to-do-checkbox-unchecked"}" @click=${this.clickItem}>
                    ${this.checked ? html`<img class="checkedIcon" src="../../images/checked.png" />` : html``}
                 </span>
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