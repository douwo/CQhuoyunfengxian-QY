$(document).ready(function() {
	$('body').css('opacity', '1');
	$('img').attr('draggable', 'false');
	$('.str1').liMarquee({
		direction: 'up',
	});
	$('.str2').liMarquee({
		direction: 'up'
	});
	$('.one-card ul li').mouseenter(function() {
		$(this).find("img").css('transform', 'rotateY(360deg) scale(1.2) translate(5px,2px)');
		$(this).find('.users-color').css('color', '#eee').css('box-shadow', '2px 2px 10px 0 #eee inset,-2px -2px 10px 0 #099 inset').css('text-shadow', '1px 1px 7px #333');
	})
	$('.one-card ul li').mouseleave(function() {
		$(this).find("img").css('transform', 'rotateY(0deg) scale(1.0) translate(0)');
		$(this).find('.users-color').css('text-shadow', 'none').css('color', '#ccc').css('box-shadow', 'none');
	})
	$('.one-card ul li').on('click', function() {
		$(this).addClass('users-scale');
		setTimeout(function() {
			$('.users-scale').removeClass('users-scale');
		}, 150)
	})
	//layer图片弹出
	//	$('#pic').on('click', function() {
	//		var vm = 'images/zhengjian.png';
	//		parent.layer.open({
	//			type: 1,
	//			title: false,
	//			closeBtn: 1,
	//			area: ['auto', 'auto'],
	//			skin: 'layui-layer-nobg', //没有背景色
	//			shade: 0.3,
	//			shadeClose: false,
	//			anim: 2,
	//			content: '<img id="pop_pic" width="450px" height="290px" src="' + vm + '" />',
	//			scrollbar: false,
	//			maxWidth: '600px',
	//			maxHight: '500px',
	//			move: '#pop_pic',
	//			moveOut: true,
	//			resize: false,
	//		});
	//	})

//		$('#pic').on('click',function(){
//			if($('#pic').hasClass('pic-no')){
//				$('#pic').attr('class','pic-yes');
//			}else{
//				$('#pic').attr('class','pic-no');
//			}
//		})

	$('#pic').on('click', function() {
		if($('#pic').hasClass('pic-no')) {
			parent.layer.alert('你还没有上传安全资质证书，是否现在上传？', {
				btn: ['现在上传', '稍后再说'],
				title: '提示',
				skin: 'layer-Style',
				closeBtn: 1,
				icon: 5,
				yes: function(index) {
					parent.layer.close(index);
					parent.layer.msg('安全资质证书', {
						time: 0,
						closeBtn: 1,
						title: '上传安全资质证书',
						shade: 0.3,
						skin: 'layer-Style2',
						content: '<button class="blue-text circle gray users-layer-upload waves-effect waves-light" onclick="upload1()">' +
							'<span class="fa fa-cloud-upload fa-3x blue-text"></span>' +
							'<br />上传' + 
							'</button>'
					});
				}
			});
		} else {
			parent.layer.open({
				type: 1,
				title: false,
				closeBtn: 1,
				area: ['auto', 'auto'],
				skin: 'layui-layer-nobg', //没有背景色
				shade: 0.3,
				shadeClose: false,
				anim: 2,
				content: '<img id="pop_pic" class="pic-yes" width="450px" height="290px" src="images/yes.jpg" />',
				scrollbar: false,
				maxWidth: '600px',
				maxHight: '500px',
				move: '#pop_pic',
				moveOut: true,
				resize: false,
			});
		}
	})

	var days = {
		title: {
			text: '告警、隐患趋势图',
			//						subtext: '纯属虚构',
			textStyle: {
				fontSize: 20,
			},
			x: 'center',
			y: 'top',
			textAlign: 'center',
		},
		color: ['red', 'orange'],
		tooltip: {
			trigger: 'axis',
		},
		legend: {
			data: ['告警数量', '隐患数量'],
			x: "right",
			y: 'top'
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['2018-01-09', '2018-01-10', '2018-01-11', '2018-01-12', '2018-01-13', '2018-01-14', '2018-01-15',
				'2018-01-16', '2018-01-17', '2018-01-18', '2018-01-19', '2018-01-20', '2018-01-21', '2018-01-22',
				'2018-01-23', '2018-01-24', '2018-01-25', '2018-01-26', '2018-01-27', '2018-01-28', '2018-01-29',
				'2018-01-31', '2018-02-01', '2018-02-02', '2018-02-03', '2018-02-04', '2018-02-05', '2018-02-06',
				'2018-02-07', '2018-02-08', '2018-02-09'
			]
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}'
			}
		},
		series: [{
				name: '告警数量',
				type: 'line',
				data: [31, 11, 25, 13, 32, 13, 10, 31, 11, 25, 13, 32, 13, 10, 31, 11, 25, 13, 32, 13, 10, 31, 11, 25, 13, 32, 13, 10, 13, 32, 13, 10],
				markPoint: {
					data: [{
							type: 'max',
							name: '月最高'
						},
						{
							type: 'min',
							name: '月最低'
						}
					]
				}
			},
			{
				name: '隐患数量',
				type: 'line',
				data: [12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13],
				markPoint: {
					data: [{
						type: 'max',
						name: '月最高'
					}, {
						name: '月最低',
						type: 'min'
					}]
				}
			}
		]
	};

	var months = {
		title: {
			text: '告警、隐患趋势图',
			//						subtext: '纯属虚构',
			textStyle: {
				fontSize: 20,
			},
			x: 'center',
			y: 'top',
			textAlign: 'center',
		},
		color: ['red', 'orange'],
		tooltip: {
			trigger: 'axis',
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}'
			}
		},
		series: [{
				name: '告警数量',
				type: 'line',
				data: [31, 11, 25, 13, 32, 13, 10],
				markPoint: {
					data: [{
							type: 'max',
							name: '月最高'
						},
						{
							type: 'min',
							name: '月最低'
						}
					]
				}
			},
			{
				name: '隐患数量',
				type: 'line',
				data: [12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13, 12, 2, 12, 21, 25, 15, 13],
				markPoint: {
					data: [{
						type: 'max',
						name: '月最高'
					}, {
						name: '月最低',
						type: 'min'
					}]
				}
			}
		]
	};
	var years = {
		title: {
			text: '告警、隐患趋势图',
			//						subtext: '纯属虚构',
			textStyle: {
				fontSize: 20,
			},
			x: 'center',
			y: 'top',
			textAlign: 'center',
		},
		color: ['red', 'orange'],
		tooltip: {
			trigger: 'axis',
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['2014', '2015', '2016', '2017', ]
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				formatter: '{value}'
			}
		},
		series: [{
				name: '告警数量',
				type: 'line',
				data: [1231, 1311, 1025, 1331, 986, 1560, 1233],
				markPoint: {
					data: [{
							type: 'max',
							name: '年最高'
						},
						{
							type: 'min',
							name: '年最低'
						}
					]
				}
			},
			{
				name: '隐患数量',
				type: 'line',
				data: [956, 1022, 1366, 1056, 1363, 1060, 1633],
				markPoint: {
					data: [{
						type: 'max',
						name: '年最高'
					}, {
						name: '年最低',
						type: 'min'
					}]
				}
			}
		]
	};
	var myChart1 = echarts.init(document.getElementById('MyChart'));
	myChart1.setOption(days);

	$('#change-months').bind('click', function() {
		var myChart1 = echarts.init(document.getElementById('MyChart'));
		myChart1.setOption(months);
	});
	$('#change-days').bind('click', function() {
		var myChart1 = echarts.init(document.getElementById('MyChart'));
		myChart1.setOption(days);
	});
	$('#change-years').bind('click', function() {
		var myChart1 = echarts.init(document.getElementById('MyChart'));
		myChart1.setOption(years);
	});
	$(window).resize(function() {
		myChart1.resize();
	});
});
var _title = null;
$('#dropdown2 li:eq(0) a').click(function() {
	var _title = $(this).html();
	$('#down_title').html(_title);
	$('#th2').html('车辆');
	$('#carno0').html('渝AH1585');
	$('#carno1').html('渝AH3557');
	$('#carno2').html('渝AH0581');
	$('#carno3').html('渝AH0670');
	$('#carno4').html('渝AH2997');
	$('#carno5').html('渝AH2711');
	$('#carno6').html('渝AH0915');
	$('#carno7').html('渝AH2771');
	$('#carno8').html('渝AH1335');
	$('#carno9').html('渝AH1585');
})
$('#dropdown2 li:eq(2) a').click(function() {
	var _title = $(this).html();
	$('#down_title').html(_title);
	$('#th2').html('车辆');
	$('#carno0').html('渝AH2521');
	$('#carno1').html('渝AH4557');
	$('#carno2').html('渝AH0621');
	$('#carno3').html('渝AH1270');
	$('#carno4').html('渝AH2397');
	$('#carno5').html('渝AH6951');
	$('#carno6').html('渝AH1055');
	$('#carno7').html('渝AH6971');
	$('#carno8').html('渝AH1235');
	$('#carno9').html('渝AH1085');
})
$('#dropdown2 li:eq(4) a').click(function() {
	var _title = $(this).html();
	$('#down_title').html(_title);
	$('#th2').html('姓名');
	$('#carno0').html('张三');
	$('#carno1').html('李四');
	$('#carno2').html('赵五');
	$('#carno3').html('刘六');
	$('#carno4').html('佳七');
	$('#carno5').html('鸠八');
	$('#carno6').html('邓玖');
	$('#carno7').html('史太龙');
	$('#carno8').html('李明');
	$('#carno9').html('郑鑫');
})

