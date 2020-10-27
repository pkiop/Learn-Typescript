import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  onClick = () => {
    this.props.dispatchLogIn({
      id: 'zerocho',
      password: '비밀번호',
    })
  }

  onLogout = () => {
    this.props.dispatchLogOut();
  }


  render() {
    const { user } = this.props;
    return (
      <div>
        {user.isLoggingIn
          ? <div>로그인 중</div>
          : user.data
            ? <div>{user.data.nickname}</div>
            : '로그인 해주세요'}
        {!user.data
          ? <button onClick={this.onClick}>로그인</button>
          : <button onClick={this.onLogout}>로그아웃</button>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
}); // reselect 쓸 분은 쓰세요

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (data: {id, password}) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut());
})
export default connect(mapStateToProps, mapDispatchToProps)(App);