var React=require('react');
module.exports=React.createClass({
	render:function(){
		return (
			<div className="searchbox">
				<p className="tips"><span></span>11月18日预约开放购买</p>
				<div className="sersoon clreafix">
					<div  className="inputbtn clearfix">
						<div className="serkuang">
							<input type="text" placeholder="搜索您想要的商品" />
							<ul className="clearfix">
								<li><a href="javascript:;">小米手机4</a></li>
								<li><a href="javascript:;">小米手机4</a></li>
							</ul>
						</div>
						<a href="javascript:;" className="searbtn">搜索</a>
					</div>
					<div className="shopcar">
						<a href="javascript:;" className='carbtn'>购物车</a>
					</div>
				</div>
			</div>
			)
	}
});