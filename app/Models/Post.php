<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Model;

class Post extends Model {
	use HasSlug, HasMedias;

	protected $fillable = [
		'published',
		'title',
		'digest',
		'description',
		'publish_start_date',
		'publish_end_date',
		'publish_at_date',
	];

	public $slugAttributes = [
		'title',
	];

	protected $casts = [
		'publish_at_date' => 'datetime',
	];

	public $mediasParams = [
		'image' => [
			'desktop' => [
				[
					'name' => 'desktop',
					'ratio' => 16 / 10,
				],
			],
			'tablet' => [
				[
					'name' => 'tablet',
					'ratio' => 4 / 3,
				]
			],
			'mobile' => [
				[
					'name' => 'mobile',
					'ratio' => 1,
				],
			],
		],
	];
}