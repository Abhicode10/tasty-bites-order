
import food_2 from '../assets/food_2.png';
import food_3 from '../assets/food_3.png';
import food_6 from '../assets/food_6.png';
import food_7 from '../assets/food_7.png';
import food_13 from '../assets/food_13.png';
import food_14 from '../assets/food_14.png';
import food_15 from '../assets/food_15.png';
import food_16 from '../assets/food_16.png';
import food_25 from '../assets/food_25.png';
import food_26 from '../assets/food_26.png';
import food_28 from '../assets/food_28.png';
import food_32 from '../assets/food_32.png';
import food_33 from '../assets/food_33.png';
// Continue importing up to food_33.png

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  
}




export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'starters',
    name: 'Starters',
    description: 'Delicious appetizers to start your meal'
  },
  {
    id: 'main-courses',
    name: 'Main Courses',
    description: 'Hearty and filling main dishes'
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    description: 'Freshly baked pizzas with premium toppings'
  },
  {
    id: 'burgers',
    name: 'Burgers',
    description: 'Juicy burgers with various toppings'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet treats to end your meal'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    description: 'Refreshing beverages to complement your food'
  },
  {
    id: 'salad',
    name: 'Salad',
    description: 'Fresh and healthy salads'
  },
  {
    id: 'rolls',
    name: 'Rolls',
    description: 'Delicious rolls with various fillings'
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    description: 'Tasty sandwiches with fresh ingredients'
  },
  {
    id: 'pasta',
    name: 'Pasta',
    description: 'Creamy and flavorful pasta dishes'
  },
  {
    id: 'noodles',
    name: 'Noodles',
    description: 'Savory and spicy noodle dishes'
  },
  {
    id: 'biryani',
    name: 'Biryani',
    description: 'Aromatic and flavorful biryani varieties'
  }


];

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Garlic Bread',
    description: 'Freshly baked bread with garlic butter and herbs',
    price: 150,
    image: 'https://img.freepik.com/free-photo/closeup-italian-appetizer-bruschettas-with-tomato-sauce-parmesan-cheese-wooden-table-h_1258-97104.jpg?t=st=1745278470~exp=1745282070~hmac=ea44ee3daa3dcf3ffdb3a76d8be5f94d333b8dcbc5a70f03ca55987446399531&w=740',
    category: 'starters'
  },
  {
    id: 's2',
    name: 'Mozzarella Sticks',
    description: 'Golden fried mozzarella sticks with marinara sauce',
    price: 189,
    image: 'https://img.freepik.com/free-photo/delicious-epic-food-presentation_23-2151888674.jpg?t=st=1745278862~exp=1745282462~hmac=5bcb90f0e0d57c9a3ab0713cfc0136f2077110d2efcc1c5b37b75ab8888cfae8&w=740',
    category: 'starters'
  },
  {
    id: 's3',
    name: 'Buffalo Wings',
    description: 'Spicy chicken wings with blue cheese dip',
    price: 175,
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d',
    category: 'starters'
  },
  
  // Main Courses
  {
    id: 'm1',
    name: 'Grilled Salmon',
    description: 'Fresh salmon fillet with lemon butter sauce and vegetables',
    price: 275,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
    category: 'main-courses'
  },
  {
    id: 'm2',
    name: 'Chicken Alfredo',
    description: 'Creamy pasta with grilled chicken and parmesan',
    price: 250,
    image: 'https://img.freepik.com/premium-photo/green-chayote-fruit-is-shown-with-white-background_1269615-6316.jpg?w=826',
    category: 'main-courses'
  },
  {
    id: 'm3',
    name: 'Steak with Fries',
    description: 'Grilled ribeye steak with garlic butter and crispy fries',
    price: 289,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    category: 'main-courses'
  },
  
  // Pizzas
  {
    id: 'p1',
    name: 'Margherita Pizza',
    description: 'Fresh tomato sauce, mozzarella, and basil',
    price: 99,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    category: 'pizzas'
  },
  {
    id: 'p2',
    name: 'Pepperoni Pizza',
    description: 'Classic pizza with pepperoni and cheese',
    price: 150,
    image: 'https://media.istockphoto.com/id/1142744772/photo/pepperoni-pizza-on-a-black-concrete-background.jpg?s=612x612&w=0&k=20&c=_bUckp6ZyubWtwlxUHEx9SIawkIta83RIz4B4QtFbns=',
    // image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
    category: 'pizzas'
  },
  {
    id: 'p3',
    name: 'Vegetarian Pizza',
    description: 'Assorted fresh vegetables with mozzarella',
    price: 189,
    image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5',
    category: 'pizzas'
  },

  {
    id: 'ph1',
    name: 'Pizza Hut Special',
    description: 'Delicious Pizza Hut special with premium toppings',
    price: 349,
    image: 'https://img.freepik.com/premium-photo/pizza-with-salami-cheese_223675-11.jpg?w=740',
    category: 'pizzas'
  },
  {
    id: 'pw1',
    name: 'Pizza Wings',
    description: 'Crispy chicken wings served with a cheesy pizza base',
    price: 399,
    image: 'https://b.zmtcdn.com/data/pictures/2/20647162/167a14d4341aa7c86bda6b59799a29a2_o2_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
    category: 'pizzas'
  },
  {
    id: 'cp1',
    name: 'Chilli Paneer Pizza',
    description: 'Spicy chilli paneer topping with mozzarella cheese',
    price: 299,
    image: 'https://vegplatter.in/files/public/images/partner/catalog/140/chilli%20paneer.jpg',
    category: 'pizzas'
  },
  
  // Burgers
  {
    id: 'b1',
    name: 'Classic Cheeseburger',
    description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
    price: 249,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    category: 'burgers'
  },
  {
    id: 'b2',
    name: 'Bacon Burger',
    description: 'Beef patty with crispy bacon, cheese, and BBQ sauce',
    price: 149,
    image: 'https://img.freepik.com/free-psd/close-up-hamburger-isolated_23-2151604203.jpg?t=st=1745351458~exp=1745355058~hmac=d6abf4aae29233809dbf6db6f2237a2f8e578723f5cc1ebab80ab7975ac5c7d8&w=826',
    category: 'burgers'
  },
  {
    id: 'b3',
    name: 'Veggie Burger',
    description: 'Plant-based patty with avocado, lettuce, and vegan mayo',
    price: 199,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707',
    category: 'burgers'
  },
  {
    id: 'b4',
    name: 'Spicy Zinger',
    description: 'Crispy chicken patty with spicy sauce and fresh lettuce',
    price: 199,
    image: 'https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?t=st=1745350954~exp=1745354554~hmac=ad4db65d68944143304f849bb8bbe6134e87f5eccf78c4a42b5a1e47cff86f95&w=1380',
    category: 'burgers'
  },
  {
    id: 'b5',
    name: 'Veg Cheese Burger',
    description: 'Vegetarian patty with melted cheese and fresh veggies',
    price: 245,
    image: 'https://img.freepik.com/free-photo/delicious-meat-sandwich-with-tomatoes-green-dark-surface-close-up-shot_179666-42483.jpg?t=st=1745351196~exp=1745354796~hmac=13dc331b9b6fb38b618ba23208300d1a2e885a95a80661818120200dc87d49d4&w=1380',
    category: 'burgers'
  },
  {
    id: 'b6',
    name: 'Crispy Masala',
    description: 'Crispy chicken patty with tangy masala sauce',
    price: 179,
    image: 'https://img.freepik.com/free-photo/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast_140725-159215.jpg?t=st=1745351369~exp=1745354969~hmac=9355065edd32f5ec68fafb7328cb836920067479d28eba5f5c402a20a38f56da&w=1380',
    category: 'burgers'
  },


  
  // Desserts
  {
    id: 'd1',
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie with vanilla ice cream',
    price: 250,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
    category: 'desserts'
  },
  {
    id: 'd2',
    name: 'Cheesecake',
    description: 'Creamy New York style cheesecake with berry compote',
    price: 350,
    image: 'https://img.freepik.com/free-photo/strawberry-cheesecake-isolated-white-background_123827-29176.jpg?t=st=1745279057~exp=1745282657~hmac=6ea149c4f5d638661f3ed7907b896bc5b1609a1475428983824b67f620522f18&w=1380',
    category: 'desserts'
  },
  {
    id: 'd3',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee and mascarpone',
    price: 150,
    image: 'https://img.freepik.com/free-photo/delicious-coffee-tiramisu_23-2151940375.jpg?t=st=1745279442~exp=1745283042~hmac=8344dcb7d38d45a958ff769ccfe1a92cff88d3d5d07e32b00c69118971be5bbe&w=740',
    category: 'desserts'
  },
  
  {
    id: 'd4',
    name: 'Gulab Jamun',
    description: 'Soft fried dumplings soaked in sugar syrup',
    price: 99,
    image: 'https://img.freepik.com/free-psd/sweet-gulab-jamun-bowl-delicious-indian-dessert_84443-34345.jpg?t=st=1745352430~exp=1745356030~hmac=c36a6078b1f1ac55f0c2f3042a05ed30dfad7bc6605b54ec33037da4a70ac30d&w=826',
    category: 'desserts'
  },
  {
    id: 'd5',
    name: 'Rasmalai',
    description: 'Soft paneer balls soaked in sweetened milk with saffron',
    price: 129,
    image: 'https://media.istockphoto.com/id/1411786526/photo/rasmalai.jpg?s=612x612&w=0&k=20&c=0WzEpwBAmZ6HoiAdH5h1MywksKDVlIotntUj8e2wxz0=',
    category: 'desserts'
  },
  {
    id: 'd6',
    name: 'Mango Cheesecake',
    description: 'Creamy cheesecake topped with fresh mango puree',
    price: 199,
    image: 'https://media.istockphoto.com/id/1324401588/photo/no-bake-mango-cheesecake-healthy-dessert-vegetarian-food-raw-food-raw-dessert-piece-of-cake.jpg?s=612x612&w=0&k=20&c=PtPFLHtgWfSuH_8akFZlQQ5-J6B6Ase-X0PfSoPVep8=',
    category: 'desserts'
  },
  // Drinks
  {
    id: 'dr1',
    name: 'Fresh Lemonade',
    description: 'Homemade lemonade with mint and ice',
    price: 200,
    image: 'https://img.freepik.com/free-photo/slices-fruits-near-glass-drink-with-ice-herbs-table_23-2148107706.jpg?t=st=1745279121~exp=1745282721~hmac=7104b7f5ecad3a8e5a6bb451c5d7dc3a3b0e41e803cc6e9d26d0eb70b8dff39f&w=740',
    category: 'drinks'
  },
  {
    id: 'dr2',
    name: 'Iced Tea',
    description: 'Refreshing iced tea with lemon',
    price: 250,
    image: 'https://img.freepik.com/premium-photo/png-ice-tea-cocktail-mojito-drink_53876-730003.jpg?w=826',
    category: 'drinks'
  },
  {
    id: 'dr3',
    name: 'Mango Smoothie',
    description: 'Fresh mango blended with yogurt and honey',
    price: 150,
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4',
    category: 'drinks'
  },

  {
    id: 'dr4',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink with mango flavor',
    price: 99,
    image: 'https://img.freepik.com/free-photo/mango-juice-glass-blue-surface_1150-41955.jpg',
    category: 'drinks'
  },
  {
    id: 'dr5',
    name: 'Aam Panna',
    description: 'Traditional Indian summer drink made with raw mangoes',
    price: 89,
    image: 'https://kannanskitchen.com/wp-content/uploads/2023/03/DSC_5557-1.jpg',
    category: 'drinks'
  },
  {
    id: 'dr6',
    name: 'Falooda',
    description: 'Sweet and creamy dessert drink with vermicelli and basil seeds',
    price: 129,
    image: 'https://img.freepik.com/free-photo/strawberry-milkshake-with-ice-table_140725-5486.jpg?t=st=1745354316~exp=1745357916~hmac=565d3ee58ed88e13f8d85d623e2b8d570a396f5241d4d643680874ba436dcf40&w=740',
    category: 'drinks'
  },

  // Salad
  {
    id: 'sal1',
    name: 'Greek Salad',
    description: 'Fresh vegetables with feta cheese and olives',
    price: 149,
    image: 'https://img.freepik.com/free-photo/top-view-salad-with-feta-cheese-cutting-board_23-2148700461.jpg?t=st=1745356201~exp=1745359801~hmac=b784031b2da5caa04df08bccdd55c2eeb38099638e1b6aaa0965f320ac07b62e&w=740',
    category: 'salad'
  },
  {
    id: 'sal2',
    name: 'Caesar Salad',
    description: 'Crispy lettuce with Caesar dressing and croutons',
    price: 199,
    image: food_2,
    category: 'salad'
  },
  {
    id: 'sal3',
    name: 'Fruit Salad',
    description: 'Assorted fresh fruits with honey dressing',
    price: 129,
    image: food_33,
    category: 'salad'
  },
  {
    id: 'sal4',
    name: 'Pasta Salad',
    description: 'Pasta with fresh vegetables and Italian dressing',
    price: 199,
    image: food_3,
    category: 'salad'
  },
  {
    id: 'sal5',
    name: 'Quinoa Salad',
    description: 'Healthy quinoa with mixed vegetables and lemon dressing',
    price: 249,
    image: 'https://img.freepik.com/free-psd/delicious-quinoa-salad-with-fresh-vegetables-white-bowl-healthy-food-recipe-vegan-vegetarian-meal-prep-lunch-dinner_632498-28598.jpg?t=st=1745357361~exp=1745360961~hmac=23c92cd2340a6dbbc5da1c7d76a37ccfbcb12ef38da995b4043c89b1b460fa4c&w=826',
    category: 'salad'
  },
  {
    id: 'sal6',
    name: 'Cabbage Salad',
    description: 'Fresh cabbage with lemon and olive oil dressing',
    price: 99,
    image: 'https://img.freepik.com/free-photo/vitamin-salad-young-vegetables-cabbage-radish-cucumber-fresh-herbs_2829-19920.jpg?t=st=1745357817~exp=1745361417~hmac=16144fc7699d21097e437219d3d0d6236d16c865c7433d35504def852a313708&w=900',
    category: 'salad'
  },



  // Rolls
  {
    id: 'rol1',
    name: 'Chicken Roll',
    description: 'Spicy chicken wrapped in a soft paratha',
    price: 99,
    image: food_7,
    category: 'rolls'
  },
  {
    id: 'rol2',
    name: 'Paneer Roll',
    description: 'Grilled paneer wrapped in a soft paratha',
    price: 89,
    image: food_6,
    category: 'rolls'
  },
  {
    id: 'rol3',
    name: 'Egg Roll',
    description: 'Delicious egg roll wrapped in a soft paratha with spices',
    price: 119,
    image: 'https://img.freepik.com/premium-photo/egg-paratha-sandwich-closeup_331851-144.jpg?w=740',
    category: 'rolls'
  },


  // Sandwich
  {
    id: 'sand1',
    name: 'Chicken Tikka Sandwich',
    description: 'Grilled chicken tikka with fresh veggies and tangy sauce',
    price: 199,
    image: food_13, 
    category: 'sandwich'
  },
  {
    id: 'sand2',
    name: 'Paneer Tikka Sandwich',
    description: 'Grilled paneer tikka with fresh veggies and mint chutney',
    price: 179,
    image: food_14, 
    category: 'sandwich'
  },
  {
    id: 'sand3',
    name: 'Veggie Delight Sandwich',
    description: 'Fresh veggies with cheese and a creamy spread',
    price: 149,
    image: food_15,  
    category: 'sandwich'
  },

  // Pasta
  {
    id: 'pas1',
    name: 'Penne Alfredo',
    description: 'Creamy Alfredo sauce with penne pasta',
    price: 249,
    image: food_25,
    category: 'pasta'
  },
  {
    id: 'pas2',
    name: 'Spaghetti Bolognese',
    description: 'Rich tomato sauce with minced meat and spaghetti',
    price: 299,
    image: food_28,
    category: 'pasta'
  },
  {
    id: 'pas3',
    name: 'Pesto Pasta',
    description: 'Pasta tossed in a flavorful basil pesto sauce', price: 299,
    image: food_26,
    category: 'pasta'
  },

  // Noodles
  {
    id: 'noo1',
    name: 'Hakka Noodles',
    description: 'Stir-fried noodles with vegetables and soy sauce',
    price: 149,
    image: 'https://img.freepik.com/free-psd/delicious-noodles-with-mushrooms-peppers-peas-asian-cuisine-bowl-tasty-food_84443-46443.jpg?t=st=1745359891~exp=1745363491~hmac=4ee5722a368fdf3df6a353cdead5e7eedb74c5f9f7ae7ab19d0073320593dec5&w=826',
    category: 'noodles'
  },
  {
    id: 'noo2',
    name: 'Chow Mein',
    description: 'Crispy noodles with a savory sauce',
    price: 169,
    image: 'https://img.freepik.com/free-psd/lo-mein-isolated-transparent-background_191095-42061.jpg?t=st=1745360064~exp=1745363664~hmac=a878ba242e9bc11f3dd6cd81e8f3e13be1f6258dc2af638e2da1a4dee4f7175a&w=826',
    category: 'noodles'
  },
  {
    id: 'noo3',
    name: 'Vegetable Fried Noodles',
    description: 'Stir-fried noodles with mixed vegetables and a soy sauce glaze',
    price: 159,
    image: food_16,
    category: 'noodles'
  },

  // Biryani
  {
    id: 'bir1',
    name: 'Hyderabadi Biryani',
    description: 'Aromatic basmati rice cooked with spices and chicken',
    price: 299,
    image: 'https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52237.jpg?w=740',
    category: 'biryani'
  },
  {
    id: 'bir2',
    name: 'Veg Biryani',
    description: 'Flavorful rice cooked with fresh vegetables and spices',
    price: 249,
    image: 'https://img.freepik.com/premium-photo/tawa-pulao-pulav-pilaf-pilau-is-indian-street-food-made-using-basmati-rice-vegetables-spices-selective-focus_466689-70863.jpg?w=1380',
    category: 'biryani'
  },
  {
    id: 'bir3',
    name: 'Lucknowi Biryani',
    description: 'Aromatic basmati rice cooked with spices and chicken',
    price: 299,
    image: food_32,
    category: 'biryani'
  },
];
