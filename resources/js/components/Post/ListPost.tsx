import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ListPost({posts, showAuthor = true} : Props) {

    const { auth } = usePage().props as any;
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleDelete()

  return (
    <div>
      
    </div>
  )
}
