import { Component, ChangeDetectionStrategy ,inject, computed} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContent } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import {MatListItem} from '@angular/material/list';
import { NavService } from '../../service/nav.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    imports: [MatListModule, RouterModule, MatListItem,
        MatSidenavModule, MatIconButton, MatIcon, MatSidenavContent, RouterLink],
    templateUrl: './sidebar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router) {  }
  navService = inject(NavService);

  sideNavWidth = computed(() => this.navService.isCollapsed() ? '60px' : '250px');
  showNavLabels = computed(() => !this.navService.isCollapsed());

  gotodashboard() {
    this.router.navigate(['/dashboard']);
  }
}



