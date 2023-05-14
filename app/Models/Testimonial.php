<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

/**
 * Отзыв
 *
 * @property string $slug
 * @property int $sort_no
 * @property string $fio
 * @property string $position
 * @property string $photo
 * @property string $testimonial
 */
class Testimonial extends Model {
	use HasSlug;

	protected $fillable = [
		'slug',
		'sort_no', // Номер по порядку
		'fio', // Фамилия, имя и отчество
		'position', // Должность
		'photo', // Фотография
		'testimonial' // Отзыв
	];

	public function getSlugOptions(): SlugOptions {
		return SlugOptions::create()
			->generateSlugsFrom('fio')
			->saveSlugsTo('slug');
	}
}