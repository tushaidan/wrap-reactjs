import React from 'react'


let LiveView = React.createClass({
	render:function(){
		return (
            <div className="row">
                <div className="col-xs-12 col-sm-2 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <img src="styles/img/Broada/B1.png" alt="me" width="30px"/>
                            <h3 className="panel-title">
                                Light version</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <li><img src="styles/img/Broada/B2.png" alt="me" width="30px"/></li>
                            <h3 className="panel-title">
                                Personal Project</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <li><img src="styles/img/Broada/B3.png" alt="me" width="30px"/></li>
                            <h3 className="panel-title">
                                Developer Bundle</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="panel panel-primary pricing-big">
                        <div className="panel-heading">
                            <li><img src="styles/img/Broada/B4.png" alt="me" width="30px"/></li>
                            <h3 className="panel-title">
                                Premium Package</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
});

export default LiveView;