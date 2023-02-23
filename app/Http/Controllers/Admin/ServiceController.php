<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;
use App\Mail\OrderService;
use App\Models\Service;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use stdClass;

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

    public function getBySlug(string $slug): ?stdClass {
        $query = DB::select(<<<'EOS'
select services.*
from services, service_slugs
where service_slugs.service_id = services.id and service_slugs.active = 1 and service_slugs.slug = :slug
EOS,
            ['slug' => $slug]
        );
        return count($query) == 0 ? null : $query[0];
    }

    public function order(Request $request) {
        $order = (object) $request->all();
        Mail::to($request->email)->send(new OrderService($order));
        return true;
    }

    public function show($id, $submoduleId = null) {
        // TODO идентифицировать модель service по slug ($id)
        return $id;
    }
}