import {PageProps} from '@/types'

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
    like_counter: number
    user_id: number
}

export interface PostsFormData {
    [key: string]: string | File | null
    title: string
    description: string
    image: File | null
}

export interface DashboardProps extends PageProps {
    userPosts: Post[]
}

export interface CreateProps extends PageProps {
}