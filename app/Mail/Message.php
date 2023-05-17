<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Message extends Mailable {
	use Queueable, SerializesModels;

	protected object $feedback;

	/**
	 * Create a new message instance.
	 *
	 * @return void
	 */
	public function __construct(object $feedback) {
		$this->feedback = $feedback;
	}

	/**
	 * Get the message envelope.
	 *
	 * @return \Illuminate\Mail\Mailables\Envelope
	 */
	public function envelope() {
		return new Envelope(
			from: new Address(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME')),
			replyTo: [
				new Address(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME')),
			],
			subject: sprintf("Обратная связь от '%s'", $this->feedback->fio),
		);
	}

	/**
	 * Get the message content definition.
	 *
	 * @return \Illuminate\Mail\Mailables\Content
	 */
	public function content() {
		return new Content(
			view: 'mail.feedback',
			with: [
				'feedback' => $this->feedback
			],
		);
	}

	/**
	 * Get the attachments for the message.
	 *
	 * @return array
	 */
	public function attachments() {
		return [];
	}
}