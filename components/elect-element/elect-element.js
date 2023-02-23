import {LitElement, html, css} from 'lit';

export class ElectElement extends LitElement {
	static properties = {
		selected: { type: Object }
	}

	constructor() {
		super();

		this.selected = {};
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			<p>elect-element is here!</p>
		`;
	}
}

customElements.define('elect-element', ElectElement);