import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Tool } from '../../../models/cv-data.model';

@Component({
  selector: 'app-tools',
  imports: [
    NgIcon,
  ],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsComponent {
  readonly toolList = input.required<Tool[]>();
}
