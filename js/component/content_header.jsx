var React=require('react');
var Connar=require('./connar.jsx');
var Homeconleft=require('./homeconleft.jsx');
module.exports=React.createClass({
	render:function(){
		return (
				<div>
					<Connar/>
					<div className="homecon clearfix">
						<Homeconleft/>
					</div>
				</div>
			)
	}
});