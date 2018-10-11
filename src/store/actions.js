import axios from 'axios'

export default {
    getClasses(context) {
        axios.get('theAPIUrl/classes')
            .then(function (response) {
                context.commit('updateClasses', response.data)
            })
    },
    getGroupTypes(context) {
        axios.get('theAPIUrl/groupTypes')
            .then(function (response) {
                context.commit('updateGroupTypes', response.data)
            })
    },
    createGroups(context, {selectedClass, selectedGroupType, groupSizes}) {
        alert(`Groupes créés pour les paramètres suivants:\nCours: ${selectedClass.name}\nType de groupe: ${selectedGroupType.name}\nGrosseur des groupes: ${groupSizes.toString()}`)
    }
}