import axios from 'axios'

axios.defaults.withCredentials = true

var theAPIUrl = "http://localhost:8000/"

export default {
    findSelfStatus(context) {
        const call = axios.get(theAPIUrl + 'findself/')
        call.then(function (response) {
                context.commit('updateSelfStatus', response.data)
            })
        return call
    },
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
        axios.get(theAPIUrl + 'grouptype/')
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
            .catch(function (e) {
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
            data.sizes = groupSizes.filter(size => size !== null && size !== undefined && size !== '')
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
            url: theAPIUrl + 'matchmaking/request/',
            data: {
                cipRequested: cipRequested,
                idActivity : idActivity
            },
            async: true,
            crossDomain: true,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        })
    },
    getGroups(context, {selectedClass, selectedGroupType}) {
        axios.get(theAPIUrl + 'existingGroup/' + selectedClass.idClass + '/' + selectedGroupType.idGroupType + '/')
            .then(function (response) {
                context.commit('updateGeneratedGroups', response.data)
            })
    },
    getIndex(context, {selectedClass, selectedGroupType}) {
        axios.get(theAPIUrl + 'existingGroup/index/' + selectedClass.idClass + '/' + selectedGroupType.idGroupType + '/')
            .then(function (response) {
                context.commit('updateIndexes', response.data)
            })
    },
    getGroupsWithIndex(context, {selectedClass, selectedGroupType, selectedIndex}) {
        axios.get(theAPIUrl + 'existingGroup/' + selectedClass.idClass + '/' + selectedGroupType.idGroupType + '/' + selectedIndex + '/')
            .then(function (response) {
                context.commit('updateGeneratedGroups', response.data)
            })
    },
    saveUpdatedGroups(context, {groupOfGroups, idClass, idGroupType}) {
        axios({
            method: 'put',
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
            alert('Groupes mis à jour')
          })
    },
    getRequests(context) {
        axios.get(theAPIUrl + 'request/requested/')
            .then(function (response) {
                context.commit('updateYourRequests', response.data)
            })
    },
    getTeamMembers(context, { selectedActivity }) {
        Promise.all([
            axios.get(theAPIUrl + 'matchmaking/userteam/' + selectedActivity.idActivity + '/')
            .then(function (response) {
                context.commit('updateUsersTeamMembers', response.data)
            }),
            axios.get(theAPIUrl + 'matchmaking/userteamfull/' + selectedActivity.idActivity + '/')
            .then(function (response) {
                context.commit('updateUsersTeamFull', response.data)
            })
        ])
    },
    leaveTeam(context, { idActivity }){
        axios({
            method: 'delete',
            url: theAPIUrl + 'matchmaking/' + idActivity + '/',
            data: null,
            async: true,
            crossDomain: true,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        })
        .then(function (response) {
        })
        .catch(e => {
        })
    },
    acceptRequest(context,{cipRequested, idActivity}){
        axios({
            method: 'post',
            url: theAPIUrl + 'matchmaking/' + idActivity +'/',
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
    },
    addFriend(context, {newFriend, idActivity}){
        axios({
            method: 'post',
            url: theAPIUrl + 'friendRequest/request/',
            data: {
                cip: newFriend.cip,
                idActivity: idActivity
            },
            async: true,
            crossDomain: true,
            headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
        })
    },
    getRequested(context, {selectedActivity}){
        axios.get(theAPIUrl + 'request/seeking/' + selectedActivity.idActivity + '/')
            .then(function (response) {
                context.commit('updateMembersRequested', response.data)
            })
    }
}