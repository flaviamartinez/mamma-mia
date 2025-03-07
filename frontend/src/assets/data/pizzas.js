export const pizzas = [
  {
    desc: 'La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.',
    id: 'P001',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    name: 'napolitana',
    price: 5950
  },
  {
    desc: 'De inspiración ibérica, la pizza española combina sabores intensos con ingredientes como chorizo, pimientos asados y aceitunas negras sobre una base de tomate y queso mozzarella. Su toque ahumado y especiado la convierte en una opción sabrosa y llena de carácter.',
    id: 'P002',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
    ingredients: ['mozzarella', 'tomates', 'jamón', 'choricillo'],
    name: 'española',
    price: 7250
  },
  {
    desc: 'Una variante clásica y llena de sabor, la pizza salame se caracteriza por finas lonchas de salame curado, que aportan un toque especiado y ligeramente picante. Su equilibrio entre el queso fundido y la textura crujiente de la masa la hace irresistible para los amantes de los embutidos.',
    id: 'P003',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
    ingredients: ['mozzarella', 'tomates', 'salame', 'orégano'],
    name: 'salame',
    price: 5990
  },
  {
    desc: 'Representando las cuatro estaciones del año, esta pizza se divide en cuatro secciones, cada una con ingredientes distintos: champiñones, alcachofas, jamón y aceitunas. Su combinación de sabores permite disfrutar de una experiencia variada en cada bocado.',
    id: 'P004',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be',
    ingredients: ['mozzarella', 'salame', 'aceitunas', 'champiñones'],
    name: 'cuatro estaciones',
    price: 9590
  },
  {
    desc: 'Una opción indulgente, la pizza bacon destaca por su mezcla de queso fundido y crujientes trozos de bacon ahumado, que aportan un sabor intenso y una textura irresistible. Perfecta para quienes buscan un toque extra de sabor y cremosidad en su pizza.',
    id: 'P005',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2',
    ingredients: ['mozzarella', 'tomates cherry', 'bacon', 'orégano'],
    name: 'bacon',
    price: 6450
  },
  {
    desc: 'Para los amantes de los sabores intensos, la pizza de pollo picante combina tiernos trozos de pollo sazonado con especias, salsa de tomate y un toque de ají o chile. Su equilibrio entre el picante y la suavidad del queso la convierte en una elección atrevida y deliciosa.',
    id: 'P006',
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be',
    ingredients: ['mozzarella', 'pimientos', 'pollo grillé', 'orégano'],
    name: 'pollo picante',
    price: 8500
  }
]

// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: 'p001',
    name: 'napolitana',
    price: 5950,
    count: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
  },
  {
    id: 'p002',
    name: 'española',
    price: 7250,
    count: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab'
  },
  {
    id: 'p003',
    name: 'salame',
    price: 5990,
    count: 1,
    img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3'
  }
]
