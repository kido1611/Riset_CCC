import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import axios from 'axios';

class Struktur extends React.Component{
	
	constructor(){
		super();
		this.state = {
			value: '',
			list: [],
			data: [],
		}
	}

	loadData(data){
		var _this = this;
		var tahun = data;
		console.log("Load data "+tahun);;
		axios.get('data/'+tahun+'.json')
			.then(function (response) {
				_this.setState({
					value: tahun, 
					data: response.data,
				});
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
				if(response.data.length>0)
					_this.loadData(response.data[response.data.length-1].tahun);
			})
			.catch(function (error) {
				console.log(error);
				_this.setState({
					value: '',
				});
			});
	}

	handleChange = (event, index, value) => {
		this.setState({value});
		this.loadData(value);
	}

	render(){
		return (
			
			(this.state.value!=='' && this.state.value!==0)?
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
					<div>
						<table>
							<tbody>
							{
								this.state.data.map((row, index) => (
									<tr key={index}>
										<td><b>{row.jabatan}</b></td>
										<td>:</td>
										{
											Object.prototype.toString.call(row.nama) !== '[object Array]' ? 
												<td>{row.nama}</td>
											:
												<td>
													{
														row.nama.map((row2, index2) => (
															<span key={index2}>{index2+1}. {row2.nama}<br/></span>
														))
													}
												</td>
										}
									</tr>
								))
							}
							</tbody>
						</table>
					</div>
				</div>
			:
				<div>
					<h1>Cannot load data</h1>
				</div>
		);
	}
}

export default Struktur;