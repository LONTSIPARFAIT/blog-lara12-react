<?php

namespace App\Models;

use Illuminate\Container\Attributes\Auth;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'user_id',
    ];

    protected $appends = ['is_liked', 'likes_count'];

    protected $with = ['likedBy'];

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function likedBy()
    {
        return $this->belongsToMany(Post::class,  'post_likes');
    }

    public function getIsLikedAttribute() : bool
    {
        return Auth::check() && $this->likedBy->contains('id', Auth::id());
    }
    public function getLikedCountAttribute() : int
    {
        return $this->likedBy->count();
    }
}
