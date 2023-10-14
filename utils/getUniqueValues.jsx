export default function getUniqueValues(products, type) {
    let uniqueValues = products.map((product) => product[type]);
    return ['all', ...new Set(uniqueValues)];
}
