import React, { Component } from 'react';
import Task from './Task' 
import tStore from './tStore';
import TaskForm from './TaskForm';
import {observer} from 'mobx-react';

@observer
export default class App extends Component {

	handleTaskStartEdit = taskId => {
		tStore.EditTask(taskId);
	};
	
	handleTaskStopEdit = () => {
		tStore.EditTask(null);
	};
	
	componentDidMount = () => {
    tStore.loadTasks()
	};

	renderForm(){
		return (
			<div>
				<h1>Todo</h1>
        <h2>TODO APP</h2>
				<TaskForm tStore = {tStore} />
			</div>
		)
	}

	renderList(){
		return (
      <div>
			<ul className='tasks'>
					{
						tStore.tasks.map(item => 
						<Task 
							key={item.id} 
							id={item.id} 
							tStore = {tStore}
							isEditing={item.id === tStore.editingId}
							onStartEdit={this.handleTaskStartEdit}
							onStopEdit={this.handleTaskStopEdit}
						/>)
					}
				</ul>
        <h2 className='counter'>Tasks Counter = {tStore.Count}</h2>
        </div>
		)
	}
	
  
  render() {

		if(tStore.loadingTasks){
			return (
				<div>
					{this.renderForm()}
				</div>
			)
		}
		else{
			if(tStore.tasks.length === 0){
				return (
				<div>
					{this.renderForm()}
					<div>No items...</div>
				</div>
				)
			}
			else{
				return (
					<div>
						{this.renderForm()}
						{this.renderList()}
					</div>
					)
			}
		}
	
		
  }
}