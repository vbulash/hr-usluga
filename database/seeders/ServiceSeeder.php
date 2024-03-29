<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder {
	private array $services = [
		[
			"title" => "Аудит резюме",
			"price" => "4 000",
			"description" => "<ul><li>оценка компетенций;<\/li><li>оценка карьерного пути со стороны HR;<\/li><li>оценка резюме как EVP (ценностного предложения) для работодателя;<\/li><li>рекомендация по описанию каждого места работы и позиционирования в целом.<br class=\"softbreak\"><\/li><\/ul>",
			"position" => 1
		],
		[
			"title" => "Резюме под ключ",
			"price" => "8 000",
			"description" => "<ul><li>составление с нуля или коррекция существующего резюме по итогам 60 минутного собеседования (viber, whatsapp, skype);<\/li><li>составление сопроводительного письма для job-сайтов;<\/li><li>рекомендации по итогам собеседования: на чем сделать акценты, как убрать «белые пятна», ответы на неудобные вопросы и пр.<br class=\"softbreak\"><\/li><\/ul>",
			"position" => 2
		],
		[
			"title" => "Экспресс-консультация",
			"price" => "5 000 - 8 000",
			"description" => "<ul><li>для соискателей: аудит запроса по карьере, разработка рекомендаций и направления развития;<\/li><li>для работодателей: оценка эффективности системы управления персоналом по направлению подбора, кадрового делопроизводства, HR-аналитики, HR-бренда и коммуникаций;<\/li><li>менторинг для HR-специалистов по вопросам подбора, оценки, построения бренда работодателя, системы обучения и развития, формирование системы карьерного менеджмента (карьерограммы, карьерные лестницы, кадровый резерв).<br class=\"softbreak\"><\/li><\/ul>",
			"position" => 6
		],
		[
			"title" => "Профориентация школьников",
			"price" => "7 000",
			"description" => "<ul><li><strong>1 консультация<\/strong>: расшифровка тестирования, собеседование с клиентом по его интересам и ожиданиям (клиенты до 18 лет собеседование е проходят в присутствии родителя), определение сферы деятельности и вариантов обучения по направлениям с перспективой 5-10 лет;<\/li><li><strong>2 консультация<\/strong>: со стороны консультанта подготовка списка подходящих под запросы клиента вузов с программами обучения, со стороны клиента- оценка вариантов обучения и выбор направления и условий;<\/li><li><strong>3 консультация<\/strong>: 2 часа дистанционной поддержки в течение месяца после оказания услуги по Профориентации — предоставляется по желанию клиента, оплачивается отдельно — стоимость 1 часа — <strong>2 500 рублей<\/strong>.<\/li><li>дистанционная консультация клиента при подаче документов в ВУЗы через Госуслуги — техническое сопровождение;<\/li><li>коучинговый формат (работа с тревожностью и сомнениями) при подготовке к профильному экзамену — психологическое сопровождение.<br class=\"softbreak\"><\/li><\/ul>",
			"position" => 5
		],
		[
			"title" => "Мастерская карьериста",
			"price" => "10 000",
			"description" => "<ul><li>3 очные встречи в Москве по 4 часа каждая по темам: «Работа над резюме», «Технологии поиска работы», «Прохождение испытательного срока»;<\/li><li>2 вебинара в zoom по темам «Подготовка к собеседованию», «Трудовые аспекты трудоустройства»;<\/li><li>1 индивидуальная skype-сессия длительностью 1,5 часа;<\/li><li>рабочие материалы в электронном виде.<br class=\"softbreak\"><\/li><\/ul>",
			"position" => 4
		],
		[
			"title" => "Мастер карьеры",
			"price" => "30 000",
			"description" => "<ul><li>1,5 – 2-х часовое очное собеседование;<\/li><li>оценка потенциала и сильных-слабых сторон;<\/li><li>разработка стратегии поиска и плана действий по поиску и варианту дальнейшего развития (в случае смены сферы деятельности\/развития в компании\/профессии);<\/li><li>составление резюме и сопроводительного письма;<\/li><li>информационная поддержка и сопровождение в течение 2-х месяцев (помощь в оценке вакансий, предложений о работе, условий трудового договора и пр.);<\/li><li>консультация по личному брендированию.<br class=\"softbreak\"><\/li><\/ul>",
			"position" => 3
		]
	];

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		foreach ($this->services as $service) {
			$import = new Service();
			$import->title = $service['title'];
			$import->price = $service['price'];
			$import->description = $service['description'];
			$import->position = $service['position'];
			$import->save();
		}
	}
}