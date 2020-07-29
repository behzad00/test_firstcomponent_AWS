// Include React
// var React = require("react");
import React from 'react';

// Create the Header component
// Notice how the header extends the react base class
// Notice how it uses a render function which specifies what will be displayed by the component

//this is a functional component, we can write it as such:
// const Header2 = (props)=>{
//     return (<h1>I'm a header!</h1>);
// }


//keeping it a react component looks like this:
class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const myName = 'Craig';
        return <h1>Hello, {myName}</h1>;
    }
}


// Export the component back for use in other files
export default Header;
// module.exports = Header;
