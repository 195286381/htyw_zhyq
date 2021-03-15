// 人员情况的饼图呈现.
;(function(){
	// 初始化元素.
	var selectEle = '';
	// 总人数
	var totalNumber = 3000;
	// 博士总人数
	var bsNumber = 56;
	// 硕士总人数
	var ssNumber = 500;
	// 专业技术人员
	var zyjsryNumber = 1700;
	// 高级以上职称
	var gjyszcNumber = 150;
	// 政府特殊津贴专家
	var zftsjtNumber = 22;
	// 中国航天基金将专家
	var zghtjjjzjNumber = 18;

	var infos = [
		{
			id: 'ryqk-bs',
			number: bsNumber,
			total: totalNumber
		},
		{
			id: 'ryqk-ss',
			number: ssNumber,
			total: totalNumber
		},
		{
			id: 'ryqk-zyjsry',
			number: zyjsryNumber,
			total: totalNumber
		},
		{
			id: 'ryqk-gjyszc',
			number: gjyszcNumber,
			total: totalNumber
		},
		{
			id: 'ryqk-zftsjtzj',
			number: zftsjtNumber,
			total: totalNumber
		},
		{
			id: 'ryqk-zghtjjjzj',
			number: zghtjjjzjNumber,
			total: totalNumber
		},
	]

	var initPieFunc = function(info) {
		var id = info.id;
		var number = info.number;
		var total = info.total;

		var chartDom = document.getElementById(id);
		var myChart = echarts.init(chartDom);
		var option;
			option = {
				series: [
					{
						hoverAnimation : false,
						silent:false,
						type: 'pie',
						radius: ['60%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								formatter: function( data ) {
									return '{number|' + number + '}{dw|' + '人'+ '}'
								},

								rich: {
									number: {
										color: '#F8B501',
										fontSize: '1rem'
									},
									dw: {
										fontSize: '.5rem',
										color: '#F8B501'
									}
								},
								position: 'center',
							},

						},
						tooltip: {
							show:false,// 关闭鼠标移上去后显示浮框信息
							trigger:'item',
							confine:true
							},
						labelLine: {
							show: false
						},
						color: ['#0CF1FF', '#06608E', ],
						data: [
							{value: number},
							{value: total - number},
						]
					}
				]
			};
			option && myChart.setOption(option);
	};

	infos.forEach(info => initPieFunc(info));



})();
