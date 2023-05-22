const MenuItems = [
	['Главная', route('home')],
	['Услуги', route('services.list')],
	['Новости', route('posts.list')],
	['События', route('events.list')],
	['Обо мне', route('about')],
	// ['Партнёры', '/partners'],
	['Обратная связь', route('contacts')],
];

export default MenuItems;
