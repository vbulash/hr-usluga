<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasBlocks;
use A17\Twill\Models\Behaviors\HasMedias;
use A17\Twill\Models\Behaviors\HasPosition;
use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Model;
use Illuminate\Support\Facades\DB;

class Service extends Model {
	use HasBlocks, HasSlug, HasMedias, HasPosition;

	protected $fillable = [
		'published',
		'position',
		'title',
		'description',
		'price',
	];

	public $slugAttributes = [
		'title',
	];
}