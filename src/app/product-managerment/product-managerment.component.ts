import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-managerment',
  templateUrl: './product-managerment.component.html',
  styleUrls: ['./product-managerment.component.scss']
})
export class ProductManagermentComponent implements OnInit {
  public DSSP = [];
  sanpham = {};
  masp = "";
  tensp = "";
  giasp = "";
  content:any = "";
  mau = true;
  bgcolor = true;
  constructor() { }

  ngOnInit() {
    let check = JSON.parse(localStorage.getItem("DSSP"));
    if(check !==null){
      this.DSSP = check;
    }
  }

  addProduct(maSP, tenSP, giaSP){
    this.masp = maSP;
    this.tensp = tenSP;
    this.giasp = giaSP;
    this.sanpham = {maSP, tenSP, giaSP};
    this.DSSP.push(this.sanpham);
    localStorage.setItem("DSSP", JSON.stringify(this.DSSP));
  }
  // taobang(ds){
  //   this.DSSP
  // } 
}
