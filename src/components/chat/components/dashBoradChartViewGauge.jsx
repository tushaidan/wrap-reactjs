import React from 'react'
import echarts from 'echarts/src/echarts';
import 'echarts/src/chart/gauge';

let LiveChartViewGauge = React.createClass({
    componentDidMount:function(){
        let mychart = echarts.init($('#dashBoradChartView_gauge')[0],'macarons');
        let option = {
            title:{
                text:'优云用户体验指数',
                x:20,
                y:20,
                textStyle:{
                    color:"white",
                    fontSize:16,
                    fontFamily:'幼圆'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            backgroundColor:'#3276B1',
            series : [
                {
                    type:'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    center: ['50%','90%'], // 默认全局居中
                    radius : 140,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 16,
                            color: [
                              [0.5, '#f62535'],
                              [0.6, '#3BBBE0'],
                              [0.8, '#facd89'],
                              [1, '#2ecc71']
                          ]
                        }
                    },
                    axisTick: {
                      show: false,// 坐标轴小标记
                        splitNumber: 10,   // 每份split细分多少段
                        length :12,        // 属性length控制线长
                    },
                   splitLine: {           // 分隔线
                        show: false,
                        length :-22,
                   },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        formatter: function(v){
                            switch (v+''){
                                case '50': return '50';
                                case '60': return '60';
                                case '80': return '80';
                                default: return '';
                            }
                        },
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                          fontSize: 12,
                          color: '#6A8CB7'
                        }
                    },
                    pointer: {
                        width: 4,
                        length: '85%',
                        color: '#0251b0'
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, -10],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#193956',
                            fontSize : 20,
                            fontFamily:'幼圆'
                        }
                    },
                    detail : {
                        formatter:'{value}分',
                        offsetCenter: [0, '-40%'],
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: 'white',
                            fontSize : 30,
                            fontFamily:'cuisive'
                        }
                    },
                    data:[{value: 50, name: "优秀"}]
                }
            ]
        };
        mychart.setOption(option);
        let timeTicket = setInterval(function (){
            option.series[0].data[0].value = (Math.random()*100).toFixed(0) - 0;
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