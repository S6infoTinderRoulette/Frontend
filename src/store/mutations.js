export default {
    updateClasses (state, classes) {
        state.classes = classes || []
    },
    updateGroupTypes (state, groupTypes) {
        state.groupTypes = groupTypes || []
    },
    updateGeneratedGroups (state, group) {
        state.generatedGroups = group || []
    }
}