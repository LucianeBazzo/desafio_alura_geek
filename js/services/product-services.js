
const BASE_URL = "https://6761e9c946efb373237342cd.mockapi.io/product";

const productList = async () => {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro ao buscar produtos: ", error);
    }
};

const createProduct = async (nome, preco, imagem) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome, preco, imagem})
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro ao criar produto: ", error)
    }
}

const deleteProduct = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Erro ao deletar o produto');
    }
}

// vou utilizar essa função em outro canto por isso exporto
export const servicesProducts = {
    productList,
    createProduct,
    deleteProduct,
};