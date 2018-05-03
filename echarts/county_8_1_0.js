var county_8_1_num =new Array();
var option_county_8_1_num =new Array();
for(var i=0;i<county_series_data_8_1.length;i++) {
    option_county_8_1_num[i] = {
        title: [
            {
                text: county_series_name[i],
                x: 10,
                y: 20,
                textStyle: {
                    fontWeight: 'normal',              //标题颜色
                    color: '#fff',
                    fontSize: '14'
                }
            }
        ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: [
            {
                data: ['参加活动'],
                x: '10',
                y: '60',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['不参加'],
                x: '10',
                y: '110',
                textStyle: {
                    color: '#fff'
                }
            }

        ],
        series: [
            {
                name: '是否参加活动',
                type: 'pie',
                radius: ['50%', '60%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#fee233', '#1bc2dc'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            formatter: '{b} : {d}%'
                        },
                        labelLine: {show: true}
                    }
                },
                data: [
                    {value: county_series_data_8_1[i][0], name: '参加活动'},
                    {value: county_series_data_8_1[i][1], name: '不参加'},
                ]
            }
        ]
    };
}
