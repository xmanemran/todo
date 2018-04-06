import React, {Component} from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem'

export default class Todo extends Component{
	constructor(props) {
		super(props);
	}
	
	
	render(){
		const {todos, done} = this.props;
		
		return (
			<FlatList style={{flex: 1}} data={todos} renderItem={(todo)=>{
				return <TodoItem todo={todo} done={done}/>
			}}/>
		)
	}
}