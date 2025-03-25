
const fetchDatas = async (postId) => {
    try {
        // Fetch the post
        const fetchPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json())
            .catch(() => "fetchPosts Error");
        
        // Fetch the comments
        const fetchComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
            .catch(() => "fetchComments Error");

        // Fetch the author
        const fetchAuthor = await fetch(`https://jsonplaceholder.typicode.com/users/${fetchPosts.userId}`)
        .then(res => res.json())
            .catch(() => "fetchAuthor Error");

        return {
            fetchPosts,
            fetchComments,
            fetchAuthor
        };
    } catch (error) {
        console.error("Error:", error);
    }
};

// Example usage
const postId = 1; // Provide a valid postId
fetchDatas(postId).then(res => console.log(res)).catch(err => console.log("Error:", err));
