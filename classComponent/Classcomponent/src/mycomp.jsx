import { Component } from "react";

export default class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    static getDerivedStateFromProps(props, state) {
        return { favoritecolor: props.favcol };
    }

}