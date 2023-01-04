import React from "react";

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weekNumber: 1
        }
    }

    render() {
        return (
            <h1>Week {this.state.weekNumber}</h1>
        );
    }
}

export default TopNav;