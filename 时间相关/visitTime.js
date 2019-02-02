/* 
根据访问时间判断多久之前访问
timeString格式：2019-01-01 16:20:45
*/
function getVisitTime(timeString) {
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;

  if (timeString == "") {
    return "";
  } else {
    //距离UTC时区1970年1月1日的毫秒数。注意：ios下只能解析“2019/01/01 16:20:45”这种格式
    timeString = timeString.replace(/-/g, "/");
    var timeStamp = Date.parse(timeString);

    var nowTimeStamp = Date.now(); //获取当前时间的时间戳

    var diffValue = nowTimeStamp - timeStamp;

    if (diffValue < 0) {
      return "";
    }

    //参考处用parseInt，这个通常用来解析“127¥”这样的字符串，个人认为Math.trunc（直接去除小数点后的部分）更合适
    var monthCount = Math.trunc(diffValue / month);
    var weekCount = Math.trunc(diffValue / (7 * day));
    var dayCount = Math.trunc(diffValue / day);
    var hourCount = Math.trunc(diffValue / hour);
    var minCount = Math.trunc(diffValue / minute);

    if (monthCount >= 1) {
      return monthCount + "个月前";
    } else if (weekCount >= 1) {
      return weekCount + "周前";
    } else if (dayCount >= 1) {
      return dayCount + "天前";
    } else if (hourCount >= 1) {
      return hourCount + "个小时前";
    } else if (minCount >= 1) {
      return minCount + "分钟前";
    } else {
      return "刚刚";
    }
  }
}

export { getVisitTime };
