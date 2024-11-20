import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import { UsersService } from '../services/users.service';
import { SharedModule } from '../shared/shared.module';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { MatDialog } from '@angular/material/dialog'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private usersService : UsersService,private dialog : MatDialog,private router : Router){}

  public pagina : number = 1
  public utentiPerPagina: number = 10;
  public Math = Math;
  public totalePagine : number = 0
  public search : string = ''
  public utentiFiltrati : any[] = []
  

  //  this.utentiFiltrati = this.users;
  //this.totalePagine = Math.ceil(this.utentiFiltrati.length / this.utentiPerPagina); // Calcola le pagine iniziali
  ngOnInit(): void {
    this.getUsers()
  }  

  users : Users[] = []

  getUsers(){
  
    this.usersService.getUsers().subscribe(
      (data:Users[]) => {
        this.users = data
        this.utentiFiltrati = data
        this.totalePagine = Math.ceil(this.utentiFiltrati.length / this.utentiPerPagina)
      },
      (error) => {
        console.error('errore nel caricamento degli utenti:',error);
        
      }
    )
    console.log(this.users.length)
  }

  deleteUser(userId:number):void{
    this.usersService.deleteUser(userId).subscribe({
      next:(response) => {
        console.log('Utente eliminato con successo:', response);
        // Aggiorna la lista degli utenti o rimuovi l'utente localmente
        // this.users = this.users.filter(user => user.id !== userId);
        this.getUsers()
      },
      error: (error) => {
        console.error('Errore durante l\'eliminazione dell\'utente:', error);
      }
    })
  }

  openDialog(userId: number):void{
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '400px', // Larghezza del dialog
      data: { id: userId } // Passa l'id dell'utente come dato al dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // Esegui l'eliminazione se l'utente conferma
        this.deleteUser(userId);
      }
    });
  }


  get utentiPaginati() {
    const indiceInizio = (this.pagina - 1) * this.utentiPerPagina;
    const indiceFine = indiceInizio + this.utentiPerPagina;
    
    return this.utentiFiltrati.slice(indiceInizio, indiceFine); // Usa la lista filtrata
  }
  
  paginaSuccessiva() {
    if (this.pagina < Math.ceil(this.users.length / this.utentiPerPagina)) {
      this.pagina++;
    }
  }

  paginaPrecedente() {
    if (this.pagina > 1) {
      this.pagina--;
    }
  }

  applyFilter() {
    const searchTerm = this.search.trim().toLowerCase(); // Rimuovi spazi all'inizio e alla fine
  
    if (searchTerm === '') {
      this.utentiFiltrati = this.users; // Se il termine di ricerca è vuoto, mostra tutti gli utenti
    } else {
      // Dividi il termine di ricerca in parole
      const searchTerms = searchTerm.split(' ').filter(term => term.length > 0);

      // Filtra gli utenti in base a ciascuna parola nel termine di ricerca
      this.utentiFiltrati = this.users.filter(user => {
        return searchTerms.every(term => 
          user.name.toLowerCase().includes(term) ||
          user.surname.toLowerCase().includes(term)
        );
      });
    }

    // Resetta la pagina corrente se il numero di utenti filtrati è cambiato
    this.pagina = 1; // Torna alla prima pagina dopo un filtraggio
    this.totalePagine = Math.ceil(this.utentiFiltrati.length / this.utentiPerPagina); // Ricalcola le pagine
  }

  // print(){
  //   console.log(this.utenti[0].nome);
    
  // }

  goToSingleUser(){
    this.router.navigate(['single-user'])
  }
}


