<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;

class PostController extends BaseModuleController {
    protected $moduleName = 'posts';

    protected $indexOptions = [
    ];

    protected $indexColumns = [
        'title' => [
            'title' => 'Название записи',
            'field' => 'title',
        ],
        'publish_at_date' => [
            'title' => 'Дата публикации',
            'field' => 'publish_at_date',
            'sort' => true
        ],
    ];

    protected $defaultOrders = [
        'publish_at_date' => 'desc',
        'title' => 'asc'
    ];
}