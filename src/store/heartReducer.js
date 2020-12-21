const initalState = {
    rootCounter: 0,
    sacralCounter: 0,
    solarPlexusCounter: 0,
    heartCounter: 0,
    throatCounter: 0,
    thirdEyeCounter: 0,
    crownCounter: 0


}

function heartReducer(state = initalState, action) {

    if (action.type === "HEART_COUNTER") {
        return {
            ...state,
            heartCounter: state.heartCounter + 1
        }
    }
    console.log(state);
    return state
   
}
export default heartReducer;