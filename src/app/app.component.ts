import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavService } from './shared/service/nav.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent, MatSidenavModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Analytics-Dashboard';
  navService = inject(NavService);

}
