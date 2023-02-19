<?php

namespace App\Repositories;

use A17\Twill\Repositories\Behaviors\HandleSlugs;
use A17\Twill\Repositories\Behaviors\HandleTags;
use A17\Twill\Repositories\ModuleRepository;
use App\Models\Service;

class ServiceRepository extends ModuleRepository {
    use HandleSlugs, HandleTags;

    public function __construct(Service $model) {
        $this->model = $model;
    }
}