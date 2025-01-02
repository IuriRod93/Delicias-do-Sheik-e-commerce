// Types:
// 1 = Snack
// 2 = Combos
// 3 = Portions
// 4 = Drinks

const products = [
    {
        id: 1,
        type: 1,
        name: 'Sanduíche de Queijo Minas c/ Peito de Peru',
        description: 'Pão sírio, Queijo minas, Peito de peru, alface e tomate.',
        price: 14.00,
        lastPrice: 0,
        img: 'Minas.png'
    },
    {
        id: 2,
        type: 1,
        name: 'Cheddar com Lombo Canadense',
        description: 'Pão sírio, cheddar, lombo canadense, alface e tomate.',
        price: 14.00,
        lastPrice: 0,
        img: 'Lombo.png'
    },
    {
        id: 3,
        type: 1,
        name: 'Frango c/ Requeijão',
        description: 'Pão sírio, frango, requeijão, ricota, milho verde, cebolinha, alface e tomate.',
        price: 14.00,
        lastPrice: 0,
        img: 'Frango.png'
    },
    {
        id: 4,
        type: 1,
        name: 'Sanduíches Especiais',
        description: 'São sanduíches em sabores especiais como Camarão, Salmão e Atum. São sabores que é somente sob encomendas',
        price: 18.00,
        lastPrice: 0,
        img: 'Salmao.png'
    },
    {
        id: 4,
        type: 1,
        name: 'Super-Combo',
        description: '4 sanduíches, 4 mattes de 300ml.',
        price: 72.00,
        lastPrice: 80.00,
        img: 'Super-combo.png'
    },
    {
        id: 101,
        type: 2,
        name: 'Combo',
        description: '1 sanduíches, 1 matte de 300ml.',
        price: 18.00,
        lastPrice: 0,
        img: 'combo.png'
    },
    {
        id: 102,
        type: 2,
        name: 'Combo Médio',
        description: '2 sanduíches e 2 matte 300ml.',
        price: 36.00,
        lastPrice: 40.00,
        img: 'Combo-medio.png'
    },
    {
        id: 103,
        type: 2,
        name: 'Combo',
        description: 'Um sanduíche e um Matte 300ml.',
        price: 18.00,
        lastPrice: 22.00,
        img: 'combo.png'
    },
    {
        id: 301,
        type: 4,
        name: 'Matte 300ml natural',
        description: 'Matte 300ml, natural garrafa.',
        price: 6.00,
        lastPrice: 0,
        img: 'Matte.jpg'
    },
    {
        id: 302,
        type: 4,
        name: 'Matte 300ml limão',
        description: 'Matte 300ml, limão garrafa.',
        price: 6.00,
        lastPrice: 0,
        img: 'Mattelimao.png'
    },
    {
        id: 303,
        type: 4,
        name: 'Del Valle 300ml Pessego',
        description: 'Del Vale 300ml, pessego lata.',
        price: 6.50,
        lastPrice: 0,
        img: 'DelValle.png'
    },
]