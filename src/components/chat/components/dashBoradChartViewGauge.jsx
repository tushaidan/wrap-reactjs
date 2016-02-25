import React from 'react'
import echarts from 'echarts'

let LiveChartViewGauge = React.createClass({
    componentDidMount:function(){
        let mychart = echarts.init($('#dashBoradChartView_gauge')[0],'shine');
        let option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            backgroundColor:'#3276B1',
            series : [
                {
                    name:'业务指标',
                    type:'gauge',
                    detail : {formatter:'{value}%'},
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
            <div id="dashBoradChartView_gauge"></div>
        )
	}
});

export default LiveChartViewGauge;