var county_2_3_num=new Array();
var option_county_2_3_num=new Array();
for(var i=0;i<county_series_data_2_3.length;i++) {
    option_county_2_3_num[i] = {
        title: [
            {
                text: county_series_name[i],
                x: 10,
                y: 140,
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
                data: ['低于低保'],
                x: '10',
                y: '180',
                textStyle: {
                    color: '#fff'
                }

            }, {
                data: ['低于收入'],
                x: '10',
                y: '230',
                textStyle: {
                    color: '#fff'
                }
            }, {
                data: ['其它'],
                x: '10',
                y: '280',
                textStyle: {
                    color: '#fff'
                }
            }

        ],
        series: [
            {
                name: '各县城市贫困人口占比',
                type: 'pie',
                center: [290, 140],
                radius: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，'#7cb5d6','#d67c7c','#83b77c','#2e72ce'
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#ff5b09', '#1bc2dc', '#ffffff'
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
                    {value: county_series_data_2_3[i][0], name: '低于低保'},
                    {value: county_series_data_2_3[i][1], name: '低于收入'},
                    {value: county_series_data_2_3[i][2], name: '其它'}
                ]
            }
        ]
    };

}
console.log();
