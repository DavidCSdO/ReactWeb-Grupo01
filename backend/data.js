import bcrypt from 'bcrypt';

const data = {
    users: [
        {
            name: 'Kley',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'David',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products:[
        {
           
        name: "Babosa",
        imagem: "/images/Bab.png",
        marca: "Marca",
        categoria: "Plantas",
        description: "Produto ideal pro teu cabelo, amigo!",
        price: 90,
        countInStock: 10,
        rating: 4.5,
        numReviews: 10,
        },
        {
            
        name: "Bonsai",
        imagem: "/images/Bon.png",
        marca: "Marca",
        categoria: "Plantas",
        description: "Diretamente da Ásia, pode estar morta, mas já foi linda!",
        price: 9200,
        countInStock: 20,
        rating: 4,
        numReviews: 14,
           
        },
        {
            
        name: "Lírio",
        imagem: "/images/LILI.png",
        marca: "Marca",
        categoria: "Plantas",
        description: "Juro que nem sei qual é a dessa!",
        price: 395,
        countInStock: 0,
        rating: 2,
        numReviews: 17,
        },
        {
            
        name: "Orquídea",
        imagem: "/images/orq.png",
        marca: "Marca",
        categoria: "Plantas",
        description: "Pela planta, mas cuide bem, se não ela morre bem facil",
        price: 220,
        countInStock: 15,
        rating: 5,
        numReviews: 14,
        },
        {
            
        name: "Rosa",
        imagem: "/images/Ros.png",
        marca: "Marca",
        categoria: "Plantas",
        description: "Essa é a rosa rosa! Massa, né?",
        price: 123,
        countInStock: 5,
        rating: 3,
        numReviews: 10,
        },
        {
            
        name: "Samambaia",
        imagem: "/images/sam.png",
        marca: "Marca",
        categoria: "Plantas",
        description: "Produto destinados para as avós",
        price: 12,
        countInStock: 12,
        rating: 4.5,
        numReviews: 15,
        },
    ],
};

export default data;