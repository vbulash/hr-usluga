<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		// События
		Schema::create('events', function (Blueprint $table) {
			$table->id();
			$table->string('title')->comment('Название события');
			$table->text('description')->comment('Описание события');
			$table->string('url')->nullable()->comment('Ссылка события');
			$table->dateTime('start')->comment('Начало события');
			$table->dateTime('finish')->comment('Завершение события');
			$table->boolean('fullday')->default(false)->comment('Событие на полный день');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('events');
	}
};