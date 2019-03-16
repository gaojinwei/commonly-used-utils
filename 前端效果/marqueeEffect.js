/* 单条信息轮播效果 */

//传参：单条信息的高度
function startScroll(infoHeight) {
  //todo  轮播信息需要复制一次，否则达不到循环效果
  //实现方式为不停设置scrollTop，如果信息不复制，最后一条信息上移后，
  //无法做到紧跟着滑出第一条，视觉效果断层。
  let container = document.querySelector(".container");
  container.innerHTML += container.innerHTML;
  function scrollABit() {
    //当前上滑到哪
    let currentScrollTop = container.scrollTop;
    //所有信息实际高度
    let infosHeight = container.scrollHeight / 2;
    //如果已经全部播过，重置并且立即下次滑动，否则上滑一点，并且判断是否
    //当条信息正在展示，如果是，停顿稍长再进行下次滑动。
    if (currentScrollTop == infosHeight) {
      container.scrollTop = 0;
      setTimeout(scrollABit, 0);
    } else {
      container.scrollTop++;
      setTimeout(scrollABit, currentScrollTop % infoHeight ? 10 : 1500);
    }
  }
  scrollABit();
}
