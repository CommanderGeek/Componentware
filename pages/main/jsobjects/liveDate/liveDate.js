export default {
	runInterval: () => {
		//this function is set to run on page load and it refreshes every 1 second
		setInterval(() => { storeValue("nowStore", Date.now()); }, 1000, "myTimer");
	}
}