$(function() {
	$('body').css('opacity', '1');
	$('.message-cz-win').attr('class', 'message-cz-win animated flipInY');
})

function open_message_cz_win() {
	$('.message-cz-win').css('display', 'block');
	$('.message-cz-win').attr('class', 'message-cz-win animated flipInY');
	//			$('.message-cz-win').addClass("flipInY");
	$('.message-cz-win').removeClass("flipOutY");
	$('html').css('overflow', 'hidden');
	setTimeout(function() {
		$('html').css('overflow-y', 'auto');
	}, 1000);
}

function close_message_cz_win() {
	$('.message-cz-win').removeClass("flipOutX");
	$('.message-cz-win').animate({
		opacity: '1'
	}, 0, function() {
		$('html').css('overflow', 'hidden');
		$('.message-cz-win').addClass("flipOutY");
	});
	setTimeout(function() {
		$('.message-cz-win').css('display', 'none');
		$('html').css('overflow', 'auto');
	}, 700)
}

var data = [{
	"name": 10000,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "重庆市国际会议展览中心",
	"wh": "綦安交办【2017】60号",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "50",
	"ydsc": "20",
	"zdmc": "安全生产事故统计报告制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "张三",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"four": "2016-05-21",
	"level": "AAA",
	"tel": "18376523214"
}, {
	"name": 10001,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "工作通报64",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "21",
	"ydsc": "20",
	"zdmc": "车辆技术管理制度制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "李四",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"level": "AAA",
	"num3": "21",
	"four": "2016-05-21",
	"tel": "18376523214"
}, {
	"name": 10002,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "27",
	"ydsc": "20",
	"zdmc": "交通违法动态信息处理和统计分析制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "老王",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"level": "AAA",
	"num3": "21",
	"four": "2016-05-21",
	"tel": "13337523214"
}, {
	"name": 10003,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "13",
	"ydsc": "20",
	"zdmc": "卫星定位系统监控人员岗位职责及管理制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "张三,老王",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"four": "2016-05-21",
	"tel": "13976525964"
}, {
	"name": 10004,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "70",
	"ydsc": "20",
	"zdmc": "卫星定位系统平台建设、维护及管理制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"wealth": 82830700,
	"users": "小李，老张",
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"four": "2016-05-21",
	"tel": "18376523214"
}, {
	"name": 10005,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "20",
	"ydsc": "20",
	"zdmc": "从业人员安全管理制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "张三",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"four": "2016-05-21",
	"tel": "18376523214"
}, {
	"name": 10005,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "綦汛办【2017】9号",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "80",
	"ydsc": "20",
	"zdmc": "安全生产业务操作规程",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "老李",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"level": "AAA",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"four": "2016-05-21",
	"tel": "18376523214"
}, {
	"name": 10006,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "71",
	"ydsc": "20",
	"zdmc": "安全生产奖惩制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "刘总",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"level": "AAA",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"four": "2016-05-21",
	"tel": "18376523214"
}, {
	"name": 10007,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "60",
	"ydsc": "20",
	"zdmc": "安全生产事故统计报告制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "老李",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"level": "AAA",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"four": "2016-05-21",
	"tel": "18376523214"
}, {
	"name": 10008,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "交应急明电【2017】23号",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "18",
	"ydsc": "20",
	"zdmc": "安全监督检查制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "张三",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"four": "2016-05-21",
	"tel": "18376523214"
}, {
	"name": 10009,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "渝安办〔2017〕72号",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "30",
	"ydsc": "20",
	"zdmc": "安全培训和教育学习制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "老张",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"four": "2016-05-21",
	"tel": "15576529261"
}, {
	"name": 10010,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "90",
	"ydsc": "20",
	"zdmc": "安全培训和教育学习制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "老王",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"four": "2016-05-21",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"tel": "15699396026"
}, {
	"name": 10010,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "90",
	"ydsc": "20",
	"zdmc": "安全培训和教育学习制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "老王",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"four": "2016-05-21",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"tel": "15699396026"
}, {
	"name": 10010,
	"title": "关于2017年1-6月全市安全生产事故情况 的通报",
	"wjlx": "文件通知",
	"location": "公司会议室",
	"wh": "女",
	"time": "2017-12-14 17:56:12",
	"ydzcs": "90",
	"ydsc": "20",
	"zdmc": "安全培训和教育学习制度",
	"addUser": "永泰安全员",
	"logins": 24,
	"users": "老王",
	"wealth": 82830700,
	"classify": "作家",
	"score": 57,
	"one": "2013-12-01",
	"two": "2014-02-05",
	"three": "2015-05-05",
	"four": "2016-05-21",
	"Boolean": "有",
	"num1": "15",
	"num2": "35",
	"num3": "21",
	"level": "AAA",
	"tel": "15699396026"
}];
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo',
		height: 500,
		id: 'demo',
		//url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		data: data,
		cols: [
			[ //表头
				{
					field: 'wealth',
					title: '模板名称',
					width: '20%',
					align: 'center',
				}, {
					field: 'zdmc',
					title: '模板内容',
					align: 'center',
					width: '35%'
				}, {
					field: 'four',
					title: '创建时间',
					align: 'center',
					width: '15%',
				}, {
					title: '操作',
					width: '20%',
					align: 'center',
					toolbar: '#barDemo'
				}
			]
		]
	});
});
//  tab2
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo2',
		height: 500,
		id: 'demo2',
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
					width: '15%',
					align: 'center',
				}, {
					field: 'location',
					title: '内容',
					align: 'center',
					width: '20%'
				}, {
					field: 'num1',
					title: '发送条数',
					align: 'center',
					width: '8%',
				}, {
					field: 'num2',
					title: '成功条数',
					align: 'center',
					width: '8%',
				}, {
					field: 'num3',
					title: '失败条数',
					align: 'center',
					width: '8%',
				}, {
					field: 'four',
					title: '创建时间',
					align: 'center',
					width: '15%',
				}, {
					title: '操作',
					width: '15%',
					align: 'center',
					toolbar: '#barDemo2'
				}
			]
		]
	});
});