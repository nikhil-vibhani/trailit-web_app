import React from 'react';
import { Input, Icon, Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class History extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="container mt-5">
                    <div className="side-spacing">
                        <h1>History</h1>
                        <div className="row">
                        <div className="col-lg-5 offset-lg-3 my-4 my-lg-0 search">
                            <Input placeholder="Search your trail..." prefix={<Icon type="search" />} />
                        </div>
                        <div className="col-lg-4 text-center text-lg-right">
                            <a href="" className="top_link"><img src={require(`../images/share.svg`)} />Share</a>
                            <a href="" className="top_link"><img src={require(`../images/delete.svg`)} />Delete</a>
                        </div>
                        </div>
                        <div className="row mt-5">
                        {/* <div className="col-lg-3 col-md-6 mb-5">
                            <div className="box create_new">
                            <a href=""><img className="poster" src={require(`./images/add.svg`)} alt="" /></a>
                            <p className="title">Create New</p>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="box">
                            <a href="" className="media">
                                <img className="play_link" src={require(`../images/play.svg`)} />
                                <img className="poster" src={require(`../images/site1.png`)} />
                            </a>
                            <p className="title">Neque lorem quisquam dolorem ipsum dummy</p>
                            <p className="date align-self-lg-end">Monday, 08-07-2019</p>
                            <div className="line"></div>
                            <div className="bottom-links">
                                <div className="left">
                                <img src={require(`../images/users.svg`)} />
                                <p>12345</p>
                                </div>
                                <div className="right">
                                <img src={require(`../images/public.svg`)} />
                                <Select defaultValue="Public" style={{ width: 85 }} onChange={handleChange}>
                                    <Option value="1">Public</Option>
                                    <Option value="2">Private</Option>
                                </Select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="box">
                            <a href="" className="media">
                                <img className="play_link" src={require(`../images/play.svg`)} />
                                <img className="poster" src={require(`../images/site1.png`)} />
                            </a>
                            <p className="title">Neque lorem quisquam dolorem ipsum dummy</p>
                            <p className="date align-self-lg-end">Monday, 08-07-2019</p>
                            <div className="line"></div>
                            <div className="bottom-links">
                                <div className="left">
                                <img src={require(`../images/users.svg`)} />
                                <p>12345</p>
                                </div>
                                <div className="right">
                                <img src={require(`../images/public.svg`)} />
                                <Select defaultValue="Public" style={{ width: 85 }} onChange={handleChange}>
                                    <Option value="1">Public</Option>
                                    <Option value="2">Private</Option>
                                </Select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="box">
                            <a href="" className="media">
                                <img className="poster" src={require(`../images/site2.png`)} />
                            </a>
                            <p className="title">Neque lorem quisquam dolorem ipsum dummy</p>
                            <p className="date align-self-lg-end">Monday, 08-07-2019</p>
                            <div className="line"></div>
                            <div className="bottom-links">
                                <div className="left">
                                <img src={require(`../images/users.svg`)} />
                                <p>12345</p>
                                </div>
                                <div className="right">
                                <img src={require(`../images/private.svg`)} />
                                <Select defaultValue="Private" style={{ width: 85 }} onChange={handleChange}>
                                    <Option value="1">Public</Option>
                                    <Option value="2">Private</Option>
                                </Select>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default History;