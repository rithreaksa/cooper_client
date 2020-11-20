import React, { Component } from 'react';
import { getData } from "../modules/performanceData";

class DisplayPerformanceData extends Component {
    state = {
        performanceData: null
    }

    componentDidMount() {
        this.getPerformanceData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.updateIndex !== prevProps.updateIndex) {
            this.getPerformanceData()
        }
    }

    async getPerformanceData() {
        let result = await getData();
        this.setState({performanceData: result.data.entries}, () => {
            this.props.indexUpdated();
        })
    }

    render () {
        let dataIndex;

        if (this.state.performanceData !== null) {
            dataIndex = (
                <div id='index'>
                    {this.state.performanceData.map(item => {
                        return <div key={item.id}>{item.data.message}</div>
                    })}
                </div>
            )
        }

        return (
            <div>
                {dataIndex}
            </div>
        )
    }
}

export default DisplayPerformanceData