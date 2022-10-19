import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <div className="body">
            <Sidebar />
            <Content />
        </div>
    );
};

export default Main;
