<?php

namespace App\Http\Controllers;

use Illuminate\Container\Attributes\Auth;
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
}
