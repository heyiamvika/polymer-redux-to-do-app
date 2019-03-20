import { LitElement, html, css } from 'lit-element';
import { store } from '../store';

export class ToDoItem extends LitElement {
    static get properties() {
        return {
            name: String,
            checked: Boolean,
            id: Number
        };
    }

    constructor() {
        super();
        this.itemHovered = false;
    }

    static get styles() {
        return [
            css`
        .wrapper {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .item-wrapper {
            width: 85%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            align-items: center;
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

        .delete-button {
            border: none;
            background-color: inherit;
            transform: rotate(45deg);
            outline: none;
            filter: grayscale(100%) opacity(25%);
        }

        .delete-button:hover {
            filter: none;
        }
        `
        ];
    }

    render() {
        return html`
        <div class="wrapper">
            <div class="item-wrapper" @click = ${this.clickItem}>
                    <span class="${this.checked ? "to-do-text to-do-text-checked" : "to-do-text to-do-text-unchecked"}">${this.name}</span>
                    <span class="${this.checked ? "to-do-checkbox to-do-checkbox-checked" : "to-do-checkbox to-do-checkbox-unchecked"}">
                        ${this.checked ? html`<img class="checkedIcon" src="../../images/checked.png" />` : html``}
                    </span>
            </div>
            <button class="delete-button" @click=${this.deleteItem}><img src="../../images/plus.png"/></button>
        </div>
            `
    }

    clickItem() {
        store.dispatch({ type: "TOGGLE_TODO", itemId: this.id });
    }

    deleteItem() {
        store.dispatch({ type: "DELETE_TODO", itemId: this.id });
    }
}

window.customElements.define('to-do-item', ToDoItem);