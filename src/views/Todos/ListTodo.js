import React from "react";
import './ListTodo.scss'
import './AddTodo'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: 'todo1', title: 'playing game' },
            { id: 'todo2', title: 'playing football' },
            { id: 'todo3', title: 'playing soccer' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodo;
        // currentListTodo.push(todo)
        // this.setState({
        //     listTodo: currentListTodo
        // })
        //(tuong duong) <=>

        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success('wowww')
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentTodo
        })
        toast.success('delete success')
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success('update success')
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })


    }
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodo, editTodo } = this.state; //<=> let lisTodo = this.state.listTodo
        let isEmptyObj = Object.keys(editTodo).length === 0
        console.log('checkk', isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-contents">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-chill" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>}

                                        </>
                                    }

                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {
                                            isEmptyObj === false && editTodo.id === item.id ?
                                                'save' : 'edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default ListTodo