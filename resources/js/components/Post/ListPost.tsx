import { Post, Props } from '@/types/post';
import { usePage, router, Link } from '@inertiajs/react';
import { useState } from 'react';
import { Card } from '../ui/card';

export default function ListPost({posts, showAuthor = true} : Props) {

    const { auth } = usePage().props as any;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete = (postId: number) => {
        if (confirm("Etes-vous sûr de vouloir supprimer cet article ?")) {

            setDeletingId(postId);
            
            router.delete(route('posts.destroy', postId), {
                onSuccess: () => {
                    setDeletingId(null);
                },
                onError: () => {
                    setDeletingId(null);
                    alert("Une erreur est survenue lors de la suppression de l'article.");
                }
            });
        }
    }

    const handleLike = (postId: number) => {
        // TODO: Implementer la fonction pour liker un article
        router.post(route('posts.like', postId), {
            preserveScroll: true,
            preserveState: true,
        });
    }

    const canEditPost = (post: Post) => {
        return auth.user?.id === post.user_id;
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
      {posts.map((post)=>(
        <Card key={post.id} className='overflow-hidden'>
            {post.image && (
                <div className="aspect-w-16 aspect-h-9">
                    <img src="" alt="" />
                </div>
            )}
        </Card>
      ))}
    </div>
  )
}
