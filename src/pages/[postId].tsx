import React from 'react';
import { useRouter } from 'next/router';
const Post = () => {

    const router = useRouter();
    console.log(router)
    return (
        <div>
            This is Post
            <p>{router.query.postId}</p>
        </div>
    )
}

export default Post;