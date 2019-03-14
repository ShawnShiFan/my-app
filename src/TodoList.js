import React ,{Fragment} from 'react';

class TodoList extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}

	}

		render(){
			return(
				<Fragment>
						<div>
						<input 
						value={this.state.inputValue}
						onChange={this.handleInputChange.bind(this)}
						 />
						
						<button onClick={this.handleBtnClick.bind(this)}>提交</button>
						</div>
				 <ul>
				 	{this.state.list.map((item, index) =>{
				 		return <li 
						 		key={index} 
						 		onClick={this.handleItemDelete.bind(this, index)}
						 		>
						 		{item}
						 		</li>
				 	})}
				 </ul>
				</Fragment>
				);
		}


		handleInputChange(e){
			this.setState({
				inputValue: e.target.value
			})
		}
		
		handleBtnClick(){
			this.setState({
				list:[...this.state.list,this.state.inputValue],
				inputValue:''
			})
		}

		handleItemDelete(index){
				//immutable
				//state 不允许我们做任何的改变
				//如果实在要改变state中的值，那么可以复制一个副本出来修改副本
				const list = [...this.state.list]; //把list拷贝到
				list.splice(index,1);   //splice 删除index对应的1项
				//this.state.list.splice(index,1)  这种方式React是不允许这样操作的，性能优化问题
				this.setState({
					list: list
				})

		}


	}



export default TodoList;