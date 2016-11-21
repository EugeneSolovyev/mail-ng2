import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

/* === Init components === */
import {AppComponent} from './app.component';
import {MailHeaderComponent} from './mail-header.component';
import {MailBodyComponent} from './mail-body.component';
import {MailFooterComponent} from './mail-footer.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        MailHeaderComponent,
        MailBodyComponent,
        MailFooterComponent
    ],
    bootstrap: [
        AppComponent,
        MailHeaderComponent,
        MailBodyComponent,
        MailFooterComponent
    ]
})

export class AppModule {}