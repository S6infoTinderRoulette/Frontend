import axios from 'axios'

var theAPIUrl = "http://localhost:8000/"

export default {
    getClasses(context) {
        axios.get(theAPIUrl + 'classes/')
            .then(function (response) {
                context.commit('updateClasses', response.data)
            })
    },
    getGroupTypes(context) {
        axios.get(theAPIUrl + 'grouptypes/')
            .then(function (response) {
                context.commit('updateGroupTypes', response.data)
            })
    },
    createGroups(context, {selectedClass, selectedGroupType, groupSizes}) { 
        axios.get(theAPIUrl + 'createGroupPerType/' + selectedClass.idClass + '/' + selectedGroupType.idGroupType + '/')
        .then(function (response) {
            context.commit('updateGeneratedGroups', response.data)
        })
    }
}