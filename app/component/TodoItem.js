import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class TodoItem extends Component{
	
	constructor(props){
		super(props)
	}
	
	render(){
		
		const {done, todo} = this.props;
		
		const {id, title, subTitle, isDone} = todo.item;
		return (
			<TouchableOpacity
				onPress={()=>done(id)}
				style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 22}}>
				
				<View style={{
					backgroundColor: isDone ? '#a5ff97' : '#FFF',
					width: 30,
					height: 30,
					borderColor: '#EEE',
					borderWidth: 1,
					borderRadius: 20
				}}></View>
				<View style={{paddingLeft: 10}}>
					<Text style={{fontSize: 18, color: '#333'}}>{`${title}`}</Text>
					<Text style={{fontSize: 15, fontWeight: '200', color: '#999'}}>{subTitle}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}