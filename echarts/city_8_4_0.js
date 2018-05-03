var city_8_4_num=new Array();
var option_city_8_4_num=new Array();
for(var i=0;i<Math.ceil(city_data_8_4[1].length/2);i++) {
    option_city_8_4_num[i] = {

        tooltip: {
            trigger: 'item',

        },
        calculable: true,
        grid: {
            left: 90, top: '10%', width: '52%', height: '80%'
        },
        xAxis: [
            {
                type: 'value',
                show: false,
                max: city_series_data_8_4_max[0]//Y轴最大值
            }
        ],
        yAxis: [
            {
                type: 'category',

                show: true,
                data:series_name[1][i],
                axisTick: {
                    alignWithLabel: true
                },
                splitLine: {
                    show: false,
                    //  改变轴线颜色
                },
                // x轴的颜色和宽度
                axisLine: {
                    show: false,
                },// x轴的字体样式
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '10'
                    },
                    interval: 0
                },
            }
        ],
        series: [
            {
                name: series_name[1][i],
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#1be3ff'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'right',
                            formatter: '{c}'
                        }
                    },


                },


                data: city_data_8_4[1][i],

            }
        ]
    };

}
