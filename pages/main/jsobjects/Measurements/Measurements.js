export default {
	storeElectricity: () => {

		//const time = = appsmith.store.
		const time = moment(appsmith.store.dayGraphTime).format("YYYY.MM.DD");
		EnergyMeasurementQuery.run({userId: appsmith.store.selectedUser.user_id,time: time})
			.then(r=>{
			storeValue("electricityMeasurements", r)
		})
			.catch(e => showAlert(`HÄH ${e}`))
	},
	storeUsageSum: () => {
		function sumUsage(gesamt){
			let sum = 0;

			return gesamt.map((v) => {
				sum = sum + v.y;
				return {x: new Date(v.x).toLocaleTimeString(), y: sum}});
		}
		gesamtquery.run({userId: appsmith.store.selectedUser.user_id, time: moment(appsmith.store.daySumDate).format("YYYY.MM.DD")})
			.then(r=>storeValue("usageSum",sumUsage(r)))
			.catch(e => showAlert("UFKC "))
	}
}