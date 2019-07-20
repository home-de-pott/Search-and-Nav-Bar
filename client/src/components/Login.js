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
  let closeCart = {
    position: 'relative',
    left: '92%',
    height: '15px',
    width: '15px'
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
    {props.login.name === '' ? (<img className = 'loginMichael' onClick = {props.showLogin} src="https://home-de-potts.s3.us-east-2.amazonaws.com/myAccount.png" height = "40px" />) : (
      <span className = 'loginMichael' onClick = {props.showLogin}>{props.login.name}'s Account<img className = 'loginMichael' onClick = {props.showLogin} src="https://home-de-potts.s3.us-east-2.amazonaws.com/loggedIn.png" height = "40px" /></span>
    )}
    {props.login.showLoginScreen ? (<>
      {props.login.name === '' ? (<div style = {cartStyle}>
        <form>
        <img onClick = {props.showLogin} style = {closeCart} src="https://home-de-potts.s3.us-east-2.amazonaws.com/cartx.svg" /> 
          <div className="form-group">
            <label>UserName</label>
            <input onChange = {(e) => setUsername(e.target.value.replace(/[^A-z\s]/g, ''))} value = {username} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange = {(e) => setPassword(e.target.value.replace(/[^A-z\s]/g, ''))} value = {password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          {props.login.error === '' ? (<></>) : (<div style = {{fontSize: '10px', color: 'red'}}>{props.login.error}</div>)}
          </div>
            <img style = {{position: 'relative', left: '10%'}} height = '40px' className = 'loginMichael' onClick = {() => props.userLogin(username, password, 'newAccount')} src="https://home-de-potts.s3.us-east-2.amazonaws.com/register.png" />
            <div style = {{height: '15px'}}></div>
            <img style = {{position: 'relative', left: '10%'}} height = '40px' className = 'loginMichael' onClick = {() => props.userLogin(username, password, 'userLogin')} src="https://home-de-potts.s3.us-east-2.amazonaws.com/login.png" />
        </form>
      </div>) : (<div style = {logoutStyle}>
                  <img onClick = {props.showLogin} style = {{position: 'relative',left: '85%',height: '15px',width: '15px'}} src="https://home-de-potts.s3.us-east-2.amazonaws.com/cartx.svg" /> 
                  <button style = {{backgroundColor: '#f86202', position: 'relative', top: '35%', left: '10%', border: 'black'}} onClick = {props.userLogout} className="btn btn-primary">Logout {props.login.name}</button>
                </div>)}
      </>
      ) : (<></>)}
    </>
  )
}
