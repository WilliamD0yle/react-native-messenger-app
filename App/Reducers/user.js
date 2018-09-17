export default (state = {
  name: null,
  avatar: null,
  uid: null
}, action) => {
	switch (action.type) {
    case 'APP_INNIT':
      return action.payload;
		case 'LOGIN_USER':
			return { name: action.payload.name , avatar: action.payload.avatar, uid: action.payload.avatar };
		default:
			return state;
	}
};
