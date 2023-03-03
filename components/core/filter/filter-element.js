import {LitElement, html, css} from 'lit';
import {FilterByElement} from './filter-by/filter-by-element.js';

export class FilterElement extends LitElement {
	static styles = css`
		:host {
			margin: 10px;
			border: 1px solid black;
		}
	`;

	static properties = {
		searchValue: { type: String }
	}

	constructor() {
		super();
		this.data = [];
	}

	render() {
		return html`
			${this.data.map(
				(object) => {
					return html`
						<filter-by-element group=${object.group} searchValue=${this.searchValue}></filter-by-element>
					`
				})
			}
		`;
	}
}

customElements.define('filter-element', FilterElement);