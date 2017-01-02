import React from 'react';
import {indigo500, pink500, fullWhite} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class Base extends React.Component{
	// constructor(props){
	// 	super(props);

	// }

	render(){
		const styles = {
			body: {
				fontFamily: 'Roboto, sans-serif',
				padding: '0px',
				margin: '0px',
				position: 'relative',
				minWidth: '300px',
			},
			header:{
				background: indigo500, 
				color: fullWhite,
				height: '160px',
			},
			headerContainer: {
				padding: '16px',
				width: '90%',
				margin: 'auto',
				maxWidth: '900px',
			},
			container: {
				background: fullWhite, 
				width: '90%',
				maxWidth: '900px',
				margin: 'auto',
				marginTop: '-30px',
			},
			section: {
				padding: '16px',
			},
			title: {
				fontSize: '56px',
				fontWeight: 'bold',
			},
			subtitle: {
				fontSize: '24px',
			},
			tab: {
				background: pink500,
			},
			inkBar: {
				backgroundColor: indigo500, 
			}
		};
		return (
			<MuiThemeProvider>
				<div style={styles.body}>
					<header style={styles.header}>
						<div style={styles.headerContainer}>
							<span style={styles.title}>CCC</span>
							<br/>
							<span style={styles.subtitle}>C Computer Club</span>
						</div>
					</header>
					<Paper style={styles.container} zDepth={2}>
						<Tabs inkBarStyle={styles.inkBar}>
							<Tab label="Home" style={styles.tab}>
								<div style={styles.section}>
								<h2 >Tab One</h2>
								<p>
								Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia Halo Dunia<br/>
						asdasd
								</p>
								<p>
								You can put any sort of HTML or react component in here. It even keeps the component state!
								</p>
								</div>
							</Tab>
							<Tab label="Struktur Organisasi" style={styles.tab}>
								<div style={styles.section}>
								<h2>Tab Two</h2>
								<p>
								This is another example tab.
								</p>
								</div>
							</Tab>
						</Tabs>
					</Paper>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Base;