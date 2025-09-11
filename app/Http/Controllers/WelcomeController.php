<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class WelcomeController extends Controller
{
    public function index()
    {
        $posts = Post::with('author')->latest()->get();

        return Inertia::render('welcome', [
            'posts' => $posts,
            'canRegister' => config('services.registration.enabled', true)
        ]);
    }
}
