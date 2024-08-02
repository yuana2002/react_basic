import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: '1', title: 'dev', salary: '100' },
            { id: '2', title: 'tester', salary: '200' },
            { id: '3', title: 'manage', salary: '200' }
        ]
    }

    addNewJod = (jod) => {
        console.log('check', jod)
        this.setState({
            arrJobs: [...this.state.arrJobs, jod]
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }
    render() {

        return (

            <>
                <AddComponent
                    addNewJod={this.addNewJod}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>

        )
    }
}

export default MyComponent;