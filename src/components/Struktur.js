import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class Struktur extends React.Component{
	
	constructor(){
		super();
		this.state = {
			value: 2016,
		}
	}

	handleChange = (event, index, value) => {
		this.setState({value});
	}

	render(){
		return (
			<div>
				<SelectField
					floatingLabelText="Struktur Pengurus"
					value={this.state.value}
					fullWidth={true}
					onChange={this.handleChange} >
					<MenuItem value={2015} primaryText="2015-2016" />
					<MenuItem value={2016} primaryText="2016-2017" />
					<MenuItem value={2017} primaryText="2017-2018" />
				</SelectField>
			</div>
		);
	}
}

export default Struktur;