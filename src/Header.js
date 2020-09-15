import React from 'react'
import "./Header.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue} from './StateProvider'

function Header() {

    const [ {user} , dispatch] = useStateValue();

    return <div className="header">
                <div className="header__left">
                    <FacebookIcon fontSize="large" />
                    <div className="header__input">
                        <SearchIcon />
                        <input type="text" placeholder="Search FB"/>
                    </div>
                </div>

                <div className="header__center">
                    <div className="header__option">
                        < HomeIcon />
                    </div>

                    <div className="header__option">
                        < FlagIcon />
                    </div>

                    <div className="header__option">
                        < SubscriptionsIcon />
                    </div>

                    <div className="header__option">
                        < StorefrontIcon />
                    </div>

                    <div className="header__option">
                        < SupervisedUserCircleIcon />
                    </div>
                </div>

                <div className="header__right">
                    <div className="header__info">
                        <Avatar src={user.photoURL} />
                        <h4> {user.displayName} </h4>
                    </div>

                    <IconButton>
                        < AddIcon/>
                    </IconButton>
                    <IconButton>
                        < ForumIcon />
                    </IconButton>
                    <IconButton>
                        < NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        < ExpandMoreIcon/>
                    </IconButton>
                </div>
    </div>
}

export default Header;
