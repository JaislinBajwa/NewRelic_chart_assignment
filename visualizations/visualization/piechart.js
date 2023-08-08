// import React from "react";
// import { LineChart } from "nr1";

// export default class Linechart extends React.Component {
//   render() {
//     const linechart1 = {
//       metadata: {
//         id: "line-chart-1",
//         name: "Version A",
//         viz: "main",
//         color: "red",
//       },
//       data: [
//         { x: 0, y: 0 },
//         { x: 10, y: 20 },
//         { x: 30, y: 40 },
//       ],
//     };
//     //  return <LineChart data={[linechart1]} fullWidth />;
//     return (
//       <LineChart
//         accountId={4043252}
//         query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NRAK-8Q1G2P9DXUBUM0DN2OTNWL2APM4' TIMESERIES auto"
//         fullWidth
//       />
//     );
//   }
// }
import React from 'react';
import { PieChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <PieChart accountIds={[4043252]}
        //query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzI1MnxJTkZSQXxOQXw4MTk2MTMyNDc4NTUyNTA5NzEy' TIMESERIES auto"
        query="SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDA0MzI1MnxJTkZSQXxOQXw4MTk2MTMyNDc4NTUyNTA5NzEy' ORDER BY cpuPercent asc LIMIT 100"
        fullWidth
        />;
    }
}