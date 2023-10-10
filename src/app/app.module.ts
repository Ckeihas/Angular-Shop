import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from "@angular/material/sidenav"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatMenuModule } from "@angular/material/menu"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatIconModule } from "@angular/material/icon"
import { MatExpansionModule } from "@angular/material/expansion"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatTableModule } from "@angular/material/table"
import { MatBadgeModule } from "@angular/material/badge"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { MatListModule } from "@angular/material/list"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './layouts/header/header.component';
import { StoreComponent } from './pages/store/store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './pages/store/components/filter/filter.component';
import { ProductHeaderComponent } from './pages/store/components/product-header/product-header.component';
import { ProductBoxComponent } from './pages/store/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    StoreComponent,
    FilterComponent,
    ProductHeaderComponent,
    ProductBoxComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
