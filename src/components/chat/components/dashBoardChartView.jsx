import React from 'react'

import LiveChartViewGauge from './dashBoradChartViewGauge.jsx'
import LiveChartViewLine from './dashBoradChartViewLine.jsx'

let LiveChartView = React.createClass({
    getInitialState() {
        return {
            version:1.0,
            score:60
        }
    },

    componentDidMount() {
        let control = this;
        setInterval(function (){
            control.setState({score:(Math.random()*100).toFixed(2) - 0});
        },2000);
    },

	render:function(){
		return (
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <LiveChartViewGauge />
                </div>
                <div className="col-xs-12 col-sm-4">
                    <LiveChartViewLine />
                </div>
                <div className="col-xs-12 col-sm-4" style={{backgroundColor: '#3276B1'}}>
                    <div className='table-responsive' style={{height:'400px'}}>
                        <h6 className='head-txt'>用户体验版本排名</h6>
                        <table  className="table">
                            <thead>
                                <tr>
                                    <th className="" width="20%">版本</th>
                                    <th className="" width="60%">体验指数</th>
                                    <th className="" width="20%">分数</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="version" width="20%">
                                            {this.state.version}
                                    </td>
                                    <td className="chart" width="60%">
                                        <div className='chart-bar' style={{width:this.state.score+"%"}}></div>
                                    </td>
                                    <td className="score" width="20%">
                                            {this.state.score}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
	}
});

export default LiveChartView;