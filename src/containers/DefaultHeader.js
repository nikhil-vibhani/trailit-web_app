import React from 'react';
import { Dropdown } from 'antd';

class DefaultHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="header">
                        <a className="logo"><img src={require(`./images/logo.svg`)} /></a>
                        <div className="right-side">
                        <a href="" className="notification"><img src={require(`./images/notification.svg`)} /></a>
                        <a href="" className="user-detail">
                            <Dropdown overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link name" href="#">
                                <img src={require(`./images/blank-user.png`)} />Hennry
                            </a>
                            </Dropdown>
                        </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultHeader;