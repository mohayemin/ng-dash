import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { WidgetBodyComponent } from '../../widget/widget-body.component';

@Component({
  selector: 'ngdash-text-widget',
  template: `
    {{widget.config.text}}
  `,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextWidgetComponent extends WidgetBodyComponent {

}
