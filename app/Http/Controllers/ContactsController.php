<?php

namespace App\Http\Controllers;

use App\Mail\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactsController extends Controller {
	public function main() {
		return Inertia::render('Contacts');
	}

	public function send(Request $request) {
		$feedback = (object) $request->all();
		Mail::to($request->email)->send(new Message($feedback));
		return true;
	}
}