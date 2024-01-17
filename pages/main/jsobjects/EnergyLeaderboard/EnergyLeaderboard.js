export default {
	EnergyPerUser: () => {
		EnergyPerUser.run().then(r=>storeValue("EnergyBoard", r))
	},

	runSelfScore: () => {
		self_score.run({userId: appsmith.store.selectedUser.user_id});
	}
}
