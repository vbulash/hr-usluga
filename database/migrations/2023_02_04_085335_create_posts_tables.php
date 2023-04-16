<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTables extends Migration {
	public function up() {
		Schema::create('posts', function (Blueprint $table) {
			$table->id();
			$table->string('slug');
			$table->string('cover')->comment('Изображение записи');
			$table->string('title')->comment('Название новости');
			$table->string('digest')->comment('Краткое содержание новости');
			$table->text('description')->nullable()->comment('Содержание новости');
			$table->date('publish_at_date')->comment('Дата публикации');
			$table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('posts');
    }
}