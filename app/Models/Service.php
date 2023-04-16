<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

/**
 * Услуга
 *
 * @property int $position
 * @property string $title
 * @property string $description
 * @property string $price
 */
class Service extends Model {
	use HasSlug;

	protected $fillable = [
		'position',
		'slug',
		'title',
		'description',
		'price',
	];

	public function getSlugOptions(): SlugOptions {
		return SlugOptions::create()
			->generateSlugsFrom('title')
			->saveSlugsTo('slug');
	}

	public function tags(): HasMany {
		return $this->hasMany(Tag::class);
	}
}