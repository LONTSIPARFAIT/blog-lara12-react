import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react'; 
import Nav from '@/components/nav';

export default function welcome() {
  return (
    <div>
        <Nav />
    </div>
  )
}

