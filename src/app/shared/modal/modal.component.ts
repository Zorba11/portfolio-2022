import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = ''

  constructor(public modal: ModalService, public el: ElementRef) {

   }

  ngOnInit(): void {
    // moving the modal to the document root after loading to avoid absorbing
    // parent's css
    document.body.appendChild(this.el.nativeElement)
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement);
  }

}
