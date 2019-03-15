import  React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
//组件被更新之间被自动执行 false不执行使子组件可以不更新
    //提高组件性能
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content!== this.props.content){
            return true;
        }else {
            return false;
        }

    }

    render(){
        const { content } =this.props ;
        //JSX -> createElement ->JS对象 ->真实的DOM
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }



    handleClick(){
        const  { deleteItem ,index} = this.props;
        deleteItem(index);
    }


}

TodoItem.propTypes ={
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}



export  default  TodoItem;