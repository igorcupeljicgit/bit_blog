import React, { Component } from 'react';
import { postDetail } from "../services/PostsService"
import { Link } from "react-router-dom"
import { authorService } from "../services/AuthorsFetch"
import { AuthorPostsList } from "../Authors/AuthorPostsList"



class PostDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            author: {},
            authorPosts: []


        }
    }
    componentDidMount() {
        this.loadPost()
    }

    loadPost() {
        const id = this.props.match.params.id;

        postDetail.fetchPost(id)
            .then((post) => {
                this.setState({ post });

                this.fetchAuthorRelatedData(post.userid);
            })
    }

    fetchAuthorRelatedData = (authorId) => {
        authorService.fetchAutor(authorId)
            .then((author) => {
                this.setState({
                    author
                })
            })

        postDetail.fetchAuthorPosts(authorId)
            .then((authorPosts) => {
                this.setState({ authorPosts })
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadPost()
        }
    }


    render() {
        console.log(this.state.author);


        const post = this.state.post;
        const author = this.state.author;

        const authorPosts = this.state.authorPosts
        console.log(authorPosts);


        sessionStorage.setItem("id", author.id);

        return (
            <>
                <div className="row">
                    <div className="col-12 ">
                        <div className="card blue darken-1">
                            <Link to="/" className="left white-text">Back</Link>
                            <div className="card-content white-text">
                                <h3 className=" bold">{post.title}</h3>
                                <h4><Link to={`/authors/${author.id}`} className="white-text">{author.name}</Link></h4>
                                <p>{post.body}</p>
                            </div>
                            <div className="card-action white-text">
                                <p>{authorPosts.length} more posts from same author</p>
                                <AuthorPostsList posts={authorPosts} />
                            </div>
                        </div>
                    </div>
                </div>


            </>


        )

    }


}

export { PostDetail }