import axios from 'axios'

export default {
    getGroupTypes(context) {
        debugger
        axios.get('theAPIUrl/groupTypes')
            .then(function (response) {
                context.commit('updateGroupTypes', response.data)
            })
    }
}