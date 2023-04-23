const MenuItems = [
	['Главная', route('home')],
	['Услуги', route('services.list')],
	['Новости', route('posts.list')],
	// ['События', '/events'],
	['Обо мне', route('about')],
	// ['Партнёры', '/partners'],
	['Обратная связь', route('contacts')],
];

export default MenuItems;
