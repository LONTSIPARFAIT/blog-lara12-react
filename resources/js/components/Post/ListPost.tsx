import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ListPost({posts, showAuthor == true} : Props) {
    const { auth } = usePage().props as any;
    const [deletingId, setDeletingId] = useState(false);
  return (
    <div>
      
    </div>
  )
}
