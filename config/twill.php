<?php

return [
	'enabled' => [
		'users-image' => false,
	],
	'block_editor' => [
		'crops' => [
			'image' => [
				'desktop' => [
					[
						'name' => 'desktop',
						'ratio' => 16 / 9,
						'minValues' => [
							'width' => 1920,
							'height' => 1080,
						],
					],
				],
				'tablet' => [
					[
						'name' => 'tablet',
						'ratio' => 3 / 4,
						'minValues' => [
							'width' => 750,
							'height' => 1000,
						],
					],
				],
				'mobile' => [
					[
						'name' => 'mobile',
						'ratio' => 1,
						'minValues' => [
							'width' => 560,
							'height' => 560,
						]
					]
				]
			]
		]
	]
];