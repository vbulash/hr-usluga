<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller {
	function getTestimonials() {
		$testimonials = [];
		Testimonial::all()->sortByDesc('sort_no')
			->each(function ($testimonial) use (&$testimonials) {
				$testimonials[] = (object) [
					'id' => $testimonial->getKey(),
					'sort_no' => $testimonial->sort_no,
					'fio' => $testimonial->fio,
					'position' => $testimonial->position,
					'photo' => $testimonial->photo,
					'testimonial' => $testimonial->testimonial
				];
			});
		return response($testimonials, 200);
	}
}