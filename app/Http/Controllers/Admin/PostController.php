<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;
use App\Models\Post;

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

	public function getPosts(string $mode = 'desktop') {
		$posts = [];
		Post::all()->sortByDesc('publish_at_date')
			->each(function ($post) use (&$posts, &$once, $mode) {
				$params = [
					'id' => $post->getKey(),
					'slug' => $post->getSlug(),
					'digest' => $post->digest,
					'title' => $post->title,
					'description' => $post->description,
					'publish_at_date' => $post->publish_at_date->format('d.m.Y')
				];
				if ($post->hasImage('image', $mode))
					$params['image'] = $post->image('image', $mode);
				$posts[] = (object) $params;
			});
		return response($posts, 200);
	}
}