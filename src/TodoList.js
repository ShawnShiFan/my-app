import React ,{Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css'


class TodoList extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this)

	}
	render(){
		return(
			<Fragment>
				{/* 这是一个注释*/}
				<div>
					<label htmlFor="insertArea">输入内容：</label>
					<input
						id="insertArea"
						className='input'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>

					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		);
	}

	getTodoItem(){
		return(
			this.state.list.map((item, index) =>{
				return(
					<TodoItem
						key={index}
						content={item}
						index={index}
						deleteItem={this.handleItemDelete}
					/>
				)
			})
		);


	}
	handleInputChange(e){
		/*	this.setState({
                inputValue: e.target.value
            })*/
		//新版语法 setstate里面可以接收一个函数 但是是异步操作，所以数据放外面先传进来
		const value = e.target.value;
		this.setState(() =>({
			//此处在es6中精简写法返回用括号代替return
			inputValue:value
		}))
	}

	handleBtnClick(){
		this.setState((prevState) =>({
			list:[...prevState.list,prevState.inputValue],
			inputValue:''
		}))
	}

	handleItemDelete(index){
		//immutable
		//state 不允许我们做任何的改变
		//如果实在要改变state中的值，那么可以复制一个副本出来修改副本
		//this.state.list.splice(index,1)  这种方式React是不允许这样操作的，性能优化问题
		this.setState((prevState) =>{
			const  list = [...prevState.list] //把list拷贝到
			list.splice(index,1);   //splice 删除index对应的1项
			return {list}
		});
	}

}



export default TodoList;