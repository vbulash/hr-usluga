<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTables extends Migration {
	public function up() {
		Schema::create('services', function (Blueprint $table) {
			$table->id();
			$table->string('slug');
			$table->integer('position')->comment('Номер по порядку');
			$table->string('title')->comment('Название услуги');
			$table->string('price')->comment('Стоимость услуги');
			$table->text('description')->comment('Описание услуги');
			$table->timestamps();
		});
	}

	public function down() {
		Schema::dropIfExists('services');
	}
}