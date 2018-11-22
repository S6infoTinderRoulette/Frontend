export default {
    updateSelfStatus(state, status) {
        state.selfStatus = status || 1
    },
    updateClasses (state, classes) {
        state.classes = classes || []
    },
    updateNumberOfStudentInClass (state, numberOfStudentInClass) {
        state.numberOfStudentInClass = numberOfStudentInClass || 0;
    },
    updateGroupTypes (state, groupTypes) {
        state.groupTypes = groupTypes || []
    },
    updateDefaultNumberOfGroupSize (state, defaultNumberOfGroupSize) {
        state.defaultNumberOfGroupSize = defaultNumberOfGroupSize || 0;
    },
    updateGeneratedGroups (state, group) {
        state.generatedGroups = group || []
    },
    updateClassesOfStudent (state, classesOfStudent) {
        state.classesOfStudent = classesOfStudent || []
    },
    updateActivities(state, activities) {
        state.activities = activities || []
    },
    updateNumberOfStudentsForActivity (state, numberOfStudentsForActivity) {
        state.numberOfStudentsForActivity = numberOfStudentsForActivity || []
    },
    updateFreeGroups(state, freeGroups) {
        state.freeGroups = freeGroups || []
        let freeGroupsEdited = []
        freeGroups.forEach(elem => {
            let arrElem = freeGroupsEdited.find(noob => noob.idGroup === elem.idGroup)
            if (arrElem == null) {freeGroupsEdited.push({idGroup:elem.idGroup, cips: [elem.cip]})}
            else {arrElem.cips.push(elem.cip)}
        })
        state.freeGroupsEdited = freeGroupsEdited || []
    },
    updateFreeMembers(state, freeMembers) {
        state.freeMembers = freeMembers || []
    },
    updateYourRequests(state, yourRequests) {
        state.yourRequests = yourRequests || []
    },
    updateUsersTeamMembers(state, teamMembers) {
        state.usersTeamMembers = teamMembers || []
    },
    updateUsersTeamFull(state, isTeamFull) {
        state.isUsersTeamFull = isTeamFull
    },
    updateIndexes (state, indexes) {
        state.numActivityList = indexes || []
    },
    updateMembersRequested(state, yourRequests) {
        let membersRequested = []
        yourRequests.forEach(elem => {
            membersRequested.push(elem.cipRequested)
        })
        state.membersRequested = membersRequested || []
    },
}