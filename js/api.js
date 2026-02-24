
    const URL_BASE = "http://localhost:3000"

    const api = {

        async buscarPensamento () {
            try {
                const response = await axios.get(`${URL_BASE}/pensamentos`)
                return await response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async salvarPensamento () {
            try {
                const response = await axios.post(`${URL_BASE}/pensamentos`, pensamentos)
                return await response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async buscarPensamentoPorId (id) {
            try {
                const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
                return await response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async editarPensamento (pensamento) {
            try {
                const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
                return await response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async excluirPensamento (id){
            try {
                const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
                return await response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },
        
    }
    

    export default api
