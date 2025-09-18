import { Auth } from '@/types'

export interface Author {
    id: number
    title: string
}

export interface Post {
    id: number
    title: string
    description: string
    image: string | null
    created_at: string
    author: Author
    is_liked: boolean
    likes_count: number
    user_id: number
}

export interface PostsFormData {
    [key: string]: string | File | null
    title: string
    description: string
    image: File | null
}

export interface DashboardProps extends Auth {
    userPosts: Post[]
}

export interface CreateProps extends Auth {}

export interface EditProps extends Auth {
    post: Post
}

export interface ShowProps extends Auth {
    post: Post
}

export interface Props {
    posts: Post[]
    showAuthor ?: boolean
    CanEdit ?: boolean
}