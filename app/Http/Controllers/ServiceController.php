<?php

namespace App\Http\Controllers;

use App\Mail\OrderService;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use stdClass;

class ServiceController extends Controller {
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
					'slug' => $service->slug,
					'tags' => $tags,
					'title' => $service->title,
					'description' => $service->description,
					'price' => $service->price,
				];
			});
		return response($services, 200);
	}

	public function getBySlug(string $slug): ?stdClass {
		$service = Service::all()->where('slug', $slug)->first();
		$tags = [];
		foreach ($service->tags as $tag) {
			$tags[] = $tag->name;
		}
		return (object) [
			'id' => $service->getKey(),
			'slug' => $service->slug,
			'tags' => $tags,
			'title' => $service->title,
			'description' => $service->description,
			'price' => $service->price,
		];
	}

	public function order(Request $request) {
		$order = (object) $request->all();
		Mail::to($request->email)->send(new OrderService($order));
		return true;
	}
}