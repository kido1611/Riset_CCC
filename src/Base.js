import React from 'react';
import {indigo500, fullWhite} from 'material-ui/styles/colors';

class Base extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		const styles = {
			body: {
				fontFamily: 'Roboto, sans-serif',
				padding: '0px',
				margin: '0px',
				position: 'relative',
				minWidth: '320px',
			},
			header:{
				background: indigo500, 
				color: fullWhite,
				height: '140px',
			},
			headerContainer: {
				padding: '16px',
				width: '90%',
				margin: 'auto',
				maxWidth: '900px',
			},
			section: {
				padding: '16px',
				background: fullWhite, 
				width: '90%',
				maxWidth: '900px',
				margin: 'auto',
				marginTop: '-30px',
				boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)',
			},
			title: {
				fontSize: '42px',
				fontWeight: 'bold',
			},
			subtitle: {
				fontSize: '18px',
			}
		};
		return (
			<div style={styles.body}>
				<header style={styles.header}>
					<div style={styles.headerContainer}>
						<span style={styles.title}>CCC</span>
						<br/>
						<span style={styles.subtitle}>C Computer Club</span>
					</div>
				</header>
				<section style={styles.section}>
					Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia<br/>
					asdasd
				</section>
			</div>
		);
	}
}

export default Base;