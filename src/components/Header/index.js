import { FaBars } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiHeart } from "react-icons/ti";
import './index.css'

const Header = () => {
    return (
        <div className="header-section">
            <div className="bookus-section">
                <p className="bookus-head">BookUsNow</p>
                <p className="flex"><IoLocationSharp/>Mumbai,India </p>
            </div>
            <div className="search-section">
                <div className="category">
                <button type="button" className="btn"> <FaBars/>Categories</button>
                <div className="icon">
                <input type="search" className="search" placeholder="DJI phantom"/>
                <BiSearchAlt2/>
                </div>
                </div>
                <ul className="list">
                    <li>Live Shows</li>
                    <li>Streams</li>
                    <li>Movies</li>
                    <li>Plays</li>
                    <li>Events</li>
                    <li>Sports</li>
                    <li>Activities</li>
                </ul>
            </div>
            <div className="signIn-section">
            <div className="favourites-section">
                <TiHeart/>
                <p className="start">Favourites</p>
            </div>
            <button type="button" className="btn-signIn">Sign In</button>
        </div>
        </div>
    )
}

export default Header