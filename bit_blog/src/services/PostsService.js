import { ApiBase } from "../shared/ApiBase"
import { Post } from "../entites/PostEntitet"

class PostService {
    fetchPost(postId) {
        const userEndpoint = `${ApiBase}posts/${postId}`;

        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then((apiPost) => {
                const { userId, title, id, body } = apiPost
                return new Post(userId, title, id, body);
            });
    }

    fetchPosts() {
        const userEndpoint = `${ApiBase}posts`;

        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then(apiPosts => {
                return apiPosts.slice(0, 30)
                    .map(({ userId, title, id, body }) => {
                        return new Post(userId, title, id, body);
                    });
            })
    }
    fetchAuthorPosts(id) {
        const userEndpoint = `${ApiBase}posts?userId=${id}`;
        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then((apiAllPosts) => {
                return apiAllPosts.slice(0, 5)
            })
    }
}




const postDetail = new PostService();

export { postDetail };