export default (state = {
  chats: null,
  selectedChat: null,
  selectedUser: null
    /*
      chatID: [{
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },{
        text: 'Hi',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        }
      }]
    */
}, action) => {
	switch (action.type) {
		case 'LOAD_CONVERSATION':
			return { ...state, chats: { ...state.chats, [action.payload.id]: action.payload.messages }, selectedChat: action.payload.id, selectedUser: action.payload.selectedUser};
		default:
			return state;
	}
};
