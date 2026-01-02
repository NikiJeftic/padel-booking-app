import { Routes } from '@angular/router';
import { BookingPageComponent } from './features/booking/pages/booking-page/booking-page.component';
import { CheckoutPageComponent } from './features/checkout/pages/checkout-page/checkout-page.component';

export const routes: Routes = [
    {
        path: 'booking',
        component: BookingPageComponent
    },
    {
        path: 'checkout',
        component: CheckoutPageComponent
    },
    {
        path: '**',
        redirectTo: 'booking'
    }
];
