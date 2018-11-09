import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Share} from "../Share";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {v4 as uuid} from "uuid";

var isDeleted = 0;


@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.less'],
  providers: [DataService]
})
export class SharesComponent implements OnInit {
  page = {
    title: 'Список акций',
    image: 'assets/bg04.jpg'
  };
  shares: Share[];
  name: string;
  count: number;
  start: number;
  max: number;
  law: number;

  laws = [
    {
      num: 1,
      name:"равномерный"
    },
    {
      num: 2,
      name: "биномиальный"
    },
    {
      num: 3,
      name: "нормальный"
    },
  ];

  tolow(num: number): string { return this.laws.find(x => x.num === num).name}
  constructor(private dataService: DataService, public dialog: MatDialog) {}
  ngOnInit(): void{
    this.dataService.getShares(x => this.shares = x);
  }
  addNewShare(): void {
    let uid = uuid();
    let bid = "sid_"+uid;
    this.shares.push(new Share(bid, this.name, this.count, this.start, this.max, this.law));
    this.dataService.setShares(this.shares);
  }

  editShare(id: string): void {
    this.shares.find(x => x.id === id).name = this.name;
    this.shares.find(x => x.id === id).count = this.count;
    this.shares.find(x => x.id === id).start = this.count;
    this.shares.find(x => x.id === id).max = this.max;
    this.shares.find(x => x.id === id).law = this.law;
    this.dataService.setShares(this.shares);
  }


  openAddShare(): void {
    const dialogRef = this.dialog.open(DialogAddShare, {
      width: 'auto',
      data: {name: "", money: 0, count: 0, start: 0, max: 0, law: 0, laws: this.laws}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result.name;
      this.count = result.count;
      this.start = result.start;
      this.max = result.max;
      this.law = result.law;
      this.addNewShare();
    });
  }

  openEditShare(id: string): void {
    const dialogRef = this.dialog.open(DialogEditShare, {
      width: 'auto',
      data: {
        name: this.shares.find(x => x.id === id).name,
        count: this.shares.find(x => x.id === id).count,
        start: this.shares.find(x => x.id === id).start,
        max: this.shares.find(x => x.id === id).max,
        law: this.shares.find(x => x.id === id).law,
        laws: this.laws
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result.name;
      this.count = result.count;
      this.start = result.start;
      this.max = result.max;
      this.law = result.law;
      this.editShare(id);
    });
  }

  openDeleteShare(id: string): void {
    const dialogRef = this.dialog.open(DialogDeleteShare, {
      width: 'auto',
      data: {name: this.shares.find(x => x.id === id).name}
    });
    dialogRef.afterClosed().subscribe(() => {
      if (isDeleted == 1) {
        this.shares = this.shares.filter(x => id != x.id);
        this.dataService.setShares(this.shares);
      }
    });
  }
}

@Component({
  selector: 'app-dialog-add-share',
  templateUrl: './dialog-add-share.html',
})
export class DialogAddShare {

  constructor(
    public dialogRef: MatDialogRef<DialogAddShare>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog-edit-share',
  templateUrl: './dialog-edit-share.html',
})
export class DialogEditShare {

  constructor(
    public dialogRef: MatDialogRef<DialogEditShare>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    isDeleted = 0;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog-delete-share',
  templateUrl: './dialog-delete-share.html',
})
export class DialogDeleteShare {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteShare>,
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
  count: number;
  start: number;
  max: number;
  law: number;
  laws: Law[]
}

class Law {
  num: number;
  name: string;
}
