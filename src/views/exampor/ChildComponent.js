import React from "react";
class ChildComponent extends React.Component {

    state = {
        showObj: false
    }

    handleShowHide = () => {
        this.setState({
            showObj: !this.state.showObj
        })
    }

    handleOnclickDelete = (job) => {
        console.log('handel onclick delete', job)
        this.props.deleteJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showObj } = this.state;
        let check = showObj === true ? 'showObj = true' : 'showObj = false';
        console.log('aax', check)
        return (
            <>

                {showObj === false ?
                    <div onClick={() => { this.handleShowHide() }}><button>
                        show</button></div>
                    :
                    <>
                        <div className="arrJobs">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <span onClick={() => { this.handleOnclickDelete(item) }}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div onClick={() => { this.handleShowHide() }}><button>hide</button></div>
                    </>
                }
            </>

        )
    }
}

export default ChildComponent;