import Api from './Api';

export default {
    userLogin: (email, password) => Api.post('/user/login', { email, password }),
    userRegister: (email, password) => Api.post('/user/register', { email, password }),
    userLogout: () => Api.post('/user/logout'),
    userGet: () => Api.get('/user/get'),
    userUpdate: user => Api.put('/user/update', user),
    userDelete: () => Api.delete('/user/delete'),
    userGetAll: () => Api.get('/user/getAll'),
    userGetAllByEmail: email => Api.get('/user/getAllByEmail', { email }),
    userGetAllByName: name => Api.get('/user/getAllByName', { name }),
    userGetAllByPhone: phone => Api.get('/user/getAllByPhone', { phone }),
    userGetAllByRole: role => Api.get('/user/getAllByRole', { role }),
    userGetAllByStatus: status => Api.get('/user/getAllByStatus', { status }),
    userGetAllByUsername: username => Api.get('/user/getAllByUsername', { username }),
};
