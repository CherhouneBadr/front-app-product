import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PanelMenuComponent } from 'app/shared/ui/panel-menu/panel-menu.component';
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  title = "ALTEN SHOP";

}
