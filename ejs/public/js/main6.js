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
//  tab1
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo',
		height: 580,
		id:'demo',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'title',
					title: '学习名称',
					width: '45%',
					align: 'center',
				}, {
					field: 'num1',
					title: '学习时长（分钟）',
					align: 'center',
					width: '15%'
				}, {
					field: 'four',
					title: '创建时间',
					align: 'center',
					width: '20%',
				}, {
					title: '操作',
					width: '10%',
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
		height: 580,
		id:'demo2',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'name',
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

//tab3
layui.use('table', function() {
	var table = layui.table;
	table.render({
		elem: '#demo3',
		height: 580,
		id:'demo3',
		url: 'js/table_data2.json', //数据接口
		page: true, //开启分页
		limit: 10,
		limits: [10, 15, 20, 25, 30],
		cellMinWidth: 80,
		cols: [
			[ //表头
				{
					field: 'users',
					title: '驾驶员',
					width: '15%',
					align: 'center',
				}, {
					field: 'tel',
					title: '驾驶员电话',
					align: 'center',
					width: '15%'
				}, {
					field: 'num1',
					title: '月度学习时长（分钟）',
					align: 'center',
					width: '20%',
				}, {
					field: 'num2',
					title: '年度学习时长（分钟）',
					align: 'center',
					width: '20%',
				}, {
					title: '操作',
					width: '15%',
					align: 'center',
					toolbar: '#barDemo4'
				}
			]
		]
	});
});