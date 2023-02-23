<?php

namespace App\Models;

use A17\Twill\Models\Behaviors\HasSlug;
use A17\Twill\Models\Model;
use Illuminate\Support\Facades\DB;

class Service extends Model {
    use HasSlug;

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