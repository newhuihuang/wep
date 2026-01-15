// 动态计算 vh 高度
function setVhUnit() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
  
  window.addEventListener('resize', setVhUnit);
  setVhUnit();
  
  