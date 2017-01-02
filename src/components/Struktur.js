import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import axios from 'axios';

class Struktur extends React.Component{
	
	constructor(){
		super();
		this.state = {
			value: 0,
			list: [],
		}
	}

	loadData(data){
		var _this = this;
		var tahun = data;
		console.log("Load data "+tahun);;
		axios.get('/data/'+tahun+'.json')
			.then(function (response) {
				_this.setState({
					value: tahun, 
				});
				console.log(response);
			})
			.catch(function (error) {
				console.log(error.response);
			});
	}

	componentWillMount(){
		var _this = this;
		axios.get('data/list.json')
			.then(function (response) {
				_this.setState({
					list: response.data,
				});
				_this.loadData(response.data[response.data.length-1].tahun);
			})
			.catch(function (error) {
				console.log(error);
				_this.setState({
					value: 0,
				});
			});
	}

	handleChange = (event, index, value) => {
		this.setState({value});
		this.loadData(value);
	}

	render(){
		return (
			
			this.state.value!==0 ?
				<div>
					<SelectField
						floatingLabelText="Struktur Pengurus"
						value={this.state.value}
						fullWidth={true}
						onChange={this.handleChange} >
						{
							this.state.list.map(item => (
								<MenuItem value={item.tahun} primaryText={item.tahun+"-"+(item.tahun+1)} key={item.tahun} />
							))
						}
					</SelectField>
				</div>
			:
				<div>
					<h1>Cannot load data</h1>
				</div>
		);
	}
}

export default Struktur;