import { Component } from '@angular/core';
import { faShrimp, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class Footer {
  faShrimp = faShrimp;
  faGithub = faGithub;
  faCode = faCode;
}
