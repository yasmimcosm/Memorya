
    const URL_BASE = "http://localhost:3000"

    const api = {

        async buscarPensamentos () {
            try {
                const response = await axios.get(`${URL_BASE}/pensamentos`)
                return response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async salvarPensamento (pensamentos) {
            try {
                const response = await axios.post(`${URL_BASE}/pensamentos`, pensamentos)
                return response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async buscarPensamentoPorId (id) {
            try {
                const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
                return response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async editarPensamento (pensamento) {
            try {
                const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
                return response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

        async excluirPensamento (id){
            try {
                const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
                return response.data

            } catch (error) {
                console.error(error)
                throw error
            }
        },

    }
    

    export default api
