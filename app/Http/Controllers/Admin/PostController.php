<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;
use App\Models\Post;
use Inertia\Inertia;

class PostController extends BaseModuleController {
	protected $moduleName = 'posts';

	protected $indexOptions = [
	];

	protected $indexColumns = [
		'title' => [
			'title' => 'Название записи',
			'field' => 'title',
		],
		'publish_at_date' => [
			'title' => 'Дата публикации',
			'field' => 'publish_at_date',
			'sort' => true
		],
	];

	protected $defaultOrders = [
		'publish_at_date' => 'desc',
		'title' => 'asc'
	];

	protected function getSinglePost(Post $post, bool $short = true, string $mode = 'desktop'): object {
		$params = [
			'id' => $post->getKey(),
			'slug' => $post->getSlug(),
			'digest' => $post->digest,
			'title' => $post->title,
			'publish_at_date' => $post->publish_at_date->format('d.m.Y'),
		];
		if (!$short)
			$params['description'] = $post->description;
		if ($post->hasImage('image', $mode))
			$params['image'] = $post->image('image', $mode);
		if (!$short) {
			$url = parse_url($params['image']);
			$params['image'] = sprintf("%s://%s%s%s",
				$url['scheme'], $url['host'], isset($url['port']) ? ':' . $url['port'] : '', $url['path']
			);
		}
		return (object) $params;
	}

	public function getPosts(string $mode = 'desktop', bool $short = true) {
		$posts = [];
		Post::all()->sortByDesc('publish_at_date')
			->each(function ($post) use (&$posts, $mode) {
				$posts[] = $this->getSinglePost($post, true, $mode);
			});
		return response($posts, 200);
	}

	public function getPost(int $post, string $mode = 'desktop') {
		$_post = Post::findOrFail($post);
		return Inertia::render('Post', [
			'post' => $this->getSinglePost($_post, false, $mode),
			'full' => true
		]);
	}
}