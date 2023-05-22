<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Событие афиши
 *
 * @property string $title
 * @property string $description
 * @property string $url
 * @property \DateTime $start
 * @property \DateTime $finish
 * @property bool $fullday
 */
class Event extends Model {

	protected $fillable = [
		'title', // Название события
		'description', // Описание события
		'url', // Ссылка события
		'start', // Начало события
		'finish', // Завершение события
		'fullday', // Событие на полный день
	];

	protected $casts = [
		'start' => 'datetime',
		'finish' => 'datetime',
	];
}