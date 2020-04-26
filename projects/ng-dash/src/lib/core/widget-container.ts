import { Widget } from './widget';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export class WidgetContainer {
	constructor(
		public readonly id: number,
		public widgets: Widget[]
	) {
		this.widgets.sort((w1, w2) => w1.state.index - w2.state.index);
		this.resetIndex();
	}

	public moveWidget(widget: Widget, newIndex: number): void {
		moveItemInArray(this.widgets, widget.state.index, newIndex);
		this.resetIndex();
	}

	public acquireWidget(widget: Widget, targetIndex: number, source: WidgetContainer) {
		transferArrayItem(source.widgets, this.widgets, widget.state.index, targetIndex);
		widget.state.containerId = source.id;
		this.resetIndex();
		source.resetIndex();
	}

	public removeWidget(index: number) {
		this.widgets.splice(index, 1);
		this.resetIndex();
	}

	public insertWidget(widget: Widget){
		this.widgets.splice(widget.state.index, 0, widget);
		this.resetIndex();
	}

	private resetIndex() {
		this.widgets.forEach((w, i) => w.state.index = i);
	}
}