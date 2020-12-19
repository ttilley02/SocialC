import config from "../config";
import TokenService from "./token-service";

const postApiService = {
   getPosts() {
      return fetch(`${config.API_ENDPOINT}/posts`, {
         headers: {
            Authorization: `bearer ${TokenService.getAuthToken()}`,
         },
      }).then((res) =>
         !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
   },
   getPostById(postId) {
      return fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
         headers: {
            Authorization: `bearer ${TokenService.getAuthToken()}`,
         },
      }).then((res) =>
         !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
   },
   getPostsReviews(postId) {
      return fetch(`${config.API_ENDPOINT}/posts/${postId}/reviews`, {
         headers: {
            Authorization: `bearer ${TokenService.getAuthToken()}`,
         },
      }).then((res) =>
         !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
   },
   postReview(postId, text, rating) {
      return fetch(`${config.API_ENDPOINT}/reviews`, {
         method: "POST",
         headers: {
            "content-type": "application/json",
            Authorization: `bearer ${TokenService.getAuthToken()}`,
         },
         body: JSON.stringify({
            post_id: postId,
            rating,
            text,
         }),
      }).then((res) =>
         !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      );
   },
};

export default postApiService;
