import React, { useReducer } from "react";

export default function Mycomponent() {
    const initialValue = {
        petrol: 10,
        Diesel: 15,
        CNG: 5
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "Car_P":
                return {
                    ...state,
                    petrol: state.petrol - 5
                };
            case "Car_d":
                return {
                    ...state,
                    Diesel: state.Diesel - 3
                };
            case "Car_c":
                return {
                    ...state,
                    CNG: state.CNG - 2
                };
            case "Bike_p":
                return {
                    ...state,
                    petrol: state.petrol - 3
                };
            case "Truck":
                return {
                    ...state,
                    Diesel: state.Diesel - 10
                };
            default:
                return state;
        }
    };

    const [currentState, dispatch] = useReducer(reducer, initialValue);

    return (
        <div>
            <p>Petrol {currentState.petrol}</p>
            <p>Diesel {currentState.Diesel}</p>
            <p>CNG {currentState.CNG}</p>

            <br />
            <button onClick={() => dispatch({ type: "Car_P" })}>Car Petrol</button>
            <button onClick={() => dispatch({ type: "Car_d" })}>Car Diesel</button>
            <button onClick={() => dispatch({ type: "Car_c" })}>Car CNG</button>
            <button onClick={() => dispatch({ type: "Bike_p" })}>Bike Petrol</button>
            <button onClick={() => dispatch({ type: "Truck" })}>Truck Diesel</button>
        </div>
    );
}
