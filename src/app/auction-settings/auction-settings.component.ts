import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {DialogData, DialogEditBroker} from "../brokers/brokers.component";

@Component({
  selector: 'app-auction-settings',
  templateUrl: './auction-settings.component.html',
  styleUrls: ['./auction-settings.component.less'],
  providers: [DataService]
})
export class AuctionSettingsComponent implements OnInit {
  page = {
    title: 'Настройки аукциона',
    image: 'assets/bg02.jpg'
  };

  start = '';
  end = '';
  interval = '';

  constructor(private dataService: DataService,  public dialog: MatDialog) { }

  ngOnInit() : void {
    this.dataService.getAuctionSettings(x => {
      this.start = x.start;
      this.end = x.end;
      this.interval = x.interval;
    })
  }


  openEditAuctionSettings(): void {
    const dialogRef = this.dialog.open(DialogEditAuctionSettings, {
      width: 'auto',
      data: {start: this.start, end: this.end, interval: this.interval}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.start = result.start;
      this.end = result.end;
      this.interval = result.interval;
      this.dataService.setAuctionSettings({start: this.start, end: this.end, interval: this.interval})

    });
  }
}

@Component({
  selector: 'app-dialog-edit-auction-settings',
  templateUrl: './dialog-edit-auction-settings.html',
})
export class DialogEditAuctionSettings {

  constructor(
    public dialogRef: MatDialogRef<DialogEditAuctionSettings>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  start: string;
  interval: number;
  end: string;
}

