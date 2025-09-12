import PageProps from '@/types';
import { Head, Link } from '@inertiajs/react'; 
import { register } from '@/routes';
import Nav from '@/components/nav';
import { Post } from '@/types/post';
import ListPost from '@/components/Post/ListPost';

export default function welcome({ auth, posts, canRegister }: PageProps<{ posts: Post[], canRegister: boolean }>) {
  console.log('Auth User:', auth.user);
console.log('Can Register:', canRegister);
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
                {!auth.user && canRegister && (
                  <div className="mt-5 max-w-md mx-auto flex sm:justify-center md:mt-8">
                    <div className='rounded-md shadow-md'>
                      <Link href={register()} className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-indigo-600  hover:bg-indigo-700">Commencer</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">Articles Rècents</h1>
            </div>
            <p className="mt-3 max-w-2xl mx-auto text-xl">
              Les derniers aricles publier par nos utilisateurs
            </p>
          </div>
          <ListPost posts={posts} />
        </div>
        
    </>
  )
}

