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
	table.render({
		elem: '#demo',
		height: 580,
		id: 'demo',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
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
});
// tab2
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo2',
		height: 580,
		id: 'demo2',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
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
});
// tab3
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo3',
		height: 580,
		id: 'demo3',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
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
});
//tab4
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo4',
		height: 580,
		id: 'demo4',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
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
});
//tab5
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo5',
		height: 580,
		id: 'demo5',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
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
});
//tab6
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo6',
		height: 580,
		id: 'demo6',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
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
});
//tab7
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo7',
		height: 580,
		id: 'demo7',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
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

function returnType(num) {
	return '<div class="progress"><div class="determinate" style="width: ' + num + '%"></div></div><div>&nbsp;'+ num +'%</div>';
}
