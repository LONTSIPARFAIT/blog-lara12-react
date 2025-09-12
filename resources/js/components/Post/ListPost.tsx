import { Props } from '@/types/post';
import { usePage, router, Link } from '@inertiajs/react';
import { useState } from 'react';

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

    c

  return (
    <div>
      LisPost
    </div>
  )
}
