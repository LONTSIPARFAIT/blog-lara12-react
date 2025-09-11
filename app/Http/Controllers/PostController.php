<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Post;

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
        $post->user_id = Auth::id();

        if($request->hasFile('image')) {
            $Path = $request->file('image')->store('posts', 'public');
            $post->image = $Path;
        }
        
        $post->save();

        return redirect()->route('dashboard')->with('success', 'Post crée avec succès');
    }

    public function show(Post $post)
    {
        return Inertia::render('Post/Show', [
            'post' => $post->load('author')
        ]);
    }

    public function edit(Post $post)
    {
        return Inertia::render('Post/Edit', [
            'post' => $post
        ]);
    }

        public function update(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image`|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $post->title = $validate['title'];
        $post->description = $validate['description'];

        if($request->hasFile('image')) {
            if($post->image){
                Storage::disk('public')->delete($post->image);
            }
            $Path = $request->file('image')->store('posts', 'public');
            $post->image = $Path;
        }
        
        $post->save();

        return redirect()->route('dashboard')->with('success', 'Post mis à jour avec succès');
    }

    public destroy(Post $post)
    {
        if
    }

}
