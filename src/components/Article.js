import React from 'react';

function Sidebar(props) {
    const {info} = props
    return (
        <div>
            <h1>ID:<span>{info.id}</span></h1>
            <h1>FirstName:<span>{info.firstname}</span></h1>
            <h1>LastName:<span>{info.lastname}</span></h1>
            <h1>Age:<span>{info.age}</span></h1>
        </div>
    )
}
export default Sidebar