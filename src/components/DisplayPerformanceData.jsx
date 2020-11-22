import React, { Component } from "react";
import { getData } from "../modules/performanceData";
import { Doughnut } from "react-chartjs-2";
import { Message } from "semantic-ui-react";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null,
  };

  componentDidMount() {
    this.getPerformanceData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData();
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    });
  }

  render() {
    if (this.state.performanceData == null) {
      return (
        <Message info>
          <p>No performance data</p>
        </Message>
      );
    }

    // prettier-ignore
    const doughnutData = {
      'Excellent': 0,
      'Above average': 0,
      'Average': 0,
      'Below average': 0,
      'Poor': 0
    };

    const colors = [
      "#43aa8b",
      "#90be6d",
      "#f9c74f",
      "#f8961e",
      "#f94144",
    ]

      this.state.performanceData.forEach((each) => {
        let label = each.data.message;
        if (doughnutData[label] == null) {
          doughnutData[label] = 0;
        }
        doughnutData[label] += 1;
      });

    const data = {
      labels: Object.keys(doughnutData),
      datasets: [
        {
          data: Object.values(doughnutData),
          backgroundColor: colors,
        },
      ],
    };

    return (
      <div id="index">
        <Doughnut data={data} />
      </div>
    );
  }
}

export default DisplayPerformanceData;
