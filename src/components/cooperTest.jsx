import React from "react"
import { Container } from "semantic-ui-react"

const CooperTest = () => {
    return (
        <Container>
            <h1>What is the Cooper Test</h1>
            <h3>The Cooper test is a test of physical fitness. It was designed by Kenneth H. Cooper in 1968 for US military use</h3>
            <img src="/public/Dr K Cooper Headshot_CBC.jpg" alt="Dr Cooper"/>
            <p>
                The Cooper 12-minute run test requires the person being tested to run or walk as far as possible in a 12 minute period. 
                The objective of the test is to measure the maximum distance covered by the individual during the 12-minute period and 
                is usually carried out on a running track by placing cones at various distances to enable measuring of the distance.
                A stopwatch is required for ensuring that the individual runs for the correct amount of time. Here are some factors to 
                keep in mind when performing the Cooper 12-minute run test:
            </p>
            <ul class="ui list">
                <li class="item">Distance: Record the total number of miles or kilometers you traveled in 12 minutes.</li>
                <li class="item">Equipment: You'll need a timer to know when 12 minutes are up. Note that some running watches and fitness monitors have a 12-minute fitness test mode.</li>
                <li class="item">Location: This test is designed to be conducted on a track with clearly marked distance. You can perform the test on a treadmill, but be sure to raise the incline to one degree to simulate outdoor running.</li>
                <li class="item">Safety: This is a strenuous fitness test and it's recommended that you have your physician's clearance before performing this test on your own.</li>
                <li class="item">Speed: When you are warmed up, get going. Run or walk as far as you can in 12 minutes.</li>
                <li class="item">Warm-Up: Perform a short warm-up of 10 to 15 minutes of low to moderately strenuous activity before performing any fitness testing.</li>
            </ul>
        </Container>
    );
};

export default CooperTest

