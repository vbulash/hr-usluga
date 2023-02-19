<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;
use App\Models\Service;

class ServiceController extends BaseModuleController {
    protected $moduleName = 'services';

    protected $indexColumns = [
        'title' => [
            'title' => 'Название услуги',
            'field' => 'title',
        ],
        'publish_at_date' => [
            'title' => 'Стоимость услуги',
            'field' => 'price',
        ],
    ];
    protected $indexOptions = [
        'reorder' => true,
    ];

    public function getServices() {
        $services = [];
        Service::all()
            ->each(function ($service) use (&$services) {
                $tags = [];
                foreach ($service->tags as $tag) {
                    $tags[] = $tag->name;
                }
                $services[] = (object) [
                    'id' => $service->getKey(),
                    'slug' => $service->getSlug(),
                    'tags' => $tags,
                    'title' => $service->title,
                    'description' => $service->description,
                    'price' => $service->price,
                ];
            });
        return response($services, 200);
    }

    public function show($id, $submoduleId = null) {
        // TODO идентифицировать модель service по slug ($id)
        return $id;
    }
}