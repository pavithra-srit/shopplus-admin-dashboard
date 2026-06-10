import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavContent } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import {MatListItem} from '@angular/material/list';
@Component({
    selector: 'app-sidebar',
    imports: [MatListModule, RouterModule, MatListItem,
        MatSidenavModule, MatIconButton, MatIcon, MatSidenavContent, RouterLink],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}
