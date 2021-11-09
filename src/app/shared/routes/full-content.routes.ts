import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_Content_Routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    // {
    //     path: 'advanced-ui',
    //     loadChildren: () => import('../../components/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
    // },
    // {
    //     path: 'apps',
    //     loadChildren: () => import('../../components/apps/apps.module').then(m => m.AppsModule)
    // },
    {
        path: 'charts',
        loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
    },
    {
        path: 'wallet',
        loadChildren: () => import('../../components/mainwallet/mainwallet.module').then(m => m.MainWalletModule)
    },  
    {
            path: 'drawwallet',
            loadChildren: () => import('../../components/drawwallet/drawwallet.module').then(m => m.DrawWalletModule)
        },
        {
                path: 'user',
                loadChildren: () => import('../../components/user/userlist.module').then(m => m.UserListModule)
            },
            {
                path: 'payment',
                loadChildren: () => import('../../components/userpayment/userpayment.module').then(m => m.UserpaymentModule)
            },
            {
                path: 'draworder',
                loadChildren: () => import('../../components/draworder/draworder.module').then(m => m.DraworderModule)
            },
            // {
            //     path: 'paymenttran',
            //     loadChildren: () => import('../../components/paytranscation/payment-transcation.module').then(m => m.PaymentTranscationModule)
            // },
    // {
    //     path: 'ecommerce',
    //     loadChildren: () => import('../../components/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
    // },
    // {
    //     path: 'elements',
    //     loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
    // },
    // {
    //     path: 'forms',
    //     loadChildren: () => import('../../components/forms/form.module').then(m => m.FormModule)
    // },
    // {
    //     path: 'icons',
    //     loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule)
    // },
    // {
    //     path: 'mail',
    //     loadChildren: () => import('../../components/mail/mail.module').then(m => m.MailModule)
    // },
    // {
    //     path: 'maps',
    //     loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
    // },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    // {
    //     path: 'tables',
    //     loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule)
    // },
    // {
    //     path: 'utilities',
    //     loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
    // },
    // {
    //     path: 'widgets',
    //     loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule)
    // },
    // {
    //     path: 'custom-error',
    //     loadChildren: () => import('../../components/custom/custom.module').then(m => m.CustomModule)
    // },
   
    
]


