@extends('twill::layouts.form')

@section('contentFields')
	@formField('input', [
	    'name' => 'title',
	    'label' => 'Название услуги',
	    'maxlength' => 100,
	])

	@formField('tags')

	@formField('wysiwyg', [
	    'name' => 'description',
	    'label' => 'Описание услуги',
	    'toolbarOptions' => ['bold', 'italic', 'underline', 'strike', ['script' => 'super'], ['script' => 'sub'], 'list-ordered', 'list-unordered', 'link', 'image', 'video'],
	    'editSource' => false,
	])

	@formField('input', [
	    'name' => 'price',
	    'label' => 'Стоимость услуги',
	    'maxlength' => 50,
	])
@stop
