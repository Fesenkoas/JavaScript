import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStats } from '../reducers/statsReduser';
import Avatar from './Avatar';

const UserStats = () => {
    const { user, stats } = useSelector(state => state);
    const dispatch = useDispatch();
    //const changeStats = (key, value) => dispatch(changeStatsAction(key, value));

    return (
        <div className="user-stats">
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className="stats">
                <div
                    onClick={() => dispatch(changeStats('followers'))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('followersMin'));
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => dispatch(changeStats('following'))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('followingMin'));
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
}

export default UserStats;
