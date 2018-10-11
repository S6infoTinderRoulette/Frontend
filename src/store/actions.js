import axios from 'axios'
import { isNullOrUndefined } from 'util';

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
        let mess = 'Groupes créés pour les paramètres suivants:'
        if (selectedClass != null) mess += `\nCours: ${selectedClass.name}`
        if (selectedGroupType != null) mess += `\nType de groupe: ${selectedGroupType.name}`
        if (groupSizes.length > 0 && groupSizes != '') mess += `\nGrosseur des groupes: ${groupSizes.toString()}`
        alert(mess)
    }
}