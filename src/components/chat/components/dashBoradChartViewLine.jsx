import React from 'react'
import echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';
import zrColor from 'echarts/node_modules/zrender/tool/color'

let LiveChartViewLine = React.createClass({
    componentDidMount: function() {
        let mychart = echarts.init($('#dashBoradChartView_line')[0],'macarons');
        let option = {
            title:{
                text:'用户体验指数趋势',
                x:20,
                y:20,
                textStyle:{
                    color:"white",
                    fontSize:16,
                    fontFamily:'幼圆'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                x:40,
                x2:20,
                y: 70,
                y2: 50
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine:{show:false},
                splitLine:{show:false},
                splitLine : {
                    show:true,
                    lineStyle: {
                        color: '#29497B',
                        width: 1
                    }
                },
                axisLabel:{
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontSize: 8,
                      color: '#6A8CB7'
                    }
                },
                axisTick:{
                    show:false
                },
                splitArea:{
                    show:false
                },
                data: [10,11,12,13,14,15,16,17,18,19,20]
            }],
            yAxis: [{
                type: 'value',
                axisLine:{show:false},
                splitArea:{
                    show:false,
                },
                axisLabel:{
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontSize: 8,
                      color: '#6A8CB7'
                    }
                },
                splitLine : {
                    show:true,
                    lineStyle: {
                        color: '#5D7995',
                        width: 1
                    }
                }
            }],
            series: [{
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                symbol: 'none',
                smooth: true,
                itemStyle: {
                    normal: {
                        areaStyle: {            // 系列级个性化折线样式，横向渐变描边
                            color: (function (){
                                return zrColor.getLinearGradient(
                                    0, 170, 0, 50,
                                    [[0, 'rgba(0,255,0,0)'],[0.7, 'rgba(0,255,0,1)']]
                                )
                            })(),
                            shadowColor : 'rgba(0,0,0,0.2)',
                            shadowBlur: 10,
                            shadowOffsetX: 8,
                            shadowOffsetY: 8
                        }
                    }
                },
                data: [
                    120, 82, 123,124,40,231,11,123,33,44,55
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