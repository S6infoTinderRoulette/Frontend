export default {
    updateClasses (state, classes) {
        state.classes = classes || []
    },
    updateNumberOfStudentInClass (state, numberOfStudentInClass) {
        state.numberOfStudentInClass = numberOfStudentInClass || 0;
    },
    updateGroupTypes (state, groupTypes) {
        state.groupTypes = groupTypes || []
    },
    updateGeneratedGroups (state, group) {
        state.generatedGroups = group || []
    }
}