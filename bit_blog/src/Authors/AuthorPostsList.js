import React from "react"
import { Link } from "react-router-dom"





class AuthorPostsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }




    render() {
        const oneLink = this.props.posts.map((elem) => {

            return (
                <div >
                    <Link to={`/posts/${elem.id}`}>{elem.title}</Link>
                </div>

            )



        })

        return oneLink
    }
}








export { AuthorPostsList }
