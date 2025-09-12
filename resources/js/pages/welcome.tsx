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

          <div className="bg-white">
            <div className="max-w-7px mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className='text-4xl font-black text-gray-800 ' >
                  <span className="block">Bienvenue sur</span>
                  <span className="block text-indigo-700">Notre Blog Communautaire</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-gray-500">
                 Explorez des articles variés sur la culture, la technologie et le bien-être. Rejoignez notre communauté et partagez vos idées !
                </p>
              </div>
            </div>
          </div>

        </div>
        
    </>
  )
}

