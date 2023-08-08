
import React from 'react';
import Linechart from './linechart';
import Piechart from './piechart';
import Areachart from './areachart';
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class HomeNerdlet extends React.Component {
  render() {
    return(
      <div>
         <h2>Line Chart</h2>
        <Linechart />
        <h2>Pie chart</h2>
        <Piechart />
        <h2>Area Chart</h2>
        <Areachart />
      </div>
    );
  }
}