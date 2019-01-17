import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList" // Import EmployeeList component
import Location1 from "./LocationList/Location1"  
import Location2 from './LocationList/Location2';


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h1>Student Kennels</h1>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <EmployeeList />
                <Location1 />
                <Location2/>
            </div>
        );
    }
}