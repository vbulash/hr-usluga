<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactsController extends Controller {
	public function main() {
		return Inertia::render('Contacts');
	}
}