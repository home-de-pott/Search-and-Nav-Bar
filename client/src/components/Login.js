import React, { useState } from 'react'

export default function Login(props) {
  let cartStyle = {
    border: '1px solid black',
    position: 'absolute',
    left: '70%',
    width: '400px',
    backgroundColor: 'white',
    padding: '5px',
    zIndex: '100'
  }
  let logoutStyle = {
    border: '1px solid black',
    position: 'absolute',
    width: '200px',
    height: '100px',
    zIndex: '100',
    backgroundColor: 'white',
    left: '70%'
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  () => setCount(count + 1)
  return (
    <>
    {props.login.name === '' ? (<img className = 'loginMichael' onClick = {props.showLogin} src="https://home-de-potts.s3.us-east-2.amazonaws.com/myAccount.png" height = "40px" />) : (
      <span className = 'loginMichael' onClick = {props.showLogin}>{props.login.name}'s Account<img className = 'loginMichael' onClick = {props.showLogin} src="https://home-de-potts.s3.us-east-2.amazonaws.com/loggedIn.png" height = "40px" /></span>
    )}
    {props.login.showLoginScreen ? (<>
      {props.login.name === '' ? (<div style = {cartStyle}>
        <form>
          <div className="form-group">
            <label>UserName</label>
            <input onChange = {(e) => setUsername(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange = {(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          {props.login.error === '' ? (<></>) : (<div style = {{fontSize: '10px', color: 'red'}}>{props.login.error}</div>)}
          </div>
          <button onClick = {() => props.userLogin(username, password, 'newAccount')} className="btn btn-primary">New Account</button>
          <button onClick = {() => props.userLogin(username, password, 'userLogin')} style = {{position: 'relative', left: '50%'}} className="btn btn-primary">Login</button>
        </form>
      </div>) : (<div style = {logoutStyle}>
                   <button style = {{position: 'relative', top: '30%', left: '15%'}} onClick = {props.userLogout} className="btn btn-primary">Logout {props.login.name}</button>
                </div>)}
      </>
      ) : (<></>)}
    </>
  )
}
