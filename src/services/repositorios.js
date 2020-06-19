import api from './api';


export function listarRepositorios() {
    return api.get('/repositories').then(response => response.data);
}


export function darLikeEmRepositorio(id) {
    return api.post(`/repositories/${id}/like`,{}).then(response => response.data);
}
