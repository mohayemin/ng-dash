import {
	Component,
	Input, 
	AfterViewInit, 
	ViewContainerRef, 
	ViewChild, 
	ComponentFactoryResolver, 
	ChangeDetectionStrategy
} from '@angular/core';
import { Widget } from '../../core/widget';
import { Dashboard } from '../../core/dashboard';
import { WidgetContainer } from '../../core/widget-container';
import { Id } from '../../utils/types';
import { NgdashResolver, BindingCategory } from '../../core/ngdash-resolver';

@Component({
	selector: 'ngdash-simple-widget',
	templateUrl: './simple-widget.component.html',
	styles: [
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleWidgetComponent implements AfterViewInit {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;

	@ViewChild('header', { read: ViewContainerRef })
	headerContainerRef: ViewContainerRef;

	@ViewChild('body', { read: ViewContainerRef })
	bodyContainerRef: ViewContainerRef

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private resolver: NgdashResolver
	) {
	}

	ngAfterViewInit() {
		this.createComponent(this.headerContainerRef, 'widget-header', this.widget.ui.headerComponentId);
		this.createComponent(this.bodyContainerRef, 'widget-body', this.widget.ui.bodyComponentId);
	}

	private createComponent(vcr: ViewContainerRef, bindingcategory: BindingCategory, componentId: Id) {
		const componentType = this.resolver.resolve(bindingcategory, componentId);
		const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
		const compRef = vcr.createComponent(factory);
		const comp = compRef.instance;
		comp.widget = this.widget;
		comp.container = this.container;
		comp.dashboard = this.dashboard;

		compRef.changeDetectorRef.detectChanges();
	}
}
