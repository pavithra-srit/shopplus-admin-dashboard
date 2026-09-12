import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { NavService } from '../../shared/service/nav.service';

@Component({
    selector: 'app-dashboard',
    imports: [],
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
//   navService = inject(NavService);

//   dashBoardWidth = computed(() =>
//     this.navService.isCollapsed() ?  'calc(100vw - 310px)' :'calc(100vw - 120px)'
//   );
}
