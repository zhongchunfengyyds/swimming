import FormatDate from "./util/date";
import consoleStyle from "./util/consoleStyle";
import axios from "axios";
var c = require('child_process');
const Day = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
export default function show(): void {
    c.exec('start  https://api.vvhan.com/api/moyu');
    // axios.get('https://api.apiopen.top/api/sentences').then((res: any) => {
    //     console.log(consoleStyle.yellow, res.data.result.name + '---' + res.data.result.from);
    //     console.log(consoleStyle.green, `今天是${new Date().toLocaleDateString()}, ${Day[new Date().getDay() - 1]}😎`)
    //     console.log(consoleStyle.green, `如果没有算错的，还有${Math.floor(Math.random() * 100)}天你将会被收入到黑洞中`)
    // })
}