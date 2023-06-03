import React from "react";

//include images into your bundle

//create your first component
const Home = (value) => {
	return (
<div className="row text-danger d-flex justify-content-center mt-5 ">
<div className="col-1 p-0">
<h1><span class="badge bg-secondary">{value.digitSix % 10}</span></h1>
</div>
<div className="col-1 p-0 ">
<h1><span class="badge bg-secondary">{value.digitFive % 10}</span></h1>
</div>
<div className="col-1 p-0">
<h1><span class="badge bg-secondary">{value.digitFour % 10}</span></h1>
</div>
<div className="col-1 p-0">
<h1><span class="badge bg-secondary">{value.digitThree % 10}</span></h1>
</div>
<div className="col-1 p-0">
<h1><span class="badge bg-secondary">{value.digitTwo % 10}</span></h1>
</div>
<div className="col-1 p-0">
<h1><span class="badge bg-secondary">{value.digitOne % 10}</span></h1>
</div>
</div>
	);
};

export default Home;

