<?php

namespace App\Http\Controllers\Admin;

use A17\Twill\Http\Controllers\Admin\ModuleController as BaseModuleController;

/**
 * Summary of CertificateController
 */
class CertificateController extends BaseModuleController {
	protected $moduleName = 'certificates';

	protected $indexOptions = [
	];

	// protected $indexColumns = [
	// 	'title' => [
	// 		'title' => 'Название сертификата',
	// 		'field' => 'title',
	// 	],
	// 	'issued' => [
	// 		'title' => 'Дата выпуска',
	// 		'field' => 'issued',
	// 		'sort' => true
	// 	],
	// ];

	protected $defaultOrders = [
		'issued' => 'desc',
	];
}