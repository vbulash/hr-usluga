<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PostController extends Controller {
	protected function getSinglePost(Post $post, bool $short = true, string $mode = 'desktop'): object {
		$params = [
			'id' => $post->getKey(),
			'slug' => $post->slug,
			'image' => $post->cover,
			'digest' => $post->digest,
			'title' => $post->title,
			'publish_at_date' => $post->publish_at_date->format('d.m.Y'),
		];
		if (!$short)
			$params['description'] = $post->description;
		return (object) $params;
	}

	public function getPosts(bool $short = true) {
		$posts = [];
		Post::all()->sortByDesc('publish_at_date')
			->each(function ($post) use (&$posts) {
				$posts[] = $this->getSinglePost($post, true);
			});
		return response($posts, 200);
	}

	public function getPost(int $post) {
		$_post = Post::findOrFail($post);
		return Inertia::render('Post', [
			'post' => $this->getSinglePost($_post, false),
			'full' => true
		]);
	}
}