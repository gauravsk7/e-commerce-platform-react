import React from 'react'

import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component{

  // constructor(){            Constructor and react state not required when we use redux
  //   super()

  //   this.state = {
  //     currentUser: null
  //   } 

  // }


  unsubscribeFromAuth = null


  componentDidMount(){             //This is an open subscription, we need to close it when app is unmounted
    
    const { setCurrentUser } = this.props
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth) 

        ;(await userRef).onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,  
            ...snapShot.data()}
          //   ,() => {
          //    console.log(this.state)    //setState is asynchronous, so when logging it in the console include that in a callback
          // }
          )
        })
      }
      else{
        setCurrentUser(userAuth)
      }

    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        {/* <Header currentUser = { this.state.currentUser }/>   This would be used earlier when redux was not being used*/}
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />   
        <Route exact path='/signin'
          render = { () => ( this.props.currentUser ? (<Redirect to='/' />) : ( <SignInAndSignUpPage />  )) }/>
      {/* {component = {SignInAndSignUpPage}} */}
        
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
