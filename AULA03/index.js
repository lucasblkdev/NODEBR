/* 
! PROMISES
* Ciclo de vida:
* !  Pending: Estado inicial, ainda não termina ou ainda não foi rejeitado
* !  Fullfilled: Quando executou todas as oprações com sucesso
* !  Rejected: Quando a operação falhou

Objetivo:
Refatorar as callbacks para PROMISES
*/

// let userInfo, phoneUserInfo, addressUserInfo

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


// Chamada Inicial
const userPromise = getUser()

userPromise
    .then((user) => {
        return getUserPhone(user.id)
        .then(phoneResolver = (phone) => {
            return {
                user: user,
                phone : phone,
            }
        })
    })
    .then((result) => {
        const {user, phone} = result

        const address = getAddressAsync(result.user.id)
        return address.then(addressResolver = (address) => {
            return {
                user: user,
                phone: phone,
                address: address
            }
        })
    })
    .then((result) => {
        console.log('ObjectUserInfo :', result)
    })
    .catch((error) => {
        console.log('Catch Error', error)
    })
