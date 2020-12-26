export const arrayMaker = (users, objId, value) => {
    users.map(a => {
        if (a['id'] === objId) {
            return { ...a, followed: value };
        }
        return a;
    })
}