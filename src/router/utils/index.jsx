/**
* 根据路由信息 例如：
*  const route = {path: '/login', name: '登录', component: Login}
* Route 是渲染路由的标签 exact是否严格匹配， render是自定义渲染内容， 返回要渲染的标签，
* 这里拿出route.component（Login）组件进行渲染。
* 别忘记， 如果有子路有的话， 需要把子路由也传递过去， routes={route.routes},
* 方便下面的组件可以拿到这些信息进行渲染
* 渲染当前组件
*/
import React from 'react';
import {Route,Redirect,Switch} from "react-router-dom";
import NotFound from '@/components/notFound'
export const RouteWithSubRoutes = route => 
    {
        return    (
                <Route
                    path={route.path}
                    exact={route.exact}
                    render={props =>{
                        return (
                            <route.component {...props} routes={route.routes} />
                        )
                    }}
                ></Route>
            );
    }

// 循环渲染当前路由数组中一维数组中的组件
export const RenderRoutes = ({routes}) => {
    let renderRoutes = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
    //处理未登录状况，暂时不用
    // let renderRoutes = [<Redirect to={'/login'} />];
    renderRoutes.push(<Route key="other" render={() => <Redirect to="/404" component={NotFound} />} />)
    return (
        <Switch>
            {renderRoutes}
        </Switch>
        )
};
