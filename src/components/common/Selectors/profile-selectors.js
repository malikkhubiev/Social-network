export const getProfile = (state) => {
    return state.profilePage.profile;
}

export const getStatus = (state) => {
    return state.profilePage.profile.status;
}

export const getUserId = (state) => {
    return state.profilePage.profile.id;
}

export const getShouldBe = (state) => {
    return state.profilePage.profile.shouldDialogBoxBeOpened;
}

export const getMessages = (state) => {
    return state.profilePage.profile.messages;
}


