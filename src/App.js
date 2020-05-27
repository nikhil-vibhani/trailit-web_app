import React from 'react';
import { Input, Icon, Modal, Button, Upload, Select, Switch, List, message, Avatar, Spin, Rate, Menu, Dropdown } from 'antd';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './containers/DefaultLayout';
import 'antd/dist/antd.css';
import './App.css';
import './bootstrap.min.css'

import reqwest from 'reqwest';

import InfiniteScroll from 'react-infinite-scroller';


const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Subscription</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#">Logout</a>
    </Menu.Item>
  </Menu>
);

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent'];
class App extends React.Component {

  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  // Followers List Start

  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  // Followers List End


  state = {
    modal2Visible: false,
  };

  setModal2Visible(e, modal2Visible) {
    e.preventDefault();
    this.setState({ modal2Visible });
  }

  render() {

    const { value } = this.state;

    return (
      <div>

        {/* History start */}

        

        {/* PROFILE PAGE START */}

        <div className="container py-5 profile-page">
          <div className="side-spacing">
            <h1 className="my-5">My Profile</h1>
            <div className="row profile-detail">
              <div className="col-xl-4 left-col offset-xl-1">
                <div className="profile-photo">
                  <img src={require(`./images/blank-user.png`)} />
                  <a className="edit-photo" href="">
                    <Upload>
                      <Icon type="edit" theme="filled" />
                    </Upload>
                  </a>
                </div>
                <div className="profile-text">
                  <div className="name">Hennry Mark</div>
                  <div className="email">hennrymark@gmail.com</div>
                </div>
              </div>
              <div className="col-xl-7 right-col d-flex">
                <div className="follow">
                  <div className="count">123</div>
                  <p>Followers</p>
                </div>
                <div className="follow">
                  <div className="count">321</div>
                  <p>Following</p>
                </div>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Email Id:</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="" />
                    <button type="submit" className="btn-blue ml-5" onClick={(e) => this.setModal2Visible(e,
                      true)}>change</button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 pt-5">
                <button className="cyan">Save</button>
              </div>
            </form>
          </div>
        </div>

        {/* FOLLOWERS LIST START */}

        <div className="container mt-5 follow-list">
          <div className="side-spacing">
            <div className="page-title mb-4 mb-lg-5">
              <h1>My Profile >> <span>123 Followers</span></h1>
            </div>
            <div className="demo-infinite-container">
              <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={this.handleInfiniteOnLoad}
                hasMore={!this.state.loading && this.state.hasMore}
                useWindow={false}
              >
                <List
                  dataSource={this.state.data}
                  renderItem={item => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={item.name.last}
                        description={item.email}
                      />
                      <button className="cyan">Remove</button>
                    </List.Item>
                  )}
                >
                  {this.state.loading && this.state.hasMore && (
                    <div className="demo-loading-container">
                      <Spin />
                    </div>
                  )}
                </List>
              </InfiniteScroll>
            </div>
          </div>
        </div>

        {/* POP UP START */}

        <div className="change-password">
          <Modal className="change-password" width="800px" title="Change Password" centered visible={this.state.modal2Visible}
            onOk={(e) => this.setModal2Visible(e, false)}
            onCancel={(e) => this.setModal2Visible(e, false)}
          >
            <div className="form-group">
              <label>Old Password:</label>
              <input type="password" placeholder="" />
            </div>
            <div className="form-group">
              <label>New Password:</label>
              <input type="password" placeholder="" />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" placeholder="" />
            </div>
          </Modal>
        </div>

        {/* SUBSCRIPTION START */}

        <div className="container mt-5 subscription">
          <div className="side-spacing">
            <div className="page-title">
              <h1>Subscription</h1>
              <button className="cyan">Add Subscription</button>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="box">
                  <a href="" className="media">
                    <img className="poster" src={require(`./images/site1.png`)} />
                  </a>
                  <p className="title">Neque lorem quisquam dolorem ipsum dummy</p>
                  <div className="line"></div>
                  <div className="offer">
                    <div className="offer">
                      <span>Free</span>
                      <Switch defaultChecked onChange={onChange} />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="box">
                  <a href="" className="media">
                    <img className="poster" src={require(`./images/site1.png`)} />
                  </a>
                  <p className="title">Neque lorem quisquam dolorem ipsum dummy</p>
                  <div className="line"></div>
                  <div className="offer">
                    <div className="offer">
                      <span>Free</span>
                      <Switch defaultChecked onChange={onChange} />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="box">
                  <a href="" className="media">
                    <img className="poster" src={require(`./images/site1.png`)} />
                  </a>
                  <p className="title">Neque lorem quisquam dolorem ipsum dummy</p>
                  <div className="line"></div>
                  <div className="offer">
                    <span>Free</span>
                    <Switch defaultChecked onChange={onChange} />
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADD SUBSCRIPTION START */}

        <div className="container mt-5 add-subscription">
          <div className="side-spacing">
            <div className="page-title">
              <h1>Subscription >> <span>Add Subscription</span></h1>
            </div>

            <div className="row mt-5 align-items-end">
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="box">
                  <h2>Plan name</h2>
                  <div className="amount">
                    00.00<span>/$</span>
                  </div>
                  <p className="f-18 align-self-start font-weight-bold">Details</p>
                  <p className="f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed leo lorem. Nullam
              vestibulum turpis turpis, a rutrum dolor consequat eget.</p>
                  <div className="line"></div>
                  <div className="offer">
                    <div className="offer">
                      <span>Free</span>
                      <Switch defaultChecked onChange={onChange} />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="box">
                  <h2>Plan name</h2>
                  <div className="amount">
                    00.00<span>/$</span>
                  </div>
                  <p className="f-18 align-self-start font-weight-bold">Details</p>
                  <p className="f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed leo lorem. Nullam
              vestibulum turpis turpis, a rutrum dolor consequat eget.</p>
                  <div className="line"></div>
                  <div className="offer">
                    <div className="offer">
                      <span>Free</span>
                      <Switch defaultChecked onChange={onChange} />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="box">
                  <h2>Plan name</h2>
                  <div className="amount">
                    00.00<span>/$</span>
                  </div>
                  <p className="f-18 align-self-start font-weight-bold">Details</p>
                  <p className="f-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed leo lorem. Nullam
              vestibulum turpis turpis, a rutrum dolor consequat eget.</p>
                  <div className="line"></div>
                  <div className="offer">
                    <div className="offer">
                      <span>Free</span>
                      <Switch defaultChecked onChange={onChange} />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <button className="cyan">Add More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Give Review START */}

        <div className="container py-5 give-review">
          <div className="side-spacing icon-background">
            <h1 className="mt-5 mb-4">Give your review</h1>
            <div className="mb-5 d-flex flex-column">
              <Rate character={<Icon type="smile" />} tooltips={desc} onChange={this.handleChange} value={value} />
              {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </div>
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Email Id:</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <textarea placeholder="" ></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 pt-5">
                <button className="cyan">Submit</button>
              </div>
            </form>
          </div>

          <div className="thanks mt-5 pt-5">
            <img src={require(`./images/smile-yellow.svg`)} />
            <p>Thanks for the review</p>
            <button className="cyan">GO TO HOME</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;