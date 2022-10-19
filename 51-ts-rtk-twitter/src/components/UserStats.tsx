import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStats } from '../reducers/statsReducer';
import { RootState } from '../store/configureStore';
import Avatar from './Avatar';

const UserStats = () => {
    const { user, stats } = useSelector<RootState, RootState>(state => state);
    const dispatch = useDispatch();

    return (
        <div className="user-stats">
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className="stats">
                <div
                    onClick={() => dispatch(changeStats({statsType:'followers', sum: 1}))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats({statsType:'followers', sum: -1}));
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => dispatch(changeStats({statsType:'following', sum: 1}))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats({statsType:'following', sum: -1}));
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
}

export default UserStats;
