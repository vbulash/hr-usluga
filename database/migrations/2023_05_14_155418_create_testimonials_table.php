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
		Schema::create('testimonials', function (Blueprint $table) {
			$table->id();
			$table->integer('sort_no')->comment('Номер по порядку');
			$table->string('fio')->comment('Фамилия, имя и отчество');
			$table->string('position')->comment('Должность');
			$table->string('photo')->comment('Фотография');
			$table->string('testimonial')->comment('Отзыв');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists('testimonials');
	}
};