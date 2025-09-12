import PageProps from '@/types';
import Nav from '@/components/nav';
import { Post } from '@/types/post';

export default function welcome(auth, posts, canRegister) : PageProps< {posts: Post[], canRegister: boolean }> {
  return (
    <div>
        <Nav />
    </div>
  )
}

