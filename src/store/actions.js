import axios from 'axios'

export default {
    getGroupTypes(context) {
        axios.get('theAPIUrl/groupTypes')
            .then(function (response) {
                context.commit('updateGroupTypes', response.data)
            })
    }
}