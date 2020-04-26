import {
	Component,
	AfterViewInit,
	Input,
	ViewChild,
	ComponentFactoryResolver,
	ViewContainerRef,
	ChangeDetectionStrategy,
	ViewEncapsulation,
} from '@angular/core';
import { Dashboard } from '../dashboard';
import { NgDashComponent } from '../ng-dash-component.decorator';

@Component({
	selector: 'ngdash',
	template: `
    <div class="ngdash"
      	[class.dragdrop-enabled]="enableDragDrop"
      	cdkDropListGroup
      	[cdkDropListGroupDisabled]="!enableDragDrop">
      <ng-template #layout></ng-template>
    </div>
  `,
	styleUrls: [
		'./ng-dash.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class NgDash implements AfterViewInit {
	@Input() dashboard: Dashboard;
	@Input() enableDragDrop: boolean;

	@ViewChild("layout", { read: ViewContainerRef })
	layoutContainerRef: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngAfterViewInit(): void {
		this.renderLayout();
	}

	renderLayout() {
		const layoutType = NgDashComponent.resolve('layout', this.dashboard.layoutId);
		const layoutFactory = this.componentFactoryResolver.resolveComponentFactory(layoutType);
		const layoutRef = this.layoutContainerRef.createComponent(layoutFactory);
		layoutRef.instance['dashboard'] = this.dashboard;
		layoutRef.changeDetectorRef.detectChanges();
	}
}