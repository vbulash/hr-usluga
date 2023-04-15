<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasBlocks;
use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasFiles;
use A17\Twill\Models\Behaviors\HasPosition;
use A17\Twill\Models\Behaviors\Sortable;
use A17\Twill\Models\Model;

class Certificate extends Model implements Sortable {
	use HasBlocks, HasSlug, HasMedias, HasFiles, HasPosition;

	protected $fillable = [
		'published',
		'title',
		'description',
		'position',
		'issued',
	];

	public $slugAttributes = [
		'title',
	];

	public $mediasParams = [
		'cover' => [
			'default' => [
				[
					'name' => 'default',
					'ratio' => 16 / 9,
				],
			],
			'mobile' => [
				[
					'name' => 'mobile',
					'ratio' => 1,
				],
			],
			'flexible' => [
				[
					'name' => 'free',
					'ratio' => 0,
				],
				[
					'name' => 'landscape',
					'ratio' => 16 / 9,
				],
				[
					'name' => 'portrait',
					'ratio' => 3 / 5,
				],
			],
		],
	];
}