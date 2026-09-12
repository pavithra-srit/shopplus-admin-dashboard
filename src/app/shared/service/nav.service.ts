import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavService {
  isCollapsed = signal<boolean>(false);

  toggleCollapse(): void {
    this.isCollapsed.update(value => !value);
  }
}
