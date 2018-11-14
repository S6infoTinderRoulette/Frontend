import axios from 'axios'

var theAPIUrl = "http://localhost:8000/"

export default {
    getClasses(context) {
        axios.get(theAPIUrl + 'classes/')
            .then(function (response) {
                context.commit('updateClasses', response.data)
            })
    },
    getNumberOfStudentInClass(context, {selectedClass}) {
        axios.get(theAPIUrl + 'memberclass/' + selectedClass.idClass + '/')
            .then(function (response) {
                context.commit('updateNumberOfStudentInClass', response.data)
            })
    },
    getGroupTypes(context) {
        axios.get(theAPIUrl + 'grouptypes/')
            .then(function (response) {
                context.commit('updateGroupTypes', response.data)
            })
    },
    getDefaultNumberOfGroupSize(context, {selectedGroupType}) {
        axios.get(theAPIUrl + 'grouptype/defaultValue/' + selectedGroupType.idGroupType +'/' )
            .then(function (response) {
                context.commit('updateDefaultNumberOfGroupSize', response.data)
            })
    },
    getClassesOfStudent(context){
        axios.get(theAPIUrl + 'memberclass/connected/')
            .then(function (response) {
                context.commit('updateClassesOfStudent', response.data)
            })
    },
    getActivities(context, {selectedClass} ){
        axios.get(theAPIUrl + 'activities/associatedTo/' + selectedClass.idClass + '/' )
            .then(function (response) {
                context.commit('updateActivities', response.data)
            })
    },
    getNumberOfStudentsForActivity(context, {selectedActivity} ){        
        axios.get(theAPIUrl + 'activities/' + selectedActivity.idActivity + '/numberOfPartners/' )
            .then(function (response) {
                context.commit('updateNumberOfStudentsForActivity', response.data)
            })
    },
    getFreeGroups(context, {selectedActivity}){
        axios.get(theAPIUrl + 'matchmaking/groups/' + selectedActivity.idActivity + '/true/' )
            .then(function (response) {
                context.commit('updateFreeGroups', response.data)
            })
    },
    getFreeMembers(context, {selectedActivity}){
        axios.get(theAPIUrl + 'matchmaking/members/' + selectedActivity.idActivity + '/')
            .then(function (response) {
                context.commit('updateFreeMembers', response.data)
            })
    },
    createGroups(context, {selectedClass, selectedGroupType, newDefaultGroupSize, groupSizes}) {
        let data =  {
            idClass: selectedClass.idClass,
            idGroupType: selectedGroupType.idGroupType
        }
        if (newDefaultGroupSize != null) {
            data.nbMember = newDefaultGroupSize
        } else if (groupSizes != null) {
            data.sizes = groupSizes
        }
        axios({
            method: 'post',
            url: theAPIUrl + 'createGroup/',
            data: data,
            async: true,
            crossDomain: true,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        })
          .then(function (response) {
            context.commit('updateGeneratedGroups', response.data)
          })
          .catch(e => {
              console.log(e)
          })
    },
    saveGroups(context, {groupOfGroups, idClass, idGroupType}) {
        axios({
            method: 'post',
            url: theAPIUrl + 'saveGroup/' + idClass + '/' + idGroupType + '/',
            data: groupOfGroups,
            async: true,
            crossDomain: true,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        })
        .then(function (response) {
            alert('Groupes créés')
          })
    },
    sendRequestTo(context, {cipRequested, idActivity}) {
        axios({
            method: 'post',
            url: theAPIUrl + 'matchmaking/' + idActivity + '/',
            data: {
                cip: cipRequested
            },
            async: true,
            crossDomain: true,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        })
        .then(function (response) {
            alert('Demande envoyée')
          })
          .catch(e => {
            console.log(e)
        })
    }
}