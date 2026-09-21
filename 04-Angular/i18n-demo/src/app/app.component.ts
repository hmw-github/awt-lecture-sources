import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TranslateModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.css'
})
export class AppComponent {
  correctNumber: number = 42;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en', 'hi-IN']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang() || "en");
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
}
