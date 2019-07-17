import React from 'react'

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
  const [count, setCount] = useState(0);

  return (
    <>
    {props.login.name === '' ? (<img className = 'loginMichael' onClick = {props.showLogin} src="https://home-de-potts.s3.us-east-2.amazonaws.com/myAccount.png" height = "40px" />) : (
      <></>
    )}
    {props.login.showLoginScreen ? (
      <div style = {cartStyle}>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">UserName</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <button onClick = {() => props.userLogin('newUser')} type="submit" class="btn btn-primary">New Account</button>
          <button onClick = {() => props.userLogin('userLogin')} style = {{position: 'relative', left: '50%'}} type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
      ) : (<></>)}
    </>
  )
}
