export function getProductData() {
    return fetch("./data/data.json")
        .then(Response => {
            return Response.json()
        })
        .then(data => {
            return data
        })
        .catch(Error => {
            console.log("Error", Error)
        })
}