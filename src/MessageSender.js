import React, {useState} from 'react'
import "./MessageSender.css"
import Avatar from '@material-ui/core/Avatar';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import { useStateValue} from './StateProvider'

function MessageSender() {
    const [ {user} , dispatch] = useStateValue();
    
    const [input , setInput] = useState("");
    const [imageURL , setImageURL] = useState("");

    const handleSubmit = e => {
        
        e.preventDefault();
        setInput("");
        setImageURL("");

    }

    return (
        <div class="messageSender">
            <div class="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input" 
                    placeholder={`What's on ur mind, $(user.displayName)?`} 
                    />

                    <input  
                    value={imageURL} 
                    onChange={(e) => setImageURL(e.target.value)}
                    placeholder="image URL (optional)" 
                    />
                    
                    <button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div class="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamOutlinedIcon style={{color:"red"}}/>
                    <h5>Live Video</h5>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryOutlinedIcon style={{color:"green"}}/>
                    <h5>Photo/Video</h5>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonOutlinedIcon style={{color:"yellow"}}/>
                    <h5>Feeling/Activity</h5>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
