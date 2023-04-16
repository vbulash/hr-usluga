<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

/**
 * Новость
 *
 * @property string $slug
 * @property string $cover
 * @property string $title
 * @property string $digest
 * @property string $description
 * @property \DateTime $publish_at_date
 */
class Post extends Model {
	use HasSlug;

	protected $fillable = [
		'slug',
		'cover', // Изображение записи
		'title', // Название новости
		'digest', // Краткое содержание новости
		'description', // Содержание новости
		'publish_at_date', // Дата публикации
	];

	protected $casts = [
		'publish_at_date' => 'datetime',
	];

	public function getSlugOptions(): SlugOptions {
		return SlugOptions::create()
			->generateSlugsFrom('title')
			->saveSlugsTo('slug');
	}
}