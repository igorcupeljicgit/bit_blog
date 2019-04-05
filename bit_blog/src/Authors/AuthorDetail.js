import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { authorService } from "../services/AuthorsFetch"



class AuthorDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            author: {}

        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;


        authorService.fetchAutor(id)
            .then((author) => {
                console.log(author)
                this.setState({
                    author
                })

            })
    }
    render() {

        const Author = this.state.author;
        console.log(Author.address)

        if (!Author.id) {
            return null;
        }

        return (
            <>  <div className="row">
                <Link to="/authors" className="left" >Back</Link>
            </div>
                <div className="col s12">

                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://via.placeholder.com/150" alt="" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h5 className="align">{Author.name}</h5><br />
                                <p className="left">username: {Author.username}</p><br />
                                <p className="left">email: {Author.email}</p><br />
                                <p className="left">phone: {Author.phone}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content left-align">
                                <h5>ADRESS</h5>
                                <p>Street:   {Author.address.street}</p>
                                <p>City:   {Author.address.city}</p>
                                <p>zipcode:  {Author.address.zipcode}</p>

                            </div>

                            <iframe
                                width="300"
                                height="170"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                                src={`https://maps.google.com/maps?q= {${Author.address.geo.lat} , ${Author.address.geo.lng}'&hl=es;z=14&amp;output=embed`}
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className="col s12">

                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h5 className="align">Company</h5><br />
                                <p className="left">name: {Author.company.name}</p><br />
                                <p className="left">slogan: {Author.company.catchPhrase}</p><br />
                            </div>
                        </div>
                    </div>
                </div>







            </>
        )
    }
}
export { AuthorDetail }
