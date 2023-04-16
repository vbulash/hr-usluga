<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Тег услуги
 *
 * @proprty string $name
 */
class Tag extends Model {
	use HasFactory;

	protected $fillable = [
		'name'
	];

	public function service(): BelongsTo {
		return $this->belongsTo(Service::class);
	}
}