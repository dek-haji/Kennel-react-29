import React, { Component } from 'react'



class Location extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(locations =>
                    <div key={locations.id}>
                        {locations.name}
                    </div>
                )
            }
            </section>
        )
    }
}
export default Location