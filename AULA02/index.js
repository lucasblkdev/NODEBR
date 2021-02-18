/*
Objetivo::
0 - Obter Usuario
1 - Ober o número de telefone de um usuario a partir de seu ID
2 - Obet o endereço do usuário pelo ID
*/

let userInfo, phoneUserInfo, adressUserInfo

const getUser = (callback) => {
    setTimeout(() => {
        return callback(null, {
                id: 1,
                name: 'Lucas Rodrigues',
                birthDate: new Date()
            }
        ) 
    }, 1000);
}

const getUserPhone = (userId, callback) => {
    setTimeout(() => {
        return callback(null, {
                number: '2222-2222',
                ddd: 11
            })
    }, 2000);
}

const getUserAdress = (userId, callback) => {
    setTimeout(() => {
        return callback(null, {
            street: 'Av. Teste',
            number: 2222
        })
    }, 2000);
}

const userResolver = (userError, user) => {
    if(userError) {
        console.error('error with user ID', userError)
        return 
    }

    userInfo = user

    getUserPhone(user.id, phoneResolver)
    getUserAdress(user.id, adressResolver)
}

const phoneResolver = (phoneError, phone) => {
    if(phoneError) {
        console.error('error with user PHONE', phoneError)
        return 
    }
    
    phoneUserInfo = phone
}

const adressResolver = (adressError, adress) => {
    if(adressError) {
        console.error('error with user ADRESS', adressError)
        return 
    }

    adressUserInfo = adress

    showUserInfos()

}

const showUserInfos = () => {
    console.log(`
        Nome: ${userInfo.name}
        Telefone: (${phoneUserInfo.ddd}) ${phoneUserInfo.number}
        Endereço: ${adressUserInfo.street}, ${adressUserInfo.number}
    `)
}

// Chamada Inicial
getUser(userResolver);
