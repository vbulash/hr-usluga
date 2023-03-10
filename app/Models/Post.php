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

    // protected $casts = [
    //     'publish_at_date' => 'date:d.m.Y',
    // ];

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