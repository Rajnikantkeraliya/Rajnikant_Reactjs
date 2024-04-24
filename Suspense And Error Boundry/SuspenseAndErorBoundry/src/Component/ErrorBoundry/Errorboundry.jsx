import React, { Component } from "react";
class Errorboundry extends React.Component {


    constructor(props) {
        super(props)
        this.state = { error: false }
    }

    componentDidCatch(error) {
        this.setState({ error: true })
    }

    render() {


        if (this.state.error) {
            return <h1> Faild to fetch.........</h1>
        }


        return this.props.children

    }

}
export default Errorboundry