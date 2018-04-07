import React from 'react';

import { getFunName } from '../helpers';

export class StorePicker extends React.Component {
	storeNameInput = React.createRef();

	goToStore = event => {
		event.preventDefault();
		const storeName = this.storeNameInput.current.value;
		this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return (
			<form action="" className="store-selector" onSubmit={ this.goToStore }>
				<h2>Please Enter a Store</h2>
				<input
					ref={ this.storeNameInput }
					type="text"
					required
					placeholder="Store Name"
					defaultValue={ getFunName() }
				/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}