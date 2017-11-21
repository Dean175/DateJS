document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		// document is ready
		//console.log('The page is fully loaded');
		var year = document.getElementById('year'),
		month = document.getElementById('month'),
		day = document.getElementById('day');

		var date = new Date();

		year.innerHTML = '<p>' + date.getFullYear() + '</p>';
		month.innerHTML = '<p>' + months().toUpperCase() + '</p>';
		day.innerHTML = '<p>' + date.getDate() + '</p>';


		
	}


	function months() {
		var arrMonth = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
		var month = date.getMonth();

		return arrMonth[month];
	}
};
