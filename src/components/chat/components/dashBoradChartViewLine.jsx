import React from 'react'
import echarts from 'echarts'

let LiveChartViewLine = React.createClass({
    componentDidMount: function() {
        let mychart = echarts.init($('#dashBoradChartView_line')[0],'dark');
        let option = {
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                smooth: true,
                symbol: 'image://../asset/ico/favicon.png', // 系列级个性化拐点图形
                symbolSize: 8,
                data: [
                    120, 82, {
                        value: 201,
                        symbol: 'star', // 数据级个性化拐点图形
                        symbolSize: 15,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontFamily: '微软雅黑',
                                        fontWeight: 'bold'
                                    }
                                }
                            }
                        }
                    }, {
                        value: 134,
                        symbol: 'none'
                    },
                    190, {
                        value: 230,
                        symbol: 'emptypin',
                        symbolSize: 8
                    },
                    110
                ]
            }]
        };
        mychart.setOption(option);
    },
    render: function() {
        return ( < div id = "dashBoradChartView_line" > < /div>)
    }
});

export default LiveChartViewLine;