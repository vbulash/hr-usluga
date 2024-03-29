<?php

namespace App\Http\Controllers;

use App\Models\Event as Appointment;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use DateTime;

class EventController extends Controller {
	protected function getSingleEvent(mixed $event): object {
		$_event = null;
		if (is_int($event)) {
			$_event = Appointment::findOrFail($event);
		} else {
			$_event = $event;
		}

		$start = $_event->start->toDate();
		$finish = $_event->finish->toDate();
		return (object) [
			'id' => $_event->getKey(),
			'title' => $_event->title,
			'description' => $_event->description,
			'url' => $_event->url,
			'start' => $start->format(DateTime::ATOM),
			'start_date' => $start->format('d.m.Y'),
			'start_time' => $start->format('H:i'),
			'finish' => $finish->format(DateTime::ATOM),
			'finish_date' => $finish->format('d.m.Y'),
			'finish_time' => $finish->format('H:i'),
			'fullday' => $_event->fullday,
		];
	}

	public function getDigest() {
		$events = [];
		$items = Appointment::all()
			->where('start', '>=', Carbon::today()->toDate())
			->sortBy('start')
			->slice(0, 3)
			->each(function ($event) use (&$events) {
				$events[] = $this->getSingleEvent($event);
			});
		return response($events, 200);
	}

	public function getEvent(int $event) {
		return Inertia::render('Event', [
			'event' => $this->getSingleEvent($event)
		]);
	}

	public function getEvents(Request $request) {
		$start = (new DateTime($request->start))->format('Y-m-d');
		$end = (new DateTime($request->end))->format('Y-m-d');

		$events = [];
		Appointment::whereBetween('start', [$start, $end])
			->get()
			->sortBy('start')
			->each(function ($event) use (&$events) {
				$events[] = $this->getSingleEvent($event);
			});
		return response($events, 200);
	}
}
