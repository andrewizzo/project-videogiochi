
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './services/users.service';



export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UsersService)
  const router = inject(Router)
  console.log('Token presente:', userService.isAuthenticated());

  if (!userService.isAuthenticated()) {
    router.navigate(['/login'])
    return false
  }

  const userRole = userService.getUserRole()

  const requiredRole = route.data?.['role']

  // Se la rotta non richiede un ruolo specifico, consentire l'accesso
  if (!requiredRole) {
    return true;
  }


  // Controlla se l'utente ha il ruolo richiesto
  if (userRole === requiredRole) {
    return true;  // L'utente ha accesso
  } else {
    router.navigate(['/access-denied']); // Reindirizza se il ruolo non è autorizzato
    return false;
  }

};
