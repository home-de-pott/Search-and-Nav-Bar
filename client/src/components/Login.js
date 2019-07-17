import React from 'react'

export default function Login(props) {
  return (
    <>
    {props.login.name === '' ? (<img onClick = {props.showLogin} src="https://home-de-potts.s3.us-east-2.amazonaws.com/myAccount.png" height = "40px" />) : (
      <></>
    )}
    {props.login.showLoginScreen ? (<div>Hello</div>) : (<></>)}
    </>
  )
}
