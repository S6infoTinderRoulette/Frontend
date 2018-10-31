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
        // axios.post(theAPIUrl + 'createGroup/', noob)
          .then(function (response) {
            context.commit('updateGeneratedGroups', response.data)
          })
          .catch(e => {
              console.log(e)
          })
    }
}