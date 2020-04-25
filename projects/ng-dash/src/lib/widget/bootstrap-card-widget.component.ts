import { Component, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';
import { NgDashComponent } from '../core/ng-dash-component.decorator';

@Component({
	selector: 'ngdash-bootstrap-card-widget',
	template: `
		<div class="card">
			<ngdash-bootstrap-card-widget-header 
				[widget]="widget"
				[container]="container" 
				[dashboard]="dashboard">
			</ngdash-bootstrap-card-widget-header>
			<ngdash-bootstrap-card-widget-body
				[hidden]="widget.state['isCollapsed']"
				[widget]="widget"
				[container]="container" 
				[dashboard]="dashboard">
			</ngdash-bootstrap-card-widget-body>
		</div>
  	`,
	styles: [
	]
})
@NgDashComponent('widget', 'default')
@NgDashComponent('widget', 'ngdash-bootstrap-card-widget')
export class BootstrapCardWidgetComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;
}
