	// console.log(document.documentElement.getBoundingClientRect());
	//可以查看当前的宽度



	function setRemUnit (){
			var retio = 18.75;
	var viewWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth;

	document.documentElement.style.fontSize = viewWidth / ratio + 'px';
	}
