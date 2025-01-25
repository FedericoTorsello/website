import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MockupCodeComponent } from './shared/components/mockup-code/mockup-code.component';

@Component({
    selector: 'app-root',
    imports: [
        HeaderComponent,
        RouterOutlet,
        // MockupCodeComponent,
        // FooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    sticky = signal(true);

    // @HostListener("window:scroll")
    // onScroll() {
    //     this.sticky.set(true);
    // }

    // @HostListener("window:scrollend")
    // onScrollend() {
    //     this.sticky.set(false);
    // }
}

