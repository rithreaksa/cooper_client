import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import { Doughnut } from 'react-chartjs-2'

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
        const doughnutData = {}

        if (this.state.performanceData != null) {
            this.state.performanceData.forEach((entry) => {
                let label = entry.data.message
                if (doughnutData[label] == null) {
                    doughnutData[label] = 0;
                }
                doughnutData[label] += 1;
            })
        }

        const data = {
            labels: Object.keys(doughnutData), 
            datasets: [
            {
                data: Object.values(doughnutData), 
                backgroundColor:[
                    'rgba(205, 92, 92)',
                    'rgba(240, 128, 128)',
                    'rgba(250, 128, 114)',
                    'rgba(233, 150, 122)',
                    'rgba(255, 160, 122)'
                ]
                 
            }],
        }

        let doughnut = <Doughnut data={data} />

        return <div id="index">{doughnut}</div>
    }
}

export default DisplayPerformanceData