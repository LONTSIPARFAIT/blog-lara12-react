import PageProps from '@/types';
import { Head, Link } from '@inertiajs/react'; 
import Nav from '@/components/nav';
import { Post } from '@/types/post';

export default function welcome(auth, posts, canRegister) : PageProps< {posts: Post[], canRegister: boolean }> {
  return (
    <>
        <Head title='Welcome' />
        <div className="min-h-screen">
          <Nav />
        </div>
        
    </>
  )
}

