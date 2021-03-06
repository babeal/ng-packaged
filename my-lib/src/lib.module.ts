import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { BarService } from './bar/bar.service';
import { SharedModule } from './shared/index';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FooComponent
  ],
  exports: [
    FooComponent
  ]
})
export class MyLibModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: MyLibModule,
      providers: [
        BarService
      ]
    };
  }
}
