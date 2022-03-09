import React, {useState} from 'react';
import "./css/Header.css";
import {Link} from "react-router-dom";
import {auth} from "../firebase";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {useStateValue} from "../StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const handleAuthentication = async () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <div className="header">
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
        <div className="header_search">
            <input className="header_searchInput" type="text"/>
            {/* SEARCH LOGO */}
            <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className="header_option">
                <span className="header_optionLineOne">Hello {!user ? "Guest" : user?.email}</span>
                <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
            </div>
            </Link>
            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>
            <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header