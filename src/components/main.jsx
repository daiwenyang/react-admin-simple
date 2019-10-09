import React, { Component } from 'react';
import {Layout} from "antd/lib/index";
import { RenderRoutes } from '../router/utils'
import {menus} from '../router'

const { Content } = Layout;
class MyMain extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <RenderRoutes routes={menus}></RenderRoutes>
                </Content>
            </div>
        )
    }
}
export default MyMain;