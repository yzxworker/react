var React=require('react');
module.exports=React.createClass({
	render:function(){
		return (
				<ul className="head_left clearfix">
					<li>
						<a href="javascript:;">小米网</a>
					</li>
					<li>
						<a href="javascript:;">MIUI</a>
					</li>
					<li>
						<a href="javascript:;">米聊</a>
					</li>
					<li>
						<a href="javascript:;">游戏</a>
					</li>
					<li>
						<a href="javascript:;">多看阅读</a>
					</li>
					<li>
						<a href="javascript:;">云服务</a>
					</li>
					<li>
						<a href="javascript:;">小米网移动版</a>
					</li>
					<li>
						<a href="javascript:;" className="headbordernone">Select Region</a>
					</li>
				</ul>
			)
	}
});