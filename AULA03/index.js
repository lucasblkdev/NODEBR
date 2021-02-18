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

const getUserAddress = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                street: 'Av. Teste',
                number: 2222
            })
        }, 2000);
    })
}

// const userResolver = (userError, user) => {
//     if(userError) {
//         console.error('error with user ID', userError)
//         return 
//     }

//     userInfo = user

//     getUserPhone(user.id, phoneResolver)
//     getUserAddress(user.id, addressResolver)
// }

// const phoneResolver = (phoneError, phone) => {
//     if(phoneError) {
//         console.error('error with user PHONE', phoneError)
//         return 
//     }
    
//     phoneUserInfo = phone
// }

// const addressResolver = (addressError, address) => {
//     if(addressError) {
//         console.error('error with user ADDRESS', addressError)
//         return 
//     }

//     addressUserInfo = address

//     showUserInfos()

// }

// const showUserInfos = () => {
//     console.log(`
//         Nome: ${userInfo.name}
//         Telefone: (${phoneUserInfo.ddd}) ${phoneUserInfo.number}
//         Endereço: ${addressUserInfo.street}, ${addressUserInfo.number}
//     `)
// }

// Chamada Inicial
const userPromise = getUser()
// para manipular o sucesso then()
// para manipular erros catch()
userPromise
    .then((user) => {
        return getUserPhone(user.id)
        .then(phoneResolver = (phone) => {
            return  getUserAddress(user.id)
                    .then(addressResolver = (address) => {
                        return {
                            user: user,
                            phone : phone,
                            address, address
                        }
                    })

        })
    })
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log('Catch Error', error)
    })
