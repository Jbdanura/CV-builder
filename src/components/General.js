import React from "react"

export default class General extends React.Component{

    render(){
        return(
            <div>
            {this.props.form &&
                <div className="form-general">
                    <input  placeholder="First Name: " type="text" value={this.props.name}
                     onChange={(event) => this.props.changeGeneral("name", event)}/>

                     <input placeholder="Last Name: " type="text" value={this.props.lastname}
                     onChange={(event) => this.props.changeGeneral("lastname", event)}/>

                    <input placeholder="About you: " type="text" value={this.props.description}
                     onChange={(event) => this.props.changeGeneral("description", event)}/>

                     <input placeholder="Address: " type="text" value={this.props.address}
                     onChange={(event) => this.props.changeGeneral("address", event)}/>
                     
                     <input placeholder="Phone: " type="text" value={this.props.phone}
                     onChange={(event) => this.props.changeGeneral("phone", event)}/>
                </div>
            } {!this.props.form &&
                <div className="cv-general">
                    <p>{this.props.name}</p>
                    <p>{this.props.lastname}</p>
                    <p>{this.props.description}</p>
                    <p>{this.props.address}</p>
                    <p>{this.props.phone}</p>
                </div>
            }
            </div>
        )
    }
}