import React from "react";
import Link from "next/link";

export interface PostListPageProps {
}

export default function PostListPage (props: PostListPageProps) {
    return (
        <div>
            Post List Page
            <br />
            <Link href="../posts/create">
               PostID
            </Link>
        </div>
    )
}