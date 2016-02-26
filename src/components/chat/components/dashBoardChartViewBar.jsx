import React from 'react'
import echarts from 'echarts';

let bars = [{

    }, {

    }, {

    }];

let LiveChartViewGauge = React.createClass({
    componentDidMount:function(){
        let mychart = echarts.init($('#dashBoradChartView_gauge')[0]);
        let option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            backgroundColor:'#3276B1',
            series : [
                {
                    name:'业务指标',
                    type:'gauge',
                    detail : {show:false,formatter:'{value}%'},
                    data:[{value: 50, name: '完成率'}]
                }
            ]
        };
        mychart.setOption(option);
        let timeTicket = setInterval(function (){
            option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            mychart.setOption(option);
        },2000);
    },
	render:function(){
		return (

            <div className="row">
                 {
                    bars.map(function (bar) {
                      return <div>Hello, {bar.xxx}!</div>
                    })
                 }
                <article className="col-sm-12 col-md-12 col-lg-6">

                </article>

                <article className="col-sm-12 col-md-12 col-lg-6">

                </article>

            </div>
        )
	}
});

export default LiveChartViewGauge;