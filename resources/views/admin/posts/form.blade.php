@extends('twill::layouts.form')

@section('sideFieldset')
	@formField('date_picker', [
	    'name' => 'publish_at_date',
	    'label' => 'Дата публикации',
	    'withTime' => false,
	    'allowInput' => true,
	    'altFormat' => 'd.m.Y',
	])
@endsection

@section('contentFields')
	@formField('medias', [
	    'name' => 'image',
	    'label' => 'Изображение записи',
	])

	@formField('input', [
	    'name' => 'title',
	    'label' => 'Название записи',
	    'required' => true,
	    'maxlength' => 100,
	])

	@formField('input', [
	    'name' => 'digest',
	    'label' => 'Аннотация',
	    'required' => true,
	    'maxlength' => 255,
	    'rows' => 5,
	])

	@formField('wysiwyg', [
	    'name' => 'description',
	    'label' => 'Текст описания (тело) записи',
	    'toolbarOptions' => ['bold', 'italic', 'underline', 'strike', ['script' => 'super'], ['script' => 'sub'], ['header' => [3, 4, 5, 6]], 'list-ordered', 'list-unordered', ['indent' => '-1'], ['indent' => '+1'], 'blockquote', 'code-block', 'link', 'image', 'video'],
	    'editSource' => true,
	])
@stop
