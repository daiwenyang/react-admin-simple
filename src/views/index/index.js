import React, { Component } from 'react';
import { Layout } from 'antd';  
import MySlider  from '@/components/slider' 
import MyHeader  from '@/components/header' 
import Crumbs  from '@/components/crumbs' 
import MyMain  from '@/components/main'
import styles from './index.module.scss'

class Index extends Component {
    constructor(props){ 
        super(props) 
        this.state = { 
            onSlidecollapsed: this.props.onSlidecollapsed 
        }; 
    }

    toggle = () => {  
        this.state.onSlidecollapsed()
    }

    render() {
        return (
            <Layout style={{height:'100%'}} className={styles.dashboard}>
                <MySlider></MySlider>
                <Layout>
                    <MyHeader></MyHeader>
                    {/* <Crumbs></Crumbs> */}
                    <MyMain></MyMain>
                </Layout>
            </Layout>
        );
    }
}

export default Index