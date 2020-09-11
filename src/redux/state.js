let store = {
    _state: {
        navbarPage: {
            friends: [
                { id: 1, name: "Andrey" },
                { id: 2, name: "Zabit" },
                { id: 3, name: "Khabib" }
            ]
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hi!", likes: 5 },
                { id: 2, message: "Hey, i'm fine, how are you?", likes: 7 },
                { id: 3, message: "I'm fine too, nice to meet you", likes: 2 },
                { id: 4, message: ";)", likes: 500 },
                { id: 5, message: "React is so much interesting!", likes: 52 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Artem' },
                { id: 2, name: 'Zabit' },
                { id: 3, name: 'Messi' },
                { id: 4, name: 'Siera' },
                { id: 5, name: 'Zhois' },
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'Good architecture :)' },
                { id: 3, message: 'Have a good day)' },
                { id: 4, message: '#WhatMeansHashTag?' },
                { id: 5, message: 'New Website!!!' },
            ]
        }
    },
    get state() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let inputText = this._state.profilePage.newPostText;
            if (inputText) {
                let newPost = { id: this._state.profilePage.posts.push.length + 1, message: inputText, likes: 1000 };
                this._state.profilePage.posts.push(newPost);
                this.rerenderEntireTree(this._state);
            }
            this.updateNewPostText('');
        }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        }
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree: 0,
}
export default store;