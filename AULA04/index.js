const util = require('util')

const getUser = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            // linha 19 - manipulação de erro
            // return reject(new Error('DEU RUIM DE VERDADE!'))

            return resolve({
                    id: 1,
                    name: 'Lucas Rodrigues',
                    birthDate: new Date()
                }
            ) 
        }, 1000);
    })
}
const getUserPhone = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                    number: '2222-2222',
                    ddd: 11
                })
        }, 2000);
    })
}
const getUserAddress = (userId, callback) => {
        setTimeout(() => {
            return callback(null, {
                street: 'Av. Teste',
                number: 2222
            })
        }, 2000);
}
const getAddressAsync = util.promisify(getUserAddress)

main()
async function main() {
    try{
        const user = await getUser()
        // const phone = await getUserPhone(user.id)
        // const address = await getAddressAsync(user.id)

        const result = await  Promise.all([
            getUserPhone(user.id),
            getAddressAsync(user.id)
        ])

        const phone =  result[0]
        const address =  result[1]

        console.log(user)
        console.log(phone)
        console.log(address)
    }

    catch(error){
        console.error('DEU RUIM', error)
    }
}