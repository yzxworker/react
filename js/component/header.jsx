var React=require('react');
var Headerleft=require('./header_left.jsx');
var Headerright=require('./header_right.jsx');
var Headermore=require('./headermore.jsx');
var Headsearch=require('./headsearch.jsx')
module.exports=React.createClass({
	render:function(){
		return (
			<div>
				<div className="headbox clearfix">
					<div className="headercon">
						<Headerleft/>
						<Headerright/>
					</div>
				</div>
				<div className="heademorebox clearfix">
					<Headermore/>
					<Headsearch/>
				</div>
			</div>
				
			)
	}
})