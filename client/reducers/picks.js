export default reducer = (picks = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return picks;
        default:
            return picks;
    }
}