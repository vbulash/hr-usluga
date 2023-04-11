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

	public function getPosts(string $mode = 'desktop', bool $short = true) {
		$posts = [];
		Post::all()->sortByDesc('publish_at_date')
			->each(function ($post) use (&$posts, &$once, $mode, $short) {
				$params = [
					'id' => $post->getKey(),
					'slug' => $post->getSlug(),
					'digest' => $post->digest,
					'title' => $post->title,
					'publish_at_date' => $post->publish_at_date->format('d.m.Y')
				];
				if (!$short)
					$params['description'] = $post->description;
				if ($post->hasImage('image', $mode))
					$params['image'] = $post->image('image', $mode);
				$posts[] = (object) $params;
			});
		return response($posts, 200);
	}
}