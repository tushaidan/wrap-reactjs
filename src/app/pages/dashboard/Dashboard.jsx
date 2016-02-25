/**
 * Created by griga on 11/30/15.
 */

import React from 'react'

import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'

import LiveView from '../../../components/chat/components/dashBoardView.jsx'
import LiveChartView from '../../../components/chat/components/dashBoardChartView.jsx'

{/*import BirdEyeWidget from './BirdEyeWidget.jsx'
import LiveFeeds from './LiveFeeds.jsx'
import ChatWidget from '../../../components/chat/components/ChatWidget.jsx'
import FullCalendarWidget from '../../../components/calendar/components/FullCalendarWidget.jsx'
import TodoWidget from '../../../components/todo/components/TodoWidget.jsx'*/}


let Dashboard = React.createClass({
    render: function () {
        return (
            <div id="content">

                <div className="row">
                    <BigBreadcrumbs items={['Dashboard', 'My Dashboard']}
                                     className="col-xs-12 col-sm-7 col-md-7 col-lg-4" />
                    {/*<SubHeader />*/}
                </div>

                <WidgetGrid>

                    <LiveView />

                    <LiveChartView />

                    <div className="row">

                        <article className="col-sm-12 col-md-12 col-lg-6">

                        </article>

                        <article className="col-sm-12 col-md-12 col-lg-6">

                        </article>
                    </div>
                </WidgetGrid>
            </div>
        )
    }
});

export default Dashboard