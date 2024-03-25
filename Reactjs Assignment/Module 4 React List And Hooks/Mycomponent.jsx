import { Component } from "react";
export default class MyComponent extends Component {

    //Phase 1 Mount
    constructor(props) {
        console.log("This Was Called Constructor")
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props, state) {
        console.log("This Was Called getDerivedStateFromProps")
        return { myprops: props.myprops };

    }
    componentDidMount() {
        console.log("This Was Called componentDidMount");
    }


    render() {
        console.log("This Was Called render");
        return <h1>My Favorite Color is</h1>;

    }

    //Phase 2 Updating
    shouldComponentUpdate() {
        console.log("This was called shouldComponentUpdate")
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevstate) {
        console.log("getSnapshotbeforeUpdate", prevProps, prevstate)
        return prevProps
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }


    //phase 3 unmount
    componentWillUnmount() {
        console.log("ComponentWillUnmount")
    }
}


