import{ Routes, RouterModule} from '@angular/router';
import{ RegisterComponent} from './register/register.component';
import{ LoginComponent} from './login/login.component';
import{ HomeComponent} from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';



const routes:Routes = [
  
  
    {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'contactlist',
        component: ContactlistComponent
      }
      
    
]
export const MyRouteModule = RouterModule.forRoot(routes);