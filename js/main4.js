$(function() {
			$('body').css('opacity', '1');
		})
		laydate.render({
			elem: '#date'
		});
		laydate.render({
			elem: '#date2'
		});
layui.use('table', function() {
	var table = layui.table;
	var data = [{
			"name": 10000,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"重庆市国际会议展览中心",
			"wh": "綦安交办【2017】60号",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "50",
			"ydsc": "20",
			"zdmc":"安全生产事故统计报告制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"张三",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"four":"2016-05-21",
			"level":"AAA",
			"tel":"18376523214"
		},{
			"name": 10001,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "工作通报64",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "21",
			"ydsc": "20",
			"zdmc":"车辆技术管理制度制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"李四",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"level":"AAA",
			"num3":"21",
			"four":"2016-05-21",
			"tel":"18376523214"
		},{
			"name": 10002,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "27",
			"ydsc": "20",
			"zdmc":"交通违法动态信息处理和统计分析制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"老王",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"level":"AAA",
			"num3":"21",
			"four":"2016-05-21",
			"tel":"13337523214"
		},{
			"name": 10003,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "13",
			"ydsc": "20",
			"zdmc":"卫星定位系统监控人员岗位职责及管理制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"张三,老王",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"four":"2016-05-21",
			"tel":"13976525964"
		},{
			"name": 10004,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "70",
			"ydsc": "20",
			"zdmc":"卫星定位系统平台建设、维护及管理制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"wealth": 82830700,
			"users":"小李，老张",
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"four":"2016-05-21",
			"tel":"18376523214"
		},{
			"name": 10005,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "20",
			"ydsc": "20",
			"zdmc":"从业人员安全管理制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"张三",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"four":"2016-05-21",
			"tel":"18376523214"
		},{
			"name": 10005,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "綦汛办【2017】9号",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "80",
			"ydsc": "20",
			"zdmc":"安全生产业务操作规程",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"老李",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"level":"AAA",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"four":"2016-05-21",
			"tel":"18376523214"
		},{
			"name": 10006,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "71",
			"ydsc": "20",
			"zdmc":"安全生产奖惩制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"刘总",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"level":"AAA",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"four":"2016-05-21",
			"tel":"18376523214"
		},{
			"name": 10007,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "60",
			"ydsc": "20",
			"zdmc":"安全生产事故统计报告制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"老李",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"level":"AAA",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"four":"2016-05-21",
			"tel":"18376523214"
		},{
			"name": 10008,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "交应急明电【2017】23号",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "18",
			"ydsc": "20",
			"zdmc":"安全监督检查制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"张三",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"four":"2016-05-21",
			"tel":"18376523214"
		},{
			"name": 10009,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "渝安办〔2017〕72号",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "30",
			"ydsc": "20",
			"zdmc":"安全培训和教育学习制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"老张",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"four":"2016-05-21",
			"tel":"15576529261"
		},{
			"name": 10010,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "90",
			"ydsc": "20",
			"zdmc":"安全培训和教育学习制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"老王",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"four":"2016-05-21",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"tel":"15699396026"
		},{
			"name": 10010,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "90",
			"ydsc": "20",
			"zdmc":"安全培训和教育学习制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"老王",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"four":"2016-05-21",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"tel":"15699396026"
		},{
			"name": 10010,
			"title":"关于2017年1-6月全市安全生产事故情况 的通报",
			"wjlx": "文件通知",
			"location":"公司会议室",
			"wh": "女",
			"time": "2017-12-14 17:56:12",
			"ydzcs": "90",
			"ydsc": "20",
			"zdmc":"安全培训和教育学习制度",
			"addUser":"永泰安全员",
			"logins": 24,
			"users":"老王",
			"wealth": 82830700,
			"classify": "作家",
			"score": 57,
			"one":"2013-12-01",
			"two":"2014-02-05",
			"three":"2015-05-05",
			"four":"2016-05-21",
			"Boolean":"有",
			"num1":"15",
			"num2":"35",
			"num3":"21",
			"level":"AAA",
			"tel":"15699396026"
		}];
	table.render({
		elem: '#demo',
		height: 500,
		id: 'demo',
		////url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		data: data,
		cols: [
			[ //表头
				{
					field: 'time',
					title: '检查日期',
					width: '20%',
					align: 'center',
				}, {
					field: 'location',
					title: '检查地点',
					align: 'center',
					width: '15%',
				}, {
					field: 'addUser',
					title: '检查人',
					align: 'center',
					width: '15%',
				}, {
					field: 'ydzcs',
					title: '提醒次数',
					align: 'center',
					width: '10%'
				}, {
					title: '完成进度',
					align: 'center',
					width: '10%',
					templet: '<div>{{returnType(d.ydzcs)}}</div>'
				}, {
					title: '操作',
					width: '20%',
					align: 'center',
					toolbar: '#barDemo'
				}
			]
		]
	});
	table.render({
		elem: '#demo2',
		height: 500,
		id: 'demo2',
		////url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		data: data,
		cols: [
			[ //表头
				{
					field: 'time',
					title: '日期',
					width: '20%',
					align: 'center',
				}, {
					field: 'location',
					title: '地点',
					align: 'center',
					width: '15%'
				}, {
					field: 'classify',
					title: '主持人',
					align: 'center',
					width: '8%',
				}, {
					field: 'users',
					title: '参会人员',
					align: 'center',
					width: '10%'
				}, {
					field: 'ydzcs',
					title: '提醒次数',
					align: 'center',
					width: '5%'
				}, {
					field: 'time',
					title: '创建时间',
					align: 'center',
					width: '15%'
				}, {
					title: '完成进度',
					align: 'center',
					width: '10%',
					templet: '<div>{{returnType(d.ydzcs)}}</div>'
				}, {
					title: '操作',
					width: '15%',
					align: 'center',
					toolbar: '#barDemo2'
				}
			]
		]
	});
	table.render({
		elem: '#demo3',
		height: 500,
		id: 'demo3',
		//url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		data: data,
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'name',
					title: '车牌号',
					width: '8%',
					align: 'center',
				}, {
					field: 'location',
					title: '车辆类型',
					align: 'center',
					width: '8%'
				}, {
					field: 'addUser',
					title: '计划年审时间',
					align: 'center',
					width: '10%',
				}, {
					field: 'one',
					title: '本年度第一次二维维护时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'two',
					title: '本年度第二次二维维护时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'three',
					title: '本年度第三次二维维护时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'four',
					title: '本年度第四次二维维护时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'ydzcs',
					title: '提醒次数',
					align: 'center',
					width: '5%'
				}, {
					title: '完成进度',
					align: 'center',
					width: '8%',
					templet: '<div>{{returnType(d.ydzcs)}}</div>'
				}, {
					title: '操作',
					width: '8%',
					align: 'center',
					toolbar: '#barDemo3'
				}
			]
		]
	});
	table.render({
		elem: '#demo4',
		height: 500,
		id: 'demo4',
		//url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		data: data,
		cols: [
			[ //表头
				{
					field: 'title',
					title: '标题',
					width: '25%',
					align: 'center',
				}, {
					field: 'time',
					title: '计划时间',
					align: 'center',
					width: '25%'
				}, {
					title: '完成进度',
					align: 'center',
					width: '15%',
					templet: '<div>{{returnType(d.ydzcs)}}</div>'
				}, {
					title: '操作',
					width: '25%',
					align: 'center',
					toolbar: '#barDemo4'
				}
			]
		]
	});
	table.render({
		elem: '#demo5',
		height: 500,
		id: 'demo5',
		//url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		data: data,
		cols: [
			[ //表头
				{
					field: 'title',
					title: '标题',
					width: '30%',
					align: 'center',
				}, {
					field: 'time',
					title: '创建时间',
					align: 'center',
					width: '30%'
				}, {
					title: '完成进度',
					align: 'center',
					width: '10%',
					templet: '<div>{{returnType(d.ydzcs)}}</div>'
				}, {
					title: '操作',
					width: '20%',
					align: 'center',
					toolbar: '#barDemo5'
				}
			]
		]
	});
	table.render({
		elem: '#demo6',
		height: 500,
		id: 'demo6',
		//url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		data: data,
		cols: [
			[ //表头
				{
					field: 'title',
					title: '标题',
					width: '25%',
					align: 'center',
				}, {
					field: 'four',
					title: '计划时间',
					align: 'center',
					width: '20%'
				}, {
					field: 'three',
					title: '创建时间',
					align: 'center',
					width: '20%'
				}, {
					title: '完成进度',
					align: 'center',
					width: '10%',
					templet: '<div>{{returnType(d.ydzcs)}}</div>'
				}, {
					title: '操作',
					width: '20%',
					align: 'center',
					toolbar: '#barDemo6'
				}
			]
		]
	});
	table.render({
		elem: '#demo7',
		height: 500,
		id: 'demo7',
		//url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		data:data,
		cols: [
			[ //表头
				{
					field: 'title',
					title: '标题',
					width: '20%',
					align: 'center',
				}, {
					field: 'users',
					title: '带队人',
					align: 'center',
					width: '8%'
				}, {
					field: 'four',
					title: '活动时间',
					align: 'center',
					width: '12%'
				}, {
					field: 'Boolean',
					title: '活动图片',
					align: 'center',
					width: '5%'
				}, {
					field: 'location',
					title: '地址',
					align: 'center',
					width: '20%'
				}, {
					field: 'three',
					title: '创建时间',
					align: 'center',
					width: '12%'
				}, {
					title: '操作',
					width: '13%',
					align: 'center',
					toolbar: '#barDemo7'
				}
			]
		]
	});
});
//tab7

function returnType(num) {
	return '<div class="progress"><div class="determinate" style="width: ' + num + '%"></div></div><div>&nbsp;'+ num +'%</div>';
}
