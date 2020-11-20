import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import { Line } from 'react-chartjs-2'

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
        let doughnut;
        let distances = []
        let labels = []

        if (this.state.performanceData != null) {
                this.state.performanceData.forEach((entry) => {
                    distances.push(entry.data.distance)
                    labels.push(entry.data.message)
                })
                // <div id='index'>
                //     {this.state.performanceData.map(item => {
                //         return (<div key={item.id}>
                //             <p>{item.data.message}</p>
                //             <p>{item.data.age}</p>
                //             <p>{item.data.distance}</p>
                //             </div>)
                //     })}
                // </div>
        }

        const data = {
            labels: labels, 
            datasets: [{ label: "previous results", data: distances }]
        }

        doughnut = <Line data={data} />

        return <div id="index">{doughnut}</div>
    }
}

export default DisplayPerformanceData