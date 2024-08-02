import React from "react";
import { withRouter } from "react-router";
import logo from '../../assets/images/v2-c2bc308ed73d97e1c27b8be03d73781c_r.jpg';
import { connect } from "react-redux";
class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDelete = (user) => {
        console.log('check delete', user);
        this.props.deleteUserRedux(user);
    }
    handleAdd = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log('check props', this.props)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div> hello form home</div>
                <div><img width="200px" src={logo} /></div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <button type="button" onClick={() => this.handleDelete(item)}>x</button>
                                </div>
                            )
                        })
                    }
                    <button type="button" onClick={() => this.handleAdd()}>Add</button>

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER', }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));