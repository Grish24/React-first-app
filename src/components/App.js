import React from 'react';
import Sidebar from './Sidebar';
import infos from '../info.js';

function Menu() {
    return (
        <Sidebar info={infos[0]}/>
    )
}
export default Menu