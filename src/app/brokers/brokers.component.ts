import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Broker} from "../Broker";
import { v4 as uuid } from 'uuid';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

var isDeleted = 0;
@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.less'],
  providers: [DataService]
})
export class BrokersComponent implements OnInit {
  page = {
    title: 'Список брокеров',
    image: 'assets/bg03.jpg'
  };

  brokers: Broker[];
  name: string;
  money: number;
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void{
    this.dataService.getBrokers(x => this.brokers = x);
  }
  addNewBroker(): void {
    let uid = uuid();
    let bid = "bid_"+uid;
    this.brokers.push(new Broker(bid, this.name, this.money));
    this.dataService.setBrokers(this.brokers);
  }

  editBroker(id: string): void {
    this.brokers.find(x => x.id === id).name = this.name;
    this.brokers.find(x => x.id === id).money = this.money;
    this.dataService.setBrokers(this.brokers);
  }


  openAddBroker(): void {
    const dialogRef = this.dialog.open(DialogAddBroker, {
      width: 'auto',
      data: {name: "", money: 0}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result.name;
      this.money = result.money;
      this.addNewBroker();
    });
  }

  openEditBroker(id: string): void {
    const dialogRef = this.dialog.open(DialogEditBroker, {
      width: 'auto',
      data: {name: this.brokers.find(x => x.id === id).name,
        money: this.brokers.find(x => x.id === id).money}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result.name;
      this.money = result.money;
      this.editBroker(id);
    });
  }

  openDeleteBroker(id: string): void {
    const dialogRef = this.dialog.open(DialogDeleteBroker, {
      width: 'auto',
      data: {name: this.brokers.find(x => x.id === id).name, money: 0}
    });
    dialogRef.afterClosed().subscribe(() => {
      if (isDeleted == 1) {
        this.brokers = this.brokers.filter(x => id != x.id);
        this.dataService.setBrokers(this.brokers);
      }
    });
  }

}

@Component({
  selector: 'app-dialog-add-broker',
  templateUrl: './dialog-add-broker.html',
})
export class DialogAddBroker {

  constructor(
    public dialogRef: MatDialogRef<DialogAddBroker>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog-edit-broker',
  templateUrl: './dialog-edit-broker.html',
})
export class DialogEditBroker {

  constructor(
    public dialogRef: MatDialogRef<DialogEditBroker>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    isDeleted = 0;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog-delete-broker',
  templateUrl: './dialog-delete-broker.html',
})
export class DialogDeleteBroker {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteBroker>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    isDeleted = 0;
    this.dialogRef.close();
  }
  onSureClick(): void {
    isDeleted = 1;
    this.dialogRef.close();
  }
}
export interface DialogData {
  name: string;
  money: number;
}
