import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  
   // Trailer from showing item
   private pushingTrailerToStore = new BehaviorSubject('' as string);
   sharingTrailerFromShowingItemComponent = this.pushingTrailerToStore.asObservable();

  constructor() { }

  sharingTrailerMethod(trailerFromShowingItemComponent: any) {
    this.pushingTrailerToStore.next(trailerFromShowingItemComponent);
  }
}
