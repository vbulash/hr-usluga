<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderService extends Mailable {
    use Queueable, SerializesModels;

    protected object $order;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(object $order) {
        $this->order = (object) [
            'service' => $order->service,
            'fio' => $order->fio,
            'email' => $order->email,
            'phone' => $order->phone,
            'promo' => $order->promo,
            'files' => null
        ];
        $files = [];
        $temp = (array) $order;
        foreach ($temp as $key => $value)
            if (str_contains($key, 'resume_'))
                $files[] = Attachment::fromPath($value->getPathName())
                    ->as($value->getClientOriginalName());
        if (count($files) > 0)
            $this->order->files = $files;
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
            subject: sprintf("Заказ услуги '%s'", $this->order->service),
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content() {
        return new Content(
            view: 'mail.order',
            with: [
                'order' => $this->order,
                'ending' => (isset($this->order->files) ? $this->ending(count($this->order->files)) : '')
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments() {
        return $this->order->files;
    }

    private function ending(int $files) {
        $letter = '';
        if (($files < 10) || ($files > 20)) {
            $letter .= match ($files % 10) {
                1 => 'файл',
                2, 3, 4 => 'файла',
                default => 'файлов',
            };
        } else
            $letter .= 'файлов';

        return $letter;
    }
}