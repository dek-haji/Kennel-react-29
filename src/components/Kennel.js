import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./LocationList/Location"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" },
        { id: 3, name: "Nashville East", address: "1047 Dinary blvd" },
        { id: 4, name: "Nashville South", address: "1010 Finary court"}
    ]

    state = {
       
        locations: this.locationsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
            </article>
        )
    }
}

export default Kennel