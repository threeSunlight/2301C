
// 初始数据
const classList = [
	{ id: 1, name: '刘博文', sex: 0 },
	{ id: 2, name: '杨浩淇', sex: 0 },
	{ id: 3, name: '余道林', sex: 0 },
	{ id: 4, name: '张志辉', sex: 0 },
	{ id: 5, name: '展立业', sex: 0 },
	{ id: 6, name: '赵中阳', sex: 0 },
	{ id: 7, name: '周天龙', sex: 0 },
	{ id: 8, name: '王志阳', sex: 0 },
	{ id: 9, name: '李媛媛', sex: 1 },
	{ id: 10, name: '冯兴微', sex: 1 },
	{ id: 11, name: '张梦佳', sex: 1 },
	{ id: 12, name: '张秋景', sex: 1 },
	{ id: 13, name: '王婷婷', sex: 1 },
	{ id: 14, name: '冯士靖', sex: 0 },
	{ id: 15, name: '付少聪', sex: 0 },
	{ id: 16, name: '佘晗尊', sex: 0 },
	{ id: 17, name: '徐贺翔', sex: 0 },
	{ id: 18, name: '杨子乐', sex: 0 },
	{ id: 19, name: '张赛辉', sex: 0 },
	{ id: 20, name: '曹世豪', sex: 0 },
	{ id: 21, name: '赵晓宁', sex: 0 },
	{ id: 22, name: '曹浩然', sex: 0 },
	{ id: 23, name: '杨晓宇', sex: 0 },
	{ id: 24, name: '张清莲', sex: 1 },
	{ id: 25, name: '李超凡', sex: 0 },
	{ id: 26, name: '曹博文', sex: 0 },
	{ id: 27, name: '韩锡金', sex: 0 },
	{ id: 28, name: '孙健', sex: 0 },
	{ id: 29, name: '丁卓肖', sex: 0 },
	{ id: 30, name: '陈亚东', sex: 0 },
	{ id: 31, name: '王凯', sex: 0 },
	{ id: 32, name: '裴丽珂', sex: 1 },
	{ id: 33, name: '李炎沛', sex: 0 },
];

// 复制一个数据,我们用于选择数据,修改数组使用,是否选中,移除
let copylist = [...classList]

// 最大和最小的限制 Math.random() * (maxs - mins) + mins
// 1. 获取dom元素的ul
let ul = document.getElementsByTagName('ul')[0];

// 2. 获取天选人内容区域
let selectedName = document.getElementById('selecteName');

//3. 获取日期的放置dom
let dateDom = document.getElementsByClassName('header_title')[0];

// 4. 单人点名dom
let buttonOne = document.getElementsByName('one')[0];

// 6. 双人点名dom
let buttonTwo = document.getElementsByName('two')[0];

// 7. 男生点名dom
let buttonMan = document.getElementsByName('man')[0];

// 8. 女生点名dom
let buttonWoman = document.getElementsByName('woman')[0];

// 9.  放置男生的空数组
let manArray = [];
// 10. 放置女生的空数组
let womanArray = [];
// 11. 放置定时器
let timer; 

/****
 * 男生下标和女生下标,在数组变化的会发生变化,所以我们需要根据处理后的情况进行变化
 */

 function getGirlAndMan(list) {
	list.forEach((item) => {
		if (item.sex === 0) {
			manArray.push(item);
		} else {
			womanArray.push(item);
		}
	});
}
getCurrentTime()
/***
 * 实时更新时间
 */
setInterval(() => {
	getCurrentTime();
}, 1000);

/**
 * 获取当前时间
 */
function getCurrentTime() {
	// 格式化年月日
	var times = dateFormat();
	// 渲染至页面
	dateDom.innerText = '\u65F6\u95F4: '.concat(times);
}

/**封装日期的函数 */
function dateFormat() {
	var dt = new Date();
	var y = dt.getFullYear();
	var m = (dt.getMonth() + 1 + '').padStart(2, '0');
	var d = (dt.getDate() + '').padStart(2, '0');
	var hh = (dt.getHours() + '').padStart(2, '0');
	var mm = (dt.getMinutes() + '').padStart(2, '0');
	var ss = (dt.getSeconds() + '').padStart(2, '0');
	// yy-mm-dd hh:mm:ss
	// 可以根据需要输出相对应的时间格式
	return ''
		.concat(y, '/')
		.concat(m, '/')
		.concat(d, ' ')
		.concat(hh, ':')
		.concat(mm, ':')
		.concat(ss);
}

renderDom();
// 渲染列表数据
function renderDom() {
	ul.innerHTML = ""
	classList.forEach((element) => {
		let li = document.createElement('li');
		li.innerText = element.name;
		li.style.backgroundImage = randomColor()
		ul.appendChild(li);
	});
}

/***
 * 随机数
 * @params  array 数组
 */
function randomNum(array) {
	let maxs = array.length;
	let mins = 0;
	return Math.floor(Math.random() * (maxs - mins) + mins);
}

/**
 * 单人点名
 * 需求: 1.点击开始,如果是单人点名,变成停止,点击停止,变成单人点名
 *      2. 点击后,左侧一直闪动,让他变成闪烁,停止点击后,停止闪烁
 * 想法: 1.设置一个定时器,规定时间变化,停止后清空定时器
 */

/***
 * 清空定时器
 */
function endClearInterval() {
	if (timer) {
		clearInterval(timer)
	}
}

/**
 * 开启定时器,并赋值
 */
function startInterval() {
	timer = setInterval(() => {
		renderDom()
	}, 500);
}

/**
 * 删除数据,修改原生数组
 */

function delteStudentsList(delId) {
	copylist = copylist.filter(item => item.id != delId)
}
/***
 * 单人点名
 */
function handlerOne() {
	// 随机数
	// 存放定时器
	endClearInterval()
	// 做了一层双保险,保证定时器一定会清空
	// 条件判断: undefind取反为true,不取反为false
	//  如果是undefind就程序往下走,直接进行
	if (buttonOne.innerText == '单人点名') {
		buttonOne.innerText = '停止';
		startInterval()
	} else {
		endClearInterval()
		buttonOne.innerText = '单人点名';
		let random = randomNum(copylist);
		selectedName.style.backgroundImage = randomColor()
		selectedName.innerText = copylist[random].name;
		delteStudentsList(copylist[random].id)
	}
}


function delTwoStudents(oneId,twoId) {
	copylist=copylist.filter(item => item.id != oneId).filter(item => item.id != twoId)
}
//双人点名
function handlerTwo() {
	endClearInterval()
	if (buttonTwo.innerText == '双人点名') {
		startInterval()
		buttonTwo.innerText = '停止';
	} else {
		endClearInterval()
		buttonTwo.innerText = '双人点名';
		let random = randomNum(copylist);
		let random1 = randomNum(copylist);
		selectedName.style.backgroundImage = randomColor()
		selectedName.innerText = copylist[random].name + ', ' + copylist[random1].name;	
		/***多人删除的时候,我们会出现下标修改的问题,所以最终通过id删除数据 ,存放了两个人的信息*/
		delTwoStudents(copylist[random].id, copylist[random1].id)
	}
}

//男生点名
// 1. 整理出属于男生的数组
// 属于女生的数组也能整理出来
// 2. 从男生数组中获取随机数
function handlerMan() {
	getGirlAndMan(copylist)
	endClearInterval()
	if (buttonMan.innerText == '男生点名') {
		startInterval()
		buttonMan.innerText = '停止';
	} else {
		endClearInterval()
		buttonMan.innerText = '男生点名';
		let random = randomNum(manArray);
		selectedName.style.backgroundImage = randomColor()
		selectedName.innerText = manArray[random].name;
		/***一个男生,被点名过,我们需要把他从原始中清除掉 */
		delteStudentsList(manArray[random].id)
	}
}

// 女生点名
function handlerWoman() {
	getGirlAndMan(copylist)
	endClearInterval()
	if (buttonWoman.innerText == '女生点名') {
		startInterval()
		buttonWoman.innerText = '停止';
	} else {
		endClearInterval()
		buttonWoman.innerText = '女生点名';
		let random = randomNum(womanArray);
		selectedName.style.backgroundImage = randomColor()
		selectedName.innerText = womanArray[random].name;
		delteStudentsList(womanArray[random].id)
	}
}

/**rgb颜色随机数 */
function randomParams() {
    return Math.floor(Math.random() * 256);
}

/**渐变颜色随机数 */
function randomColor() {
	var start = randomParams();
    var end = randomParams();
    var color = "linear-gradient(to right, rgb(".concat(start, ",").concat(randomParams(), ",").concat(randomParams(), "), rgb(").concat(end, ",").concat(randomParams(), ",").concat(randomParams(), "))");
    return color;
}



