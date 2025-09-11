<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function create() : Response
    {
        if(!Auth::check()){
            abort(403);
        }
        return Inertia::render('Post/Create');
    }

    public function store(Request $request)
    {
        if(!Auth::check()){
            abort(403);
        }

        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image`|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $post = new Post();
        $post->title = $validate['title'];
        $post->description = $validate['description'];
    }
}
