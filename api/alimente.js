const URL = "https://670fe5a3a85f4164ef2c6202.mockapi.io/Alimente";

export async function getAllProducts() {
    const response = await fetch(URL);
    const products = await response.json();

    return products;
}
