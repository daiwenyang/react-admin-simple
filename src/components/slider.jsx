import React, { Component } from 'react';
import { Menu, Icon,Layout } from 'antd';
import {connect} from "react-redux"; 
import {menus} from '../router'
import { Link,withRouter } from 'react-router-dom';
const { Sider } = Layout; 

//构建属性
function mapStateToProps(state) {
    return {
        slidecollapsed: state.slideReducer.slidecollapsed
    } 
}
class MySlider extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let { slidecollapsed } = this.props
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={ slidecollapsed } 
            >
                <div className="logo" style={{fontSize:'18px',lineHeight:'40px',color:'#fff'}} >this is logo</div>
                <Menu theme="dark" mode="inline" selectedKeys={[this.props.location.pathname]}>
                    {menus.map(item=>{
                        return (
                            <Menu.Item key={item.path}>
                                <Link to={(item.path) + (item.query || '')}>
                                    <Icon type={item.icon || 'user'} />
                                    <span className="nav-text">{item.name}</span>
                                </Link>
                            </Menu.Item>
                        )
                    })}
                </Menu>
            </Sider>

        )
    }
}
export default connect(mapStateToProps)(withRouter(MySlider)); 