import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'ngdash-four-column-layout',
  template: `
    <div>Four Columns</div>
    <ngdash-widget-container containerId="0" class="c4"></ngdash-widget-container>
    <ngdash-widget-container containerId="1" class="c1"></ngdash-widget-container>
    <ngdash-widget-container containerId="2" class="c2"></ngdash-widget-container>
    <ngdash-widget-container containerId="3" class="c3"></ngdash-widget-container>
  `
})
export class FourColumnLayoutComponent extends LayoutComponent {

}
