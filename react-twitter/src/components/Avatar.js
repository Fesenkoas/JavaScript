import React from 'react'
import { TwitterContext } from '../utils/context'

const Avatar = ({ size }) => {
    return (
        <TwitterContext.Consumer>
            {({user, changeAvatar}) => (
                <img 
                    className={`user-avatar ${size ?? ''}`} 
                    src={user.avatar} alt={user.name} 
                    onClick={() => {
                        const url = prompt('Enter new avatar url');
                        changeAvatar(url);
                    }}
                />
            )}
        </TwitterContext.Consumer>
    )
}

export default Avatar