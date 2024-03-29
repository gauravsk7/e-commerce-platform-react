import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {ReactComponent as Logo} from '../../assets/crown.svg'   //special syntax in React for importing an svg file
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser, hidden}) =>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
)

// const mapStateToProps = ({ user: { currentUser}, cart: { hidden} }) => ({   //advanced syntax for destructuring
//     currentUser,
//     hidden
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)   //connect gives a higher order component