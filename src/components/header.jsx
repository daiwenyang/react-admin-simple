import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect  } from 'react-redux'
import { changeSlide,foldSlide } from '../store/actions/slideAction'
import PropTypes from 'prop-types';
const { Header } = Layout;
//构建属性（包括函数），每个页面分开构建
function mapStateToProps(state) {
    return {
        slidecollapsed: state.slideReducer.slidecollapsed
    } 
}
function mapActionToProps(dispatch) {
    return {
        changeSlide: () => dispatch(changeSlide()),
        foldSlide: (bool) => dispatch(foldSlide(bool)),
    }
}
class MyHeader extends Component {
    constructor(props){
        super(props)
    }
    toggle = () => {
        this.props.changeSlide();
        //直接折叠后不展开
        // this.props.foldSlide(true);
    }
    render() {
        let {slidecollapsed} = this.props
        return (
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={ slidecollapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </Header>
        )
    }
}
MyHeader.propTypes = {
    slidecollapsed: PropTypes.bool.isRequired,
    changeSlide: PropTypes.func.isRequired,
    foldSlide: PropTypes.func.isRequired
 }
export default connect(mapStateToProps,mapActionToProps)(MyHeader);