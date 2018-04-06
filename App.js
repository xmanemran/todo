import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';

import Todos from './app/component/Todos';

export default class App extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			todos: [
				{
					id: 1,
					title: 'React native workshop',
					subTitle: 'Strativ',
					isDone: false
				},
				{
					id: 2,
					title: 'Learn javascript es6',
					subTitle: 'from udemy',
					isDone: false
				},
				{
					id: 3,
					title: 'Clone this project',
					subTitle: 'from github',
					isDone: false
				}
			]
		}
	}
	
	
	done(id){
		console.log(this.state.todos);
		let {todos} = this.state;
		todos[id-1].isDone = !todos[id-1].isDone ;
		this.setState({todos});
	}
	
	render() {
		
		const {todos} = this.state;
		
		return (
			<View style={{margin : 30, flex:1 }}>
				<Todos todos={todos} done={(id)=>this.done(id)}/>
			</View>
		);
	}
}