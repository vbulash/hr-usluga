<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller {
	function getTestimonials() {
		$testimonials = Testimonial::all()->sortByDesc('sort_no')->toArray();
		return response($testimonials, 200);
	}
}