import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
    <div className="faq">
        <h4> How Does React Work?</h4>
        <p>
            React uses declarative code that makes it easier to create great UIs
            for applications and aims to be both efficient and flexible. It
            designs simple views for each state in the application. React will
            efficiently update and render just the right component when the data
            changes. Also components can be resused that have been developed into
            other applications.
        </p>
        <h4>How useState Works?</h4>
        <p>
            The useState hook allows us declare one or more state variables in
            function components. You have to pass the initial state to this
            function and it returns a variable with the current state value and
            another function to update this value.This ensures that the React
            preserves the state between re-renders. This function can be used
            to keep track of strings, numbers, booleans, arrays, objects, and any
            combination of these.
        </p>
    </div>
    );
};

export default Faq;