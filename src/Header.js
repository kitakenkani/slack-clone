import React from 'react'
import './Header.css'
import { Avatar} from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
function Header() {
    return <div className="header">
        <div className='header__left'>
            {/* Avatars for logged in user */}
            <Avatar
                className="header__avatar"
                alt='Ken'
                src='https://twitter.com/kitakenkani/photo'
            />

            {/* Timer icon */}

            <AccessTimeIcon/>
        </div>
        <div className='header__search'>
            {/* Search icon */}
            <SearchIcon/>
            {/* input */}
            <input placeholder="Chanel 内を検索する"></input>
        </div>
        <div className='header__right'>
            
            <HelpOutlineIcon/>
        </div>

    </div>;
    
}

export default Header
