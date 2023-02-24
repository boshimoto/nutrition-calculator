import {LitElement, html, css} from 'lit';
import {TargetElement} from './target-element/target-element.js';

export class ElectElement extends LitElement {
	static properties = {
		electData: { type: Array },
		storage: { type: Array }
	}

	constructor() {
		super();

		this.electData = []; // (1) [{...}]
		this.storage = [];

		this.addEventListener('click-subtract', (event) => {
			const name = event.detail.target;
			let test = this.storage.filter((object) => object.name === name); // (1) [{...}]
			console.log(test);
			// remove from storage: the value of test

			

			
			// this.electData[0].count--;
		});
	}

	static styles = css`
		:host {
			margin: 20px;
			border: 1px solid black;
			height: 200px;
		}
	`;

	willUpdate(changedProperties) {
		if (changedProperties.has('electData')) {
			if (!this.electData.length) {
				return;
			}

			if (!this.storage.includes(this.electData[0]))
				this.storage.push(this.electData[0]);
				// (2) [{...}, {...}]
		}
	}

	render() {
		return html`
		${
			this.storage.map((item) => {
				return html`
				<target-element name=${item.name}></target-element>
				`
			})
		}
		`;
	}
}

customElements.define('elect-element', ElectElement);