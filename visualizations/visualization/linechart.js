
import React from 'react';
import { LineChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <LineChart accountIds={[4043252]}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzI1MnxJTkZSQXxOQXw4MTk2MTMyNDc4NTUyNTA5NzEy' TIMESERIES auto"
        fullWidth
        />;
    }
}