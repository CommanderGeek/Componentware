export default {
	setSelectedUserStore: (user_id) => {
		storeValue("selectedUser", all_users.data.filter(u=>u.user_id == user_id)[0])
	}
}