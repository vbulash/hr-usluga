@extends('twill::layouts.form')

@section('contentFields')
	@formField('medias', [
	    'name' => 'image',
	    'label' => 'Изображение сертификата',
	    'required' => true,
	])

	@formField('input', [
	    'name' => 'title',
	    'label' => 'Название сертификата',
	    'maxlength' => 100,
	    'required' => true,
	])

	@formField('date_picker', [
	    'name' => 'issued',
	    'label' => 'Сертификат выпущен',
	    'withTime' => false,
	    'allowInput' => true,
	    'format' => 'd.m.Y',
	    'required' => false,
	])
@stop
