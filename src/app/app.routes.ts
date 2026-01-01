import { Routes } from '@angular/router';
import { BookingPageComponent } from './features/booking/pages/booking-page/booking-page.component';

export const routes: Routes = [
    {
        path: 'booking',
        component: BookingPageComponent
    },
    {
        path: '**',
        redirectTo: 'booking'
    }
];
