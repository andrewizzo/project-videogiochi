import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  public pagina : number = 1
  public utentiPerPagina: number = 10;
  public Math = Math;
  public totalePagine : number = 0
  public search : string = ''
  public utentiFiltrati : any[] = []
  
  ngOnInit(): void {
    this.utentiFiltrati = this.utenti;
    this.totalePagine = Math.ceil(this.utentiFiltrati.length / this.utentiPerPagina); // Calcola le pagine iniziali
  }  

  public utenti : any[] = [
    {
      nome:"Andrea",
      cognome:"Izzo",
      email:"prova123@gmail.com",
      dataDiIscrizione:"27/03/1999",
      ruolo:"membro"
    },
    {
      nome:"Valentino",
      cognome:"Izzo",
      email:"prova123@gmail.com",
      dataDiIscrizione:"27/03/1999",
      ruolo:"membro"
    },
    {
      nome:"Pasquale",
      cognome:"Ferrandino",
      email:"prova123@gmail.com",
      dataDiIscrizione:"27/03/1999",
      ruolo:"membro"
    },
    {
      nome:"Flaviana",
      cognome:"Forte",
      email:"prova123@gmail.com",
      dataDiIscrizione:"27/03/1999",
      ruolo:"membro"
    }
  ]


  get utentiPaginati() {
    const indiceInizio = (this.pagina - 1) * this.utentiPerPagina;
    const indiceFine = indiceInizio + this.utentiPerPagina;
    
    return this.utentiFiltrati.slice(indiceInizio, indiceFine); // Usa la lista filtrata
  }
  
  paginaSuccessiva() {
    if (this.pagina < Math.ceil(this.utenti.length / this.utentiPerPagina)) {
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
      this.utentiFiltrati = this.utenti; // Se il termine di ricerca è vuoto, mostra tutti gli utenti
    } else {
      // Dividi il termine di ricerca in parole
      const searchTerms = searchTerm.split(' ').filter(term => term.length > 0);

      // Filtra gli utenti in base a ciascuna parola nel termine di ricerca
      this.utentiFiltrati = this.utenti.filter(user => {
        return searchTerms.every(term => 
          user.nome.toLowerCase().includes(term) ||
          user.cognome.toLowerCase().includes(term)
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
}


