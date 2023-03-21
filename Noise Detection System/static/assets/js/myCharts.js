//Annual compliance rate of monitoring points in various functional areas
  // 基于准备好的dom，初始化echarts实例
  var myChart1 = echarts.init(document.getElementById('main11'));
  // 指定图表的配置项和数据
  var option1 = {
  	animationDuration: 5000,
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross',
  			crossStyle: {
  				color: '#999'
  			}
  		}
  	},
  	toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	legend: {
  		data: ['昼间达标率', '夜间达标率']
  	},
  	title: {
  		text: '全国城市'
  	},
  	calculable: true,
  	xAxis: {
  		type: 'category',
  		data: ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  		axisPointer: {
  			type: 'shadow'
  		}
  	},
  	yAxis: {
  		type: 'value',
  		name: '达标率(%)',
  		min: 0,
  		max: 100,
  		interval: 10,
  		axisLabel: {
  			formatter: '{value} %'
  		}
  	},
  	series: [{
  			name: '昼间达标率',
  			type: 'bar',
  			barWidth: 15,
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' %';
  				}
  			},
  			data: [91.1, 91.3, 92.4, 92.2, 92.0, 92.6, 92.4, 94.6, 95.4],
  			markPoint: {
  				data: [{
  						type: 'max',
  						name: 'Max'
  					},
  					{
  						type: 'min',
  						name: 'Min'
  					}
  				]
  			},
  			markLine: {
  				data: [{
  					type: 'average',
  					name: 'Avg'
  				}]
  			}
  		},
  		{
  			name: '夜间达标率',
  			type: 'bar',
  			barWidth: 15,
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' %';
  				}
  			},
  			data: [71.7, 61.1, 74.3, 74.0, 74.0, 73.5, 74.4, 80.1, 82.9],
  			markPoint: {
  				data: [{
  						name: 'Max',
  						value: 82.9,
  						xAxis: 8,
  						yAxis: 83
  					},
  					{
  						name: 'Min',
  						value: 61.1,
  						xAxis: 1,
  						yAxis: 62
  					}
  				]
  			},
  			markLine: {
  				data: [{
  					type: 'average',
  					name: 'Avg'
  				}]
  			}
  		}
  	]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);

  var myChart2 = echarts.init(document.getElementById('main12'));
  var option2 = {
  	animationDuration: 5000,
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross',
  			crossStyle: {
  				color: '#999'
  			}
  		}
  	},
  	toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	legend: {
  		data: ['昼间达标率', '夜间达标率']
  	},
  	title: {
  		text: '直辖市和省会城市'
  	},
  	calculable: true,
  	xAxis: [{
  		type: 'category',
  		data: ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  		axisPointer: {
  			type: 'shadow'
  		}
  	}],
  	yAxis: [{
  		type: 'value',
  		name: '达标率(%)',
  		min: 0,
  		max: 100,
  		interval: 10,
  		axisLabel: {
  			formatter: '{value} %'
  		}
  	}],
  	series: [{
  			name: '昼间达标率',
  			type: 'bar',
  			barWidth: 15,
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' %';
  				}
  			},
  			data: [87.7, 87.2, 87.6, 87.8, 88.6, 92.8, 95.3],
  			markPoint: {
  				data: [{
  						type: 'max',
  						name: 'Max'
  					},
  					{
  						type: 'min',
  						name: 'Min'
  					}
  				]
  			},
  			markLine: {
  				data: [{
  					type: 'average',
  					name: 'Avg'
  				}]
  			}
  		},
  		{
  			name: '夜间达标率',
  			type: 'bar',
  			barWidth: 15,
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' %';
  				}
  			},
  			data: [61.8, 59.7, 57.9, 57.4, 60.1, 72.6, 78.1],
  			markPoint: {
  				data: [{
  						name: 'Max',
  						value: 78.1,
  						xAxis: 6,
  						yAxis: 79
  					},
  					{
  						name: 'Min',
  						value: 57.4,
  						xAxis: 3,
  						yAxis: 58
  					}
  				]
  			},
  			markLine: {
  				data: [{
  					type: 'average',
  					name: 'Avg'
  				}]
  			}
  		}
  	]
  };
  myChart2.setOption(option2);

  //The rate of meeting the standard of the total points in the functional areas of municipalities and provincial capitals
  var myChart3 = echarts.init(document.getElementById('main13'));

  const data1_list2016 = [{
  	name: '北京',
  	value: 81.3
  }, {
  	name: '天津',
  	value: 86.3
  }, {
  	name: '河北',
  	value: 89.6
  }, {
  	name: '山西',
  	value: 94.4
  }, {
  	name: '内蒙古',
  	value: 100.0
  }, {
  	name: '辽宁',
  	value: 92.9
  }, {
  	name: '吉林',
  	value: 90.6
  }, {
  	name: '黑龙江',
  	value: 70.6
  }, {
  	name: '上海',
  	value: 93.0
  }, {
  	name: '江苏',
  	value: 96.9
  }, {
  	name: '浙江',
  	value: 84.1
  }, {
  	name: '安徽',
  	value: 93.1
  }, {
  	name: '福建',
  	value: 98.8
  }, {
  	name: '江西',
  	value: 95.0
  }, {
  	name: '山东',
  	value: 80.6
  }, {
  	name: '河南',
  	value: 50.0
  }, {
  	name: '湖北',
  	value: 77.1
  }, {
  	name: '湖南',
  	value: 78.3
  }, {
  	name: '广东',
  	value: 63.6
  }, {
  	name: '广西',
  	value: 89.3
  }, {
  	name: '海南',
  	value: 100.0
  }, {
  	name: '重庆',
  	value: 84.9
  }, {
  	name: '四川',
  	value: 79.3
  }, {
  	name: '贵州',
  	value: 100.0
  }, {
  	name: '云南',
  	value: 100.0
  }, {
  	name: '西藏',
  	value: 100.0
  }, {
  	name: '陕西',
  	value: 62.5
  }, {
  	name: '甘肃',
  	value: 71.4
  }, {
  	name: '青海',
  	value: 60.0
  }, {
  	name: '宁夏',
  	value: 100.0
  }, {
  	name: '新疆',
  	value: 93.3
  }];
  const data1_list2017 = [{
  	name: '北京',
  	value: 100.0
  }, {
  	name: '天津',
  	value: 91.3
  }, {
  	name: '河北',
  	value: 91.7
  }, {
  	name: '山西',
  	value: 100.0
  }, {
  	name: '内蒙古',
  	value: 95.0
  }, {
  	name: '辽宁',
  	value: 96.4
  }, {
  	name: '吉林',
  	value: 93.8
  }, {
  	name: '黑龙江',
  	value: 66.2
  }, {
  	name: '上海',
  	value: 93.1
  }, {
  	name: '江苏',
  	value: 97.9
  }, {
  	name: '浙江',
  	value: 83.7
  }, {
  	name: '安徽',
  	value: 86.7
  }, {
  	name: '福建',
  	value: 93.8
  }, {
  	name: '江西',
  	value: 82.5
  }, {
  	name: '山东',
  	value: 77.8
  }, {
  	name: '河南',
  	value: 56.3
  }, {
  	name: '湖北',
  	value: 75.0
  }, {
  	name: '湖南',
  	value: 85.0
  }, {
  	name: '广东',
  	value: 65.9
  }, {
  	name: '广西',
  	value: 85.7
  }, {
  	name: '海南',
  	value: 100.0
  }, {
  	name: '重庆',
  	value: 88.6
  }, {
  	name: '四川',
  	value: 84.2
  }, {
  	name: '贵州',
  	value: 81.3
  }, {
  	name: '云南',
  	value: 100.0
  }, {
  	name: '西藏',
  	value: 87.5
  }, {
  	name: '陕西',
  	value: 75.0
  }, {
  	name: '甘肃',
  	value: 85.7
  }, {
  	name: '青海',
  	value: 70.0
  }, {
  	name: '宁夏',
  	value: 100.0
  }, {
  	name: '新疆',
  	value: 93.3
  }];
  const data1_list2018 = [{
  	name: '北京',
  	value: 93.8
  }, {
  	name: '天津',
  	value: 96.3
  }, {
  	name: '河北',
  	value: 93.8
  }, {
  	name: '山西',
  	value: 100.0
  }, {
  	name: '内蒙古',
  	value: 100.0
  }, {
  	name: '辽宁',
  	value: 96.4
  }, {
  	name: '吉林',
  	value: 96.9
  }, {
  	name: '黑龙江',
  	value: 72.1
  }, {
  	name: '上海',
  	value: 97.2
  }, {
  	name: '江苏',
  	value: 99.0
  }, {
  	name: '浙江',
  	value: 84.8
  }, {
  	name: '安徽',
  	value: 73.3
  }, {
  	name: '福建',
  	value: 91.3
  }, {
  	name: '江西',
  	value: 87.5
  }, {
  	name: '山东',
  	value: 77.8
  }, {
  	name: '河南',
  	value: 56.3
  }, {
  	name: '湖北',
  	value: 87.5
  }, {
  	name: '湖南',
  	value: 68.3
  }, {
  	name: '广东',
  	value: 63.6
  }, {
  	name: '广西',
  	value: 85.7
  }, {
  	name: '海南',
  	value: 100.0
  }, {
  	name: '重庆',
  	value: 93.2
  }, {
  	name: '四川',
  	value: 75.0
  }, {
  	name: '贵州',
  	value: 100.0
  }, {
  	name: '云南',
  	value: 81.3
  }, {
  	name: '西藏',
  	value: 87.5
  }, {
  	name: '陕西',
  	value: 78.1
  }, {
  	name: '甘肃',
  	value: 89.3
  }, {
  	name: '青海',
  	value: 50.0
  }, {
  	name: '宁夏',
  	value: 100.0
  }, {
  	name: '新疆',
  	value: 93.3
  }];
  const data1_list2019 = [{
  	name: '北京',
  	value: 93.8
  }, {
  	name: '天津',
  	value: 90.0
  }, {
  	name: '河北',
  	value: 93.8
  }, {
  	name: '山西',
  	value: 94.4
  }, {
  	name: '内蒙古',
  	value: 100.0
  }, {
  	name: '辽宁',
  	value: 96.4
  }, {
  	name: '吉林',
  	value: 93.8
  }, {
  	name: '黑龙江',
  	value: 79.4
  }, {
  	name: '上海',
  	value: 90.4
  }, {
  	name: '江苏',
  	value: 99.0
  }, {
  	name: '浙江',
  	value: 84.4
  }, {
  	name: '安徽',
  	value: 75.0
  }, {
  	name: '福建',
  	value: 86.3
  }, {
  	name: '江西',
  	value: 87.5
  }, {
  	name: '山东',
  	value: 83.3
  }, {
  	name: '河南',
  	value: 75.0
  }, {
  	name: '湖北',
  	value: 81.3
  }, {
  	name: '湖南',
  	value: 78.3
  }, {
  	name: '广东',
  	value: 65.9
  }, {
  	name: '广西',
  	value: 96.4
  }, {
  	name: '海南',
  	value: 100.0
  }, {
  	name: '重庆',
  	value: 96.6
  }, {
  	name: '四川',
  	value: 84.2
  }, {
  	name: '贵州',
  	value: 93.8
  }, {
  	name: '云南',
  	value: 96.9
  }, {
  	name: '西藏',
  	value: 87.5
  }, {
  	name: '陕西',
  	value: 96.9
  }, {
  	name: '甘肃',
  	value: 82.1
  }, {
  	name: '青海',
  	value: 65.0
  }, {
  	name: '宁夏',
  	value: 95.0
  }, {
  	name: '新疆',
  	value: 96.7
  }];
  const data1_list2020 = [{
  	name: '北京',
  	value: 91.2
  }, {
  	name: '天津',
  	value: 97.3
  }, {
  	name: '河北',
  	value: 100.0
  }, {
  	name: '山西',
  	value: 100.0
  }, {
  	name: '内蒙古',
  	value: 100.0
  }, {
  	name: '辽宁',
  	value: 96.4
  }, {
  	name: '吉林',
  	value: 95.3
  }, {
  	name: '黑龙江',
  	value: 92.6
  }, {
  	name: '上海',
  	value: 93.8
  }, {
  	name: '江苏',
  	value: 99.0
  }, {
  	name: '浙江',
  	value: 90.2
  }, {
  	name: '安徽',
  	value: 80.0
  }, {
  	name: '福建',
  	value: 91.0
  }, {
  	name: '江西',
  	value: 95.0
  }, {
  	name: '山东',
  	value: 87.7
  }, {
  	name: '河南',
  	value: 90.3
  }, {
  	name: '湖北',
  	value: 91.5
  }, {
  	name: '湖南',
  	value: 81.7
  }, {
  	name: '广东',
  	value: 95.0
  }, {
  	name: '广西',
  	value: 96.4
  }, {
  	name: '海南',
  	value: 100.0
  }, {
  	name: '重庆',
  	value: 90.9
  }, {
  	name: '四川',
  	value: 81.6
  }, {
  	name: '贵州',
  	value: 97.8
  }, {
  	name: '云南',
  	value: 95.8
  }, {
  	name: '西藏',
  	value: 100.0
  }, {
  	name: '陕西',
  	value: 85.2
  }, {
  	name: '甘肃',
  	value: 92.9
  }, {
  	name: '青海',
  	value: 75.0
  }, {
  	name: '宁夏',
  	value: 97.5
  }, {
  	name: '新疆',
  	value: 95.0
  }];
  const data1_list2021 = [{
  	name: '北京',
  	value: 87.5
  }, {
  	name: '天津',
  	value: 95.0
  }, {
  	name: '河北',
  	value: 100.0
  }, {
  	name: '山西',
  	value: 86.1
  }, {
  	name: '内蒙古',
  	value: 100.0
  }, {
  	name: '辽宁',
  	value: 96.4
  }, {
  	name: '吉林',
  	value: 96.9
  }, {
  	name: '黑龙江',
  	value: 97.5
  }, {
  	name: '上海',
  	value: 96.2
  }, {
  	name: '江苏',
  	value: 95.8
  }, {
  	name: '浙江',
  	value: 94.6
  }, {
  	name: '安徽',
  	value: 88.3
  }, {
  	name: '福建',
  	value: 93.8
  }, {
  	name: '江西',
  	value: 93.8
  }, {
  	name: '山东',
  	value: 95.7
  }, {
  	name: '河南',
  	value: 92.5
  }, {
  	name: '湖北',
  	value: 95.0
  }, {
  	name: '湖南',
  	value: 100.0
  }, {
  	name: '广东',
  	value: 96.2
  }, {
  	name: '广西',
  	value: 98.8
  }, {
  	name: '海南',
  	value: 83.6
  }, {
  	name: '重庆',
  	value: 94.3
  }, {
  	name: '四川',
  	value: 95.6
  }, {
  	name: '贵州',
  	value: 100.0
  }, {
  	name: '云南',
  	value: 88.8
  }, {
  	name: '西藏',
  	value: 93.3
  }, {
  	name: '陕西',
  	value: 96.8
  }, {
  	name: '甘肃',
  	value: 100.0
  }, {
  	name: '青海',
  	value: 90.0
  }, {
  	name: '宁夏',
  	value: 97.5
  }, {
  	name: '新疆',
  	value: 91.7
  }];

  var option3 = {
    animationDuration: 5000,
  	legend: {
  		// 设置默认显示与不显示
  		selected: {
  			'2016年': true,
  			'2017年': false,
  			'2018年': false,
  			'2019年': false,
  			'2020年': false,
  			'2021年': false
  		},
  		// 设置单选多选模式
  		selectedMode: 'single',
  		orient: 'vertical',
  		top: '10%',
  		left: '0%'
  	},
  	title: {
  		text: '昼间总点次达标率'
  	},
  	toolbox: {
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	tooltip: {
  		trigger: 'item',
  		formatter: '年份：{a}<br/>省份：{b}<br/>值：{c} %'
  	},
  	dataRange: {
  		min: 50,
  		max: 100,
  		x: 'left',
  		y: 'bottom',
  		text: ['高', '低'],
  		calculable: true,
  		inRange: {
  			color: ['#FFFFFF', '#00FF00'],
  			symbolSize: [10, 100]
  		}
  	},
  	series: [{
  			name: '2016年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data1_list2016,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2017年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data1_list2017,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2018年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data1_list2018,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2019年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data1_list2019,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2020年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data1_list2020,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2021年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data1_list2021,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  	]
  };
  myChart3.setOption(option3);

  var myChart4 = echarts.init(document.getElementById('main14'));

  const data2_list2016 = [{
  	name: '北京',
  	value: 43.8
  }, {
  	name: '天津',
  	value: 57.5
  }, {
  	name: '河北',
  	value: 35.4
  }, {
  	name: '山西',
  	value: 72.2
  }, {
  	name: '内蒙古',
  	value: 45.0
  }, {
  	name: '辽宁',
  	value: 85.7
  }, {
  	name: '吉林',
  	value: 39.1
  }, {
  	name: '黑龙江',
  	value: 50.0
  }, {
  	name: '上海',
  	value: 68.8
  }, {
  	name: '江苏',
  	value: 87.5
  }, {
  	name: '浙江',
  	value: 58.0
  }, {
  	name: '安徽',
  	value: 75.9
  }, {
  	name: '福建',
  	value: 70.0
  }, {
  	name: '江西',
  	value: 68.8
  }, {
  	name: '山东',
  	value: 50.0
  }, {
  	name: '河南',
  	value: 31.3
  }, {
  	name: '湖北',
  	value: 43.8
  }, {
  	name: '湖南',
  	value: 41.7
  }, {
  	name: '广东',
  	value: 56.8
  }, {
  	name: '广西',
  	value: 46.4
  }, {
  	name: '海南',
  	value: 62.5
  }, {
  	name: '重庆',
  	value: 57.0
  }, {
  	name: '四川',
  	value: 53.7
  }, {
  	name: '贵州',
  	value: 31.3
  }, {
  	name: '云南',
  	value: 71.9
  }, {
  	name: '西藏',
  	value: 87.5
  }, {
  	name: '陕西',
  	value: 31.3
  }, {
  	name: '甘肃',
  	value: 28.6
  }, {
  	name: '青海',
  	value: 35.0
  }, {
  	name: '宁夏',
  	value: 100.0
  }, {
  	name: '新疆',
  	value: 56.7
  }];
  const data2_list2017 = [{
  	name: '北京',
  	value: 50.0
  }, {
  	name: '天津',
  	value: 53.8
  }, {
  	name: '河北',
  	value: 22.9
  }, {
  	name: '山西',
  	value: 75.0
  }, {
  	name: '内蒙古',
  	value: 60.0
  }, {
  	name: '辽宁',
  	value: 82.1
  }, {
  	name: '吉林',
  	value: 65.6
  }, {
  	name: '黑龙江',
  	value: 38.2
  }, {
  	name: '上海',
  	value: 63.9
  }, {
  	name: '江苏',
  	value: 94.8
  }, {
  	name: '浙江',
  	value: 65.2
  }, {
  	name: '安徽',
  	value: 68.3
  }, {
  	name: '福建',
  	value: 50.0
  }, {
  	name: '江西',
  	value: 55.0
  }, {
  	name: '山东',
  	value: 44.4
  }, {
  	name: '河南',
  	value: 43.8
  }, {
  	name: '湖北',
  	value: 52.1
  }, {
  	name: '湖南',
  	value: 46.7
  }, {
  	name: '广东',
  	value: 47.7
  }, {
  	name: '广西',
  	value: 46.4
  }, {
  	name: '海南',
  	value: 62.5
  }, {
  	name: '重庆',
  	value: 55.7
  }, {
  	name: '四川',
  	value: 39.5
  }, {
  	name: '贵州',
  	value: 43.8
  }, {
  	name: '云南',
  	value: 71.9
  }, {
  	name: '西藏',
  	value: 50.0
  }, {
  	name: '陕西',
  	value: 28.1
  }, {
  	name: '甘肃',
  	value: 53.6
  }, {
  	name: '青海',
  	value: 35.0
  }, {
  	name: '宁夏',
  	value: 90.0
  }, {
  	name: '新疆',
  	value: 66.7
  }];
  const data2_list2018 = [{
  	name: '北京',
  	value: 56.3
  }, {
  	name: '天津',
  	value: 65.0
  }, {
  	name: '河北',
  	value: 29.2
  }, {
  	name: '山西',
  	value: 66.7
  }, {
  	name: '内蒙古',
  	value: 50.0
  }, {
  	name: '辽宁',
  	value: 67.9
  }, {
  	name: '吉林',
  	value: 68.8
  }, {
  	name: '黑龙江',
  	value: 41.2
  }, {
  	name: '上海',
  	value: 65.7
  }, {
  	name: '江苏',
  	value: 90.6
  }, {
  	name: '浙江',
  	value: 51.1
  }, {
  	name: '安徽',
  	value: 45.0
  }, {
  	name: '福建',
  	value: 50.0
  }, {
  	name: '江西',
  	value: 53.8
  }, {
  	name: '山东',
  	value: 36.1
  }, {
  	name: '河南',
  	value: 12.5
  }, {
  	name: '湖北',
  	value: 60.4
  }, {
  	name: '湖南',
  	value: 53.3
  }, {
  	name: '广东',
  	value: 40.9
  }, {
  	name: '广西',
  	value: 39.3
  }, {
  	name: '海南',
  	value: 68.8
  }, {
  	name: '重庆',
  	value: 69.3
  }, {
  	name: '四川',
  	value: 52.6
  }, {
  	name: '贵州',
  	value: 56.3
  }, {
  	name: '云南',
  	value: 62.5
  }, {
  	name: '西藏',
  	value: 81.3
  }, {
  	name: '陕西',
  	value: 28.1
  }, {
  	name: '甘肃',
  	value: 32.1
  }, {
  	name: '青海',
  	value: 45.0
  }, {
  	name: '宁夏',
  	value: 77.5
  }, {
  	name: '新疆',
  	value: 63.3
  }];
  const data2_list2019 = [{
  	name: '北京',
  	value: 75.0
  }, {
  	name: '天津',
  	value: 63.8
  }, {
  	name: '河北',
  	value: 70.8
  }, {
  	name: '山西',
  	value: 75.0
  }, {
  	name: '内蒙古',
  	value: 42.1
  }, {
  	name: '辽宁',
  	value: 67.9
  }, {
  	name: '吉林',
  	value: 45.3
  }, {
  	name: '黑龙江',
  	value: 38.2
  }, {
  	name: '上海',
  	value: 66.8
  }, {
  	name: '江苏',
  	value: 86.5
  }, {
  	name: '浙江',
  	value: 44.6
  }, {
  	name: '安徽',
  	value: 73.3
  }, {
  	name: '福建',
  	value: 53.8
  }, {
  	name: '江西',
  	value: 62.5
  }, {
  	name: '山东',
  	value: 63.3
  }, {
  	name: '河南',
  	value: 31.3
  }, {
  	name: '湖北',
  	value: 54.2
  }, {
  	name: '湖南',
  	value: 50.0
  }, {
  	name: '广东',
  	value: 40.9
  }, {
  	name: '广西',
  	value: 46.4
  }, {
  	name: '海南',
  	value: 68.8
  }, {
  	name: '重庆',
  	value: 70.5
  }, {
  	name: '四川',
  	value: 47.4
  }, {
  	name: '贵州',
  	value: 25.0
  }, {
  	name: '云南',
  	value: 65.6
  }, {
  	name: '西藏',
  	value: 81.3
  }, {
  	name: '陕西',
  	value: 34.4
  }, {
  	name: '甘肃',
  	value: 42.9
  }, {
  	name: '青海',
  	value: 40.0
  }, {
  	name: '宁夏',
  	value: 77.5
  }, {
  	name: '新疆',
  	value: 66.7
  }];
  const data2_list2020 = [{
  	name: '北京',
  	value: 72.5
  }, {
  	name: '天津',
  	value: 78.7
  }, {
  	name: '河北',
  	value: 77.1
  }, {
  	name: '山西',
  	value: 88.9
  }, {
  	name: '内蒙古',
  	value: 76.5
  }, {
  	name: '辽宁',
  	value: 78.6
  }, {
  	name: '吉林',
  	value: 64.1
  }, {
  	name: '黑龙江',
  	value: 54.4
  }, {
  	name: '上海',
  	value: 78.4
  }, {
  	name: '江苏',
  	value: 92.7
  }, {
  	name: '浙江',
  	value: 63.0
  }, {
  	name: '安徽',
  	value: 76.7
  }, {
  	name: '福建',
  	value: 60.3
  }, {
  	name: '江西',
  	value: 67.5
  }, {
  	name: '山东',
  	value: 82.5
  }, {
  	name: '河南',
  	value: 41.9
  }, {
  	name: '湖北',
  	value: 61.8
  }, {
  	name: '湖南',
  	value: 50.0
  }, {
  	name: '广东',
  	value: 87.5
  }, {
  	name: '广西',
  	value: 75.0
  }, {
  	name: '海南',
  	value: 87.5
  }, {
  	name: '重庆',
  	value: 73.9
  }, {
  	name: '四川',
  	value: 52.6
  }, {
  	name: '贵州',
  	value: 89.1
  }, {
  	name: '云南',
  	value: 83.3
  }, {
  	name: '西藏',
  	value: 62.5
  }, {
  	name: '陕西',
  	value: 37.0
  }, {
  	name: '甘肃',
  	value: 71.4
  }, {
  	name: '青海',
  	value: 65.0
  }, {
  	name: '宁夏',
  	value: 77.5
  }, {
  	name: '新疆',
  	value: 73.3
  }];
  const data2_list2021 = [{
  	name: '北京',
  	value: 68.8
  }, {
  	name: '天津',
  	value: 82.5
  }, {
  	name: '河北',
  	value: 77.1
  }, {
  	name: '山西',
  	value: 58.3
  }, {
  	name: '内蒙古',
  	value: 78.0
  }, {
  	name: '辽宁',
  	value: 82.1
  }, {
  	name: '吉林',
  	value: 54.7
  }, {
  	name: '黑龙江',
  	value: 73.8
  }, {
  	name: '上海',
  	value: 78.4
  }, {
  	name: '江苏',
  	value: 83.3
  }, {
  	name: '浙江',
  	value: 87.5
  }, {
  	name: '安徽',
  	value: 63.3
  }, {
  	name: '福建',
  	value: 90.0
  }, {
  	name: '江西',
  	value: 75.0
  }, {
  	name: '山东',
  	value: 91.5
  }, {
  	name: '河南',
  	value: 52.5
  }, {
  	name: '湖北',
  	value: 63.3
  }, {
  	name: '湖南',
  	value: 73.8
  }, {
  	name: '广东',
  	value: 86.2
  }, {
  	name: '广西',
  	value: 85.0
  }, {
  	name: '海南',
  	value: 69.1
  }, {
  	name: '重庆',
  	value: 71.6
  }, {
  	name: '四川',
  	value: 72.8
  }, {
  	name: '贵州',
  	value: 91.3
  }, {
  	name: '云南',
  	value: 80.0
  }, {
  	name: '西藏',
  	value: 80.0
  }, {
  	name: '陕西',
  	value: 45.2
  }, {
  	name: '甘肃',
  	value: 93.5
  }, {
  	name: '青海',
  	value: 88.3
  }, {
  	name: '宁夏',
  	value: 75.0
  }, {
  	name: '新疆',
  	value: 76.7
  }];

  var option4 = {
  	legend: {
  		// 设置默认显示与不显示
  		selected: {
  			'2016年': true,
  			'2017年': false,
  			'2018年': false,
  			'2019年': false,
  			'2020年': false,
  			'2021年': false
  		},
  		// 设置单选多选模式
  		selectedMode: 'single',
  		orient: 'vertical',
  		top: '10%',
  		left: '0%'
  	},
  	title: {
  		text: '夜间总点次达标率'
  	},
  	tooltip: {
  		trigger: 'item',
  		formatter: '年份：{a}<br/>省份：{b}<br/>值：{c} %'
  	},
  	toolbox: {
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	dataRange: {
  		min: 0,
  		max: 100,
  		x: 'left',
  		y: 'bottom',
  		text: ['高', '低'],
  		calculable: true,
  		inRange: {
  			color: ['#FFFFFF', '#00FF00'],
  			symbolSize: [10, 100]
  		}
  	},
  	series: [{
  			name: '2016年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data2_list2016,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2017年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data2_list2017,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2018年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data2_list2018,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2019年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data2_list2019,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2020年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data2_list2020,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  		{
  			name: '2021年',
  			type: 'map',
  			mapType: 'china',
  			roam: false,
  			data: data2_list2021,
  			itemStyle: {
  				normal: {
  					label: {
  						show: true
  					}
  				},
  				emphasis: {
  					label: {
  						show: true,
  						textStyle: {
  							color: '#800080'
  						}
  					}
  				}
  			}
  		},
  	]
  };
  myChart4.setOption(option4);

  //Proportion of various noise complaints and Ratio of noise complaints to environment
  var myChart5 = echarts.init(document.getElementById('main15'));
  var option5 = {
  	animationDuration: 5000,
  	legend: {
  		orient: 'vertical',
  		right: '0%',
  		top: '20%'
  	},
  	title: {
  		text: '各类噪音投诉占比',
  		subtext: '噪音投诉分类比'
  	},
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
  	},
  	toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	dataset: {
  		source: [
  			['product', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  			['社会生活噪声', 31.9, 60.0, 21.0, 36.6, 39.7, 23.1, 24.0, 53.7, 57.9],
  			['建筑施工噪声', 36.4, 29.0, 50.1, 50.1, 46.1, 43.0, 45.4, 34.2, 33.4],
  			['工业噪声', 20.3, 9.0, 16.9, 10.3, 10.0, 30.1, 26.5, 8.4, 4.5],
  			['交通运输噪声', 11.3, 2.0, 12.0, 3.0, 4.2, 3.8, 4.1, 3.7, 4.2]
  		]
  	},
  	xAxis: {
  		type: 'category'
  	},
  	yAxis: {
  		gridIndex: 0,
  		name: '投诉比(%)',
  		axisLabel: {
  			formatter: '{value} %'
  		}
  	},
  	grid: {
  		top: '50%',
  		right: '15%'
  	},
  	series: [{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			}
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			}
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			}
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			}
  		},
  		{
  			type: 'pie',
  			id: 'pie',
  			radius: '30%',
  			center: ['50%', '25%'],
  			emphasis: {
  				focus: 'self'
  			},
  			label: {
              formatter: '{b}: {d}%'
            },
            encode: {
              itemName: 'product',
              value: '2013年',
              tooltip: '2013年'
            }
  		}
  	]
  };
  myChart5.on('updateAxisPointer', function(event) {
  	const xAxisInfo = event.axesInfo[0];
  	if (xAxisInfo) {
  		const dimension = xAxisInfo.value + 1;
  		myChart.setOption({
  			series: {
  				id: 'pie',
  				label: {
  					formatter: '{b}: {d}%'
  				},
  				encode: {
  					value: dimension,
  					tooltip: dimension
  				}
  			}
  		});
  	}
  });
  myChart5.setOption(option5);

  var myChart6 = echarts.init(document.getElementById('main16'));
  var option6 = {
  	animationDuration: 2000,
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross',
  			crossStyle: {
  				color: '#999'
  			}
  		}
  	},
  	toolbox: {
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	legend: {
  		data: ['噪声投诉量', '噪声投诉量占比']
  	},
  	title: {
  		text: '平台噪音投诉占比'
  	},
  	grid: {
  		left: '15%'
  	},
  	xAxis: [{
  		type: 'category',
  		name: '年份',
  		data: ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  		axisPointer: {
  			type: 'shadow'
  		}
  	}],
  	yAxis: [{
        type: 'value',
        name: '噪声投诉量(件)',
        min: 0,
        max: 1200000,
        interval: 200000,
        axisLabel: {
            formatter: '{value} 件'
        }
    },
    {
        type: 'value',
        name: '噪声投诉量占比',
        min: 0,
        max: 60,
        interval: 10,
        axisLabel: {
            formatter: '{value} %'
        }
    }],
  	series: [{
        name: '噪声投诉量',
        type: 'bar',
        barWidth: 30,
        label: {
            show: true,
            position: 'top'
        },
        tooltip: {
            valueFormatter: function(value) {
                return value + ' 件';
            }
        },
        data: [724638, 811036, 1002833, 522000, 550000, 710000, 531176, 441000, 450000]
    },
    {
        name: '噪声投诉量占比',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
            valueFormatter: function(value) {
                return value + ' %';
            }
        },
        data: [39.2, 56.4, 35.3, 43.9, 42.9, 35.3, 38.1, 41.2, 45.0]
    }]
  };
  myChart6.setOption(option6);

  //Average value of daytime equivalent sound level
  var myChart30 = echarts.init(document.getElementById('main30'));
  var option30 = {
  	animationDuration: 5000,
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
  	},
  	toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	legend: {
  		data: ['全国城市区域', '道路交通']
  	},
  	title: {
  	  text: '昼间等效声级平均值'
  	},
  	grid: {
  		top: '25%',
  		left: '5%',
  		right: '15%',
  		bottom: '10%',
  		containLabel: true
  	},
  	xAxis: {
  		type: 'category',
  		data: ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年']
  	},
  	yAxis: {
  		gridIndex: 0,
  		type: 'value',
  		name: '平均值dB(A)',
  		min: 50,
  		max: 70,
  		interval: 2,
  		axisPointer: {
  			snap: true
  		},
  		axisLabel: {
  			formatter: '{value} dB(A)'
  		}
  	},
  	series: [{
  			name: '全国城市区域',
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			label: {
  				show: true,
  				position: 'top'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' dB(A)';
  				}
  			},
  			data: [54.3, 54.1, 54.1, 54.0, 53.9, 54.4, 54.3, 54.0, 54.1]
  		},
  		{
  			name: '道路交通',
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			label: {
  				show: true,
  				position: 'top'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' dB(A)';
  				}
  			},
  			data: [67.2, 66.9, 67.0, 66.8, 67.1, 67.0, 66.8, 66.6, 66.5]
  		}
  	]
  };
  myChart30.setOption(option30);

  //Distribution proportion of overall level of acoustic environment
  var myChart31 = echarts.init(document.getElementById('main31'));
  var option31 = {
    animationDuration: 5000,
    legend: {
      orient: 'vertical',
  		right: '0%',
  		top: '15%'
    },
    title: {
      text: '全国城市区域声环境总体水平等级分布'
    },
    tooltip: {
      trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
    },
    toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
    dataset: {
      source: [
        ['product', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
        ['一级', 9, 6, 13, 16, 19, 13, 8, 14, 16],
        ['二级', 234, 234, 220, 220, 210, 205, 215, 215, 200],
        ['三级', 72, 86, 84, 84, 90, 99, 92, 93, 102],
        ['四级', 0, 1, 3, 2, 3, 4, 6, 2, 6],
        ['五级', 1, 0, 1, 0, 1, 2, 0, 0, 0]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {
      gridIndex: 0,
      name: '城市数量（座）',
      axisLabel: {
  				formatter: '{value} 座'
  		}
    },
    grid: { top: '50%' },
    series: [
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        top: '5%',
        radius: '25%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2013年}座 ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2013年',
          tooltip: '2013年'
        }
      }
    ]
  };
  myChart31.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']}座 ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart31.setOption(option31);

  var myChart32 = echarts.init(document.getElementById('main32'));
  var option32 = {
    animationDuration: 5000,
    legend: {
      orient: 'vertical',
  		right: '0%',
  		top: '15%'
    },
    title: {
      text: '直辖市、省会城市区域声环境总体水平等级分布'
    },
    tooltip: {
      trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
    },
    toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
    dataset: {
      source: [
        ['product', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
        ['一级', 1, 1, 1, 1, 0, 0, 0],
        ['二级', 22, 20, 18, 15, 19, 18, 19],
        ['三级', 8, 10, 12, 15, 12, 18, 16],
        ['四级', 0, 0, 0, 0, 0, 0, 1],
        ['五级', 0, 0, 0, 0, 0, 0, 0]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {
      gridIndex: 0,
      name: '城市数量（座）',
      axisLabel: {
  				formatter: '{value} 座'
  		}
    },
    grid: { top: '50%' },
    series: [
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        top: '5%',
        radius: '25%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2015年}座 ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2015年',
          tooltip: '2015年'
        }
      }
    ]
  };
  myChart32.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']}座 ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart32.setOption(option32);

  //Distribution proportion of overall level of acoustic environment
  var myChart33 = echarts.init(document.getElementById('main33'));
  var option33 = {
    animationDuration: 5000,
    legend: {
      orient: 'vertical',
  		right: '0%',
  		top: '15%'
    },
    title: {
      text: '全国城市道路交通噪声强度等级分布'
    },
    tooltip: {
      trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
    },
    toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
    dataset: {
      source: [
        ['product', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
        ['一级', 235, 224, 212, 220, 213, 215, 221, 227, 232],
        ['二级', 74, 91, 96, 84, 90, 93, 85, 83, 80],
        ['三级', 2, 6, 9, 11, 19, 13, 15, 13, 9],
        ['四级', 3, 3, 7, 5, 1, 3, 2, 1, 3],
        ['五级', 2, 1, 0, 0, 1, 0, 0, 0, 0]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {
      gridIndex: 0,
      name: '城市数量（座）',
      axisLabel: {
  				formatter: '{value} 座'
  		}
    },
    grid: { top: '50%' },
    series: [
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        top: '5%',
        radius: '25%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2013年}座 ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2013年',
          tooltip: '2013年'
        }
      }
    ]
  };
  myChart33.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']}座 ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart33.setOption(option33);

  var myChart34 = echarts.init(document.getElementById('main34'));
  var option34 = {
    animationDuration: 5000,
    legend: {
      orient: 'vertical',
  		right: '0%',
  		top: '15%'
    },
    title: {
      text: '直辖市、省会城市道路交通噪声强度等级分布'
    },
    tooltip: {
      trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
    },
    toolbox: {
  		show: true,
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
    dataset: {
      source: [
        ['product', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
        ['一级', 9, 14, 11, 11, 10, 15, 18],
        ['二级', 21, 14, 16, 18, 19, 20, 17],
        ['三级', 0, 2, 3, 1, 2, 1, 1],
        ['四级', 1, 1, 1, 1, 0, 0, 0],
        ['五级', 0, 0, 0, 0, 0, 0, 0]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {
      gridIndex: 0,
      name: '城市数量（座）',
      axisLabel: {
  				formatter: '{value} 座'
  		}
    },
    grid: { top: '50%' },
    series: [
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'bar',
        label: {
  				show: true,
  				position: 'top'
  			},
  			tooltip: {
  				valueFormatter: function(value) {
  					return value + ' 座';
  				}
  			},
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        top: '5%',
        radius: '25%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2015年}座 ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '2015年',
          tooltip: '2015年'
        }
      }
    ]
  };
  myChart34.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']}座 ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart34.setOption(option34);

  //Annual compliance rate of national environmental functional areas
  var myChart7 = echarts.init(document.getElementById('main17'));
  var option7 = {
  	animationDuration: 5000,
  	legend: {
  		top: '10%'
  	},
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
  	},
  	toolbox: {
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	title: {
  		text: '年度昼间达标率'
  	},
  	dataset: {
  		source: [
  			['daytime', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  			['0类昼间', 66.0, 77.0, 80.7, 78.6, 76.7, 71.8, 74.0, 75.5],
  			['1类昼间', 87.0, 87.2, 87.3, 87.4, 86.7, 87.4, 86.1, 89.1, 89.9],
  			['2类昼间', 90.8, 91.4, 93.0, 92.5, 92.1, 92.8, 92.5, 94.8, 95.4],
  			['3类昼间', 97.3, 96.5, 97.3, 97.2, 96.7, 97.5, 97.1, 98.9, 98.5],
  			['4a类昼间', 91.9, 91.7, 93.3, 92.6, 73.3, 94.0, 95.3, 97.3, 93.0],
  			['4b类昼间', 91.9, 98.5, 93.8, 95.3, 97.7, 100.0, 95.8, 95.7]
  		]
  	},
  	xAxis: {
  		type: 'category'
  	},
  	yAxis: {
  		gridIndex: 0,
  		name: '达标率(%)',
  		axisLabel: {
  			formatter: '{value} %'
  		},
  		axisPointer: {
  			snap: true
  		}
  	},
  	grid: {
  		top: '25%'
  	},
  	series: [{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		}
  	]
  };
  myChart7.setOption(option7);

  var myChart8 = echarts.init(document.getElementById('main18'));
  var option8 = {
  	animationDuration: 5000,
  	legend: {
  		top: '10%'
  	},
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
  	},
  	toolbox: {
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	title: {
  		text: '年度夜间达标率'
  	},
  	dataset: {
  		source: [
  			['nighttime', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  			['0类夜间', 46.6, 61.1, 64.9, 57.3, 58.3, 56.3, 55.0, 57.4],
  			['1类夜间', 71.1, 72.0, 74.7, 72.8, 73.3, 71.6, 71.4, 75.3, 77.9],
  			['2类夜间', 80.9, 79.8, 83.3, 83.4, 82.5, 82.2, 83.8, 88.1, 89.3],
  			['3类夜间', 88.0, 86.8, 88.1, 88.3, 86.9, 87.6, 88.8, 91.9, 93.1],
  			['4a类夜间', 47.6, 49.4, 50.7, 50.5, 52.0, 51.4, 51.8, 69.2, 66.3],
  			['4b类夜间', 47.6, 35.5, 64.1, 72.1, 71.6, 78.4, 83.3, 81.2]
  		]
  	},
  	xAxis: {
  		type: 'category'
  	},
  	yAxis: {
  		gridIndex: 0,
  		name: '达标率(%)',
  		axisLabel: {
  			formatter: '{value} %'
  		},
  		axisPointer: {
  			snap: true
  		}
  	},
  	grid: {
  		top: '25%'
  	},
  	series: [{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		}
  	]
  };
  myChart8.setOption(option8);

  //Annual compliance rate of monitoring points in various functional areas of municipalities directly under the Central Government and provincial capital cities
  var myChart9 = echarts.init(document.getElementById('main19'));
  var option9 = {
  	animationDuration: 5000,
  	legend: {
  		top: '10%'
  	},
  	title: {
  		text: '监测点次年度昼间达标率'
  	},
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
  	},
  	toolbox: {
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	dataset: {
  		source: [
  			['nighttime', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  			['0类夜间', 58.3, 54.5, 83.3, 66.7, 75.0, 73.7],
  			['1类夜间', 86.0, 83.9, 78.9, 80.0, 81.9, 86.8, 90.3],
  			['2类夜间', 89.0, 90.2, 89.3, 90.7, 88.4, 93.5, 96.8],
  			['3类夜间', 96.8, 97.0, 96.7, 96.2, 96.0, 99.5, 98.4],
  			['4a类夜间', 80.8, 77.8, 84.3, 82.7, 89.0, 91.8, 96.7],
  			['4b类夜间', 100.0, 100.0, 100.0, 100.0, 100.0, 100.0]
  		]
  	},
  	xAxis: {
  		type: 'category'
  	},
  	yAxis: {
  		gridIndex: 0,
  		name: '达标率(%)',
  		axisLabel: {
  			formatter: '{value} %'
  		},
  		axisPointer: {
  			snap: true
  		}
  	},
  	grid: {
  		top: '25%'
  	},
  	series: [{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		}
  	]
  };
  myChart9.setOption(option9);

  var myChart10 = echarts.init(document.getElementById('main20'));
  var option10 = {
  	animationDuration: 5000,
  	legend: {
  		top: '10%'
  	},
  	title: {
  		text: '监测点次年度夜间达标率'
  	},
  	tooltip: {
  		trigger: 'axis',
  		axisPointer: {
  			type: 'cross'
  		}
  	},
  	toolbox: {
  		feature: {
  			dataView: {
  				show: true,
  				readOnly: false
  			},
  			magicType: {
  				show: true,
  				type: ['line', 'bar']
  			},
  			restore: {
  				show: true
  			},
  			saveAsImage: {
  				show: true
  			}
  		}
  	},
  	dataset: {
  		source: [
  			['nighttime', '2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'],
  			['0类夜间', 41.7, 9.1, 50.0, 25.0, 16.7, 31.6],
  			['1类夜间', 68.2, 59.5, 55.9, 54.9, 57.5, 64.0, 75.1],
  			['2类夜间', 75.2, 76.3, 71.5, 72.1, 75.4, 85.7, 88.3],
  			['3类夜间', 80.3, 79.7, 78.7, 76.0, 78.7, 89.9, 91.9],
  			['4a类夜间', 21.4, 18.3, 20.5, 20.2, 22.7, 43.2, 66.3],
  			['4b类夜间', 66.7, 60.0, 50.0, 75.0, 75.0, 75.0]
  		]
  	},
  	xAxis: {
  		type: 'category'
  	},
  	yAxis: {
  		gridIndex: 0,
  		name: '达标率(%)',
  		axisLabel: {
  			formatter: '{value} %'
  		},
  		axisPointer: {
  			snap: true
  		}
  	},
  	grid: {
  		top: '25%'
  	},
  	series: [{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		},
  		{
  			type: 'line',
  			smooth: true,
  			seriesLayoutBy: 'row',
  			emphasis: {
  				focus: 'series'
  			},
  			endLabel: {
  				show: true,
  				position: 'right',
  				formatter: '{a}'
  			},
  			tooltip: {
                valueFormatter: function(value) {
                    return value + ' %';
                }
            }
  		}
  	]
  };
  myChart10.setOption(option10);
