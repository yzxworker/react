var React=require('react');
var ReactDOM=require('react-dom');
require('../css/index.css');
require('../css/base.css');
var Header=require('./component/header.jsx');
var Contenthead=require('./component/content_header.jsx');
var App=React.createClass({
	render:function(){
		return (
			<div>
				<Header/>
				<div className="content">
					<Contenthead/>
				</div>
			</div>
			)
	}
});

ReactDOM.render(<App/>,document.getElementById('app'))