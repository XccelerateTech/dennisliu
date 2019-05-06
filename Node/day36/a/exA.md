redis-server --daemonize yes
redis-cli
lpush shoppingList 'Bacon' 'Beef' 'Butter' 'Cream' 'Eggs' 'Garlic' 'Horse Redish' 'Milk' 'Sugar'
sort shoppingList alpha