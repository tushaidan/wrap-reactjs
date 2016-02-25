import React from 'react'
import '../../../styles/css/center.css'

let LiveView = React.createClass({
	render:function(){
		return (
            <div className="row">
                <div className="col-xs-12 col-sm-2 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <div className="dashBorad-div">
                                <img className="dashboard-img" src="styles/img/Broada/B1.png" alt="me"/>
                            </div>
                            <div className="dashBorad-div-1">
                                <p className="dashBorad-p">今日活跃用户</p>
                                <div className="dashBorad-div-2">50</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <div className="dashBorad-div">
                                <img className="dashboard-img" src="styles/img/Broada/B2.png" alt="me"/>
                            </div>
                            <div className="dashBorad-div-1">
                                <p className="dashBorad-p">今日启动次数</p>
                                <div className="dashBorad-div-2">150</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <div className="dashBorad-div">
                                <img className="dashboard-img" src="styles/img/Broada/B3.png" alt="me"/>
                            </div>
                            <div className="dashBorad-div-1">
                                <p className="dashBorad-p">今日人均使用时长</p>
                                <div className="dashBorad-div-2">50.6s</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <div className="dashBorad-div">
                                <img className="dashboard-img" src="styles/img/Broada/B4.png" alt="me"/>
                            </div>
                            <div className="dashBorad-div-1">
                                <p className="dashBorad-p">今日新增用户</p>
                                <div className="dashBorad-div-2">999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
});

export default LiveView;