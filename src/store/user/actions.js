
import store from '..';
import action from './action';
// 将传递的action参数引入 
// 将store引入 把action参数传给reducer。

const actions = {
    // p 是页面传来的值
    changeUserInfo(d){
        // 将action的里面对象传递参数
        let act = action.ADD(d);
        // 使用store把action里面的对象 作为参数传递过去
        store.dispatch(act);
    }
}

export default actions;