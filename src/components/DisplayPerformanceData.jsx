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

    // const getState = () ({
    //     labels: = () ({
    //         'Red',
    //         'Green',
    //         'Yellow'
    //     })
    // })

    // export default React.createClass({
    //     displayName: 'CooperRecordsResult',

    //     render() {
    //         return (<div id="index">{doughnut}</div>)
    //     }
    // })

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
            datasets: [
                {
                    label: "previous results", 
                    data: distances,
                    backgroundColor:[
                        'rgba(205, 92, 92)',
                        'rgba(240, 128, 128)',
                        'rgba(250, 128, 114)',
                        'rgba(233, 150, 122)',
                        'rgba(255, 160, 122)'
                    ]
                 
                }],
        }

        doughnut = <Doughnut className="DoughnutChart" data={data}/>

        return <div id="index" >{doughnut}</div>
    }
}

export default DisplayPerformanceData