import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('missing')
            return;
        }
        console.log('check state', this.state)
        this.props.addNewJod({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Title:</label> <br />
                <input type="text" value={this.state.title}
                    onChange={(event) => this.handleTitle(event)}
                /> <br />
                <label htmlFor="lname">Salary:</label> <br />
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleSalary(event)}
                /> <br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }

}

export default AddComponent;