// * Angular Imports
import { APP_INITIALIZER, NgModule } from '@angular/core';

// * Service Imports
import { ConfigService } from 'src/app/services/config/config.service';
const loadConfig = (configService: ConfigService) => {
  return () => configService.load().toPromise();
};

@NgModule({
  imports: [],
  exports: [],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ConfigService],
      multi: true,
    },
  ],
})
export class ConfigModule {}
