import React from "react";

const NewPost = () => {

    return (
        <>
            <div className="row center">
                <div className="col m6 center ">
                    <div>
                        <label>Title</label>
                        <input type="text" placeholder="Post title" />
                    </div>
                    <label>Content</label>
                    <textarea className="card" cols="30" rows="100" placeholder="Type your Post"></textarea>
                    <div className="right">
                        <button type="button">Cancel</button><button type="submit">Save</button>
                    </div>
                </div>
            </div>
        </>
    )



}

export { NewPost };