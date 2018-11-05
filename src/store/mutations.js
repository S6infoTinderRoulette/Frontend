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
    updateDefaultNumberOfGroupSize (state, defaultNumberOfGroupSize) {
        state.defaultNumberOfGroupSize = defaultNumberOfGroupSize || 0;
    },
    updateGeneratedGroups (state, group) {
        state.generatedGroups = group || []
    },
    updateClassesOfStudent (state, classesOfStudent){
        state.classesOfStudent = classesOfStudent || []
    },
    updateActivities(state, activities){
        state.activities = activities || []
    },
    updateNumberOfStudentsForActivity (state, numberOfStudentsForActivity){
        state.numberOfStudentsForActivity = numberOfStudentsForActivity || []
    }
}