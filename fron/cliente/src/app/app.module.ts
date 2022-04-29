import { CrearCabeceraDosComponent } from './components/cabecera-dos/cabecera-dos.component';
import { Edm01casillas } from './models/Edm01';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/edm/home/home.component';
//EDM
import { Edm01tabla1Component } from './components/edm/edm01tabla1/edm01tabla1.component';
import { Edm01tabla2Component } from './components/edm/edm01tabla2/edm01tabla2.component';
import { Edm01tabla3Component } from './components/edm/edm01tabla3/edm01tabla3.component';
import { Edm01tabla4Component } from './components/edm/edm01tabla4/edm01tabla4.component';
import { Edm01tabla5Component } from './components/edm/edm01tabla5/edm01tabla5.component';
import { Edm02tabla1Component } from './components/edm/edm02tabla1/edm02tabla1.component';
import { Edm02tabla2Component } from './components/edm/edm02tabla2/edm02tabla2.component';
import { Edm02tabla3Component } from './components/edm/edm02tabla3/edm02tabla3.component';
import { Edm02tabla4Component } from './components/edm/edm02tabla4/edm02tabla4.component';
import { Edm02tabla5Component } from './components/edm/edm02tabla5/edm02tabla5.component';
import { Edm03tabla1Component } from './components/edm/edm03tabla1/edm03tabla1.component';
import { Edm03tabla2Component } from './components/edm/edm03tabla2/edm03tabla2.component';
import { Edm03tabla3Component } from './components/edm/edm03tabla3/edm03tabla3.component';
import { Edm03tabla4Component } from './components/edm/edm03tabla4/edm03tabla4.component';
import { Edm03tabla5Component } from './components/edm/edm03tabla5/edm03tabla5.component';
import { Edm04tabla1Component } from './components/edm/edm04tabla1/edm04tabla1.component';
import { Edm04tabla2Component } from './components/edm/edm04tabla2/edm04tabla2.component';
import { Edm04tabla3Component } from './components/edm/edm04tabla3/edm04tabla3.component';
import { Edm04tabla4Component } from './components/edm/edm04tabla4/edm04tabla4.component';
import { Edm05tabla1Component } from './components/edm/edm05tabla1/edm05tabla1.component';
import { Edm05tabla2Component } from './components/edm/edm05tabla2/edm05tabla2.component';
import { Edm05tabla3Component } from './components/edm/edm05tabla3/edm05tabla3.component';
import { Edm05tabla4Component } from './components/edm/edm05tabla4/edm05tabla4.component';
import { Edm01titulosComponent } from './components/edm/edm01titulos/edm01titulos.component';
import { Edm01casillasComponent } from './components/edm/edm01casillas/edm01casillas.component';
import { CrearSecondComponent } from './components/edm/crear-second/crear-second.component';
import { ListarSecondComponent } from './components/edm/listar-second/listar-second.component';
import { ListarThreeComponent } from './components/edm/listar-three/listar-three.component';
import { CrearThreeComponent } from './components/edm/crear-three/crear-three.component';
import { CrearHead3Component } from './components/edm/crear-head3/crear-head3.component';
import { CrearHeadComponent } from './components/edm/crear-head/crear-head.component';
import { ListarFourComponent } from './components/edm/listar-four/listar-four.component';
import { CrearFourComponent } from './components/edm/crear-four/crear-four.component';
import { CrearHead4Component } from './components/edm/crear-head4/crear-head4.component';
import { Edm05titulosComponent } from './components/edm/edm05titulos/edm05titulos.component';
import { Edm05casillasComponent } from './components/edm/edm05casillas/edm05casillas.component';

import { Mea01Component } from './components/mea01/mea01.component';
import { Mea01aComponent } from './components/mea01a/mea01a.component';
import { Mea01bComponent } from './components/mea01b/mea01b.component';
import { Mea02Component } from './components/mea02/mea02.component';
import { Mea02aComponent } from './components/mea02a/mea02a.component';
import { Mea02bComponent } from './components/mea02b/mea02b.component';
import { Mea02cComponent } from './components/mea02c/mea02c.component';
import { Mea02dComponent } from './components/mea02d/mea02d.component';
import { Meao3tabla1Component } from './components/meao3tabla1/meao3tabla1.component';
import { Meao3tabla2Component } from './components/meao3tabla2/meao3tabla2.component';
import { Meao3tabla3Component } from './components/meao3tabla3/meao3tabla3.component';
import { Meao3tabla4Component } from './components/meao3tabla4/meao3tabla4.component';
import { ListarTablazComponent } from './components/listar-tablaz/listar-tablaz.component';
import { ListarTablaxComponent } from './components/listar-tablax/listar-tablax.component';

import { CrearTablazComponent } from './components/crear-tablaz/crear-tablaz.component';
import { CrearTablaxComponent } from './components/crear-tablax/crear-tablax.component';

import { CrearCabecerazComponent } from './components/crear-cabeceraz/crear-cabeceraz.component';
import { CrearCabeceraxComponent } from './components/crear-cabecerax/crear-cabecerax.component';

import { CrearTabladosComponent } from './components/crear-tablados/crear-tablados.component';
import { ListarTabladosComponent } from './components/listar-tablados/listar-tablados.component';
//BAI
import { ListarTabla3Component } from './components/listar-tabla3/listar-tabla3.component';
import { CrearTabla3Component } from './components/crear-tabla3/crear-tabla3.component';
import { CrearCabecerab03Component } from './components/crear-cabecerab03/crear-cabecerab03.component';
import { ListarRacicuatroComponent } from './components/listar-racicuatro/listar-racicuatro.component';
import { CrearRacicuatroComponent } from './components/crear-racicuatro/crear-racicuatro.component';
import { CrearCabecerab04Component } from './components/crear-cabecerab04/crear-cabecerab04.component';
import { ListarBai05Component } from './components/listar-bai05/listar-bai05.component';
import { CrearBai05Component } from './components/crear-bai05/crear-bai05.component';
import { CrearCabecerab05Component } from './components/crear-cabecerab05/crear-cabecerab05.component';
import { ListarBai09Component } from './components/listar-bai09/listar-bai09.component';
import { CrearCabecerab09Component } from './components/crear-cabecerab09/crear-cabecerab09.component';
import { CrearBai09Component } from './components/crear-bai09/crear-bai09.component';
import { ListarBai10Component } from './components/listar-bai10/listar-bai10.component';
import { CrearBai10Component } from './components/crear-bai10/crear-bai10.component';
import { CrearCabecerab10Component } from './components/crear-cabecerab10/crear-cabecerab10.component';
import { Pagina133Component } from './components/pagina133/pagina133.component';
import { Pagina134Component } from './components/pagina134/pagina134.component';
import { Pagina135Component } from './components/pagina135/pagina135.component';
import { Pagina136Component } from './components/pagina136/pagina136.component';
import { Pagina137Component } from './components/pagina137/pagina137.component';
import { Pagina138Component } from './components/pagina138/pagina138.component';
import { Pagina139Component } from './components/pagina139/pagina139.component';
import { Pagina141Component } from './components/pagina141/pagina141.component';
import { Pagina142Component } from './components/pagina142/pagina142.component';
import { Pagina143Component } from './components/pagina143/pagina143.component';
import { Pagina144Component } from './components/pagina144/pagina144.component';
import { Pagina145Component } from './components/pagina145/pagina145.component';
import { Pagina146Component } from './components/pagina146/pagina146.component';
import { Pagina147Component } from './components/pagina147/pagina147.component';
import { Pagina148Component } from './components/pagina148/pagina148.component';
import { Pagina163Component } from './components/pagina163/pagina163.component';
import { Pagina164Component } from './components/pagina164/pagina164.component';
import { Pagina165Component } from './components/pagina165/pagina165.component';
import { Pagina166Component } from './components/pagina166/pagina166.component';
import { Pagina167Component } from './components/pagina167/pagina167.component';
import { Pagina168Component } from './components/pagina168/pagina168.component';
import { Pagina169Component } from './components/pagina169/pagina169.component';
import { Pagina119Component } from './components/pagina119/pagina119.component';
import { Pagina120Component } from './components/pagina120/pagina120.component';
import { Pagina121Component } from './components/pagina121/pagina121.component';
import { Pagina122Component } from './components/pagina122/pagina122.component';
import { Pagina123Component } from './components/pagina123/pagina123.component';
import { Pagina124Component } from './components/pagina124/pagina124.component';
import { Pagina125Component } from './components/pagina125/pagina125.component';
import { Pagina126Component } from './components/pagina126/pagina126.component';
import { Pagina127Component } from './components/pagina127/pagina127.component';
import { Pagina129Component } from './components/pagina129/pagina129.component';
import { Pagina130Component } from './components/pagina130/pagina130.component';
import { Pagina131Component } from './components/pagina131/pagina131.component';
import { Pagina132Component } from './components/pagina132/pagina132.component';
import { Pagina149Component } from './components/pagina149/pagina149.component';
import { Pagina150Component } from './components/pagina150/pagina150.component';
import { Pagina151Component } from './components/pagina151/pagina151.component';
import { Pagina153Component } from './components/pagina153/pagina153.component';
import { Pagina154Component } from './components/pagina154/pagina154.component';
import { Pagina155Component } from './components/pagina155/pagina155.component';
import { Pagina156Component } from './components/pagina156/pagina156.component';
import { Pagina157Component } from './components/pagina157/pagina157.component';
import { Pagina158Component } from './components/pagina158/pagina158.component';
import { Pagina159Component } from './components/pagina159/pagina159.component';
import { Pagina160Component } from './components/pagina160/pagina160.component';
import { Pagina161Component } from './components/pagina161/pagina161.component';
import { CrearCabecera1Component } from './components/crear-cabecera1/crear-cabecera1.component';
import { CrearCabecera3Component } from './components/crear-cabecera3/crear-cabecera3.component';
import { CrearCabecera6Component } from './components/crear-cabecera6/crear-cabecera6.component';
import { CrearCabecera7Component } from './components/crear-cabecera7/crear-cabecera7.component';
import { CrearCabecera8Component } from './components/crear-cabecera8/crear-cabecera8.component';
import { CrearTablaunoComponent } from './components/crear-tablauno/crear-tablauno.component';
import { CrearTablatresComponent } from './components/crear-tablatres/crear-tablatres.component';
import { CrearTablaseisComponent } from './components/crear-tablaseis/crear-tablaseis.component';
import { CrearTablasieteComponent } from './components/crear-tablasiete/crear-tablasiete.component';
import { CrearTablaochoComponent } from './components/crear-tablaocho/crear-tablaocho.component';
import { ListarTablaunoComponent } from './components/listar-tablauno/listar-tablauno.component';
import { ListarTablatresComponent } from './components/listar-tablatres/listar-tablatres.component';
import { ListarTablaseisComponent } from './components/listar-tablaseis/listar-tablaseis.component';
import { ListarTablasieteComponent } from './components/listar-tablasiete/listar-tablasiete.component';
import { ListarTablaochoComponent } from './components/listar-tablaocho/listar-tablaocho.component';
//APO 
import { Pagina51Component } from './components/pagina51/pagina51.component';
import { Pagina52Component } from './components/pagina52/pagina52.component';
import { Pagina53Component } from './components/pagina53/pagina53.component';
import { Pagina54Component } from './components/pagina54/pagina54.component';
import { Pagina55Component } from './components/pagina55/pagina55.component';
import { Pagina56Component } from './components/pagina56/pagina56.component';
import { Pagina57Component } from './components/pagina57/pagina57.component';
import { Pagina58Component } from './components/pagina58/pagina58.component';
import { Pagina59Component } from './components/pagina59/pagina59.component';
import { Pagina60Component } from './components/pagina60/pagina60.component';
import { Pagina61Component } from './components/pagina61/pagina61.component';
import { Pagina62Component } from './components/pagina62/pagina62.component';
import { Pagina63Component } from './components/pagina63/pagina63.component';
import { Pagina64Component } from './components/pagina64/pagina64.component';
import { Pagina65Component } from './components/pagina65/pagina65.component';
import { Pagina66Component } from './components/pagina66/pagina66.component';
import { Pagina67Component } from './components/pagina67/pagina67.component';
import { Pagina69Component } from './components/pagina69/pagina69.component';
import { Pagina70Component } from './components/pagina70/pagina70.component';
import { Pagina71Component } from './components/pagina71/pagina71.component';
import { Pagina72Component } from './components/pagina72/pagina72.component';
import { Pagina73Component } from './components/pagina73/pagina73.component';
import { Pagina74Component } from './components/pagina74/pagina74.component';
import { Pagina75Component } from './components/pagina75/pagina75.component';
import { Pagina76Component } from './components/pagina76/pagina76.component';
import { Pagina77Component } from './components/pagina77/pagina77.component';
import { Apo7tabla1Component } from './components/apo7tabla1/apo7tabla1.component';
import { Apo7tabla2Component } from './components/apo7tabla2/apo7tabla2.component';
import { Apo7tabla3Component } from './components/apo7tabla3/apo7tabla3.component';
import { Apo7tabla4Component } from './components/apo7tabla4/apo7tabla4.component';
import { Apo7tabla5Component } from './components/apo7tabla5/apo7tabla5.component';
import { Apo8tabla1Component } from './components/apo8tabla1/apo8tabla1.component';
import { Apo8tabla2Component } from './components/apo8tabla2/apo8tabla2.component';
import { Apo8tabla3Component } from './components/apo8tabla3/apo8tabla3.component';
import { Apo8tabla4Component } from './components/apo8tabla4/apo8tabla4.component';
import { Apo9tabla1Component } from './components/apo9tabla1/apo9tabla1.component';
import { Apo9tabla2Component } from './components/apo9tabla2/apo9tabla2.component';
import { Apo9tabla3Component } from './components/apo9tabla3/apo9tabla3.component';
import { Apo9tabla4Component } from './components/apo9tabla4/apo9tabla4.component';
import { Apo6tabla1Component } from './components/apo6tabla1/apo6tabla1.component';
import { Apo6tabla2Component } from './components/apo6tabla2/apo6tabla2.component';
import { Apo6tabla3Component } from './components/apo6tabla3/apo6tabla3.component';
import { Apo6tabla4Component } from './components/apo6tabla4/apo6tabla4.component';
import { Apo10tabla1Component } from './components/apo10tabla1/apo10tabla1.component';
import { Apo10tabla2Component } from './components/apo10tabla2/apo10tabla2.component';
import { Apo10tabla3Component } from './components/apo10tabla3/apo10tabla3.component';
import { Apo11tabla1Component } from './components/apo11tabla1/apo11tabla1.component';
import { Apo11tabla2Component } from './components/apo11tabla2/apo11tabla2.component';
import { Apo11tabla3Component } from './components/apo11tabla3/apo11tabla3.component';
import { Apo11tabla4Component } from './components/apo11tabla4/apo11tabla4.component';
import { Apo11tabla5Component } from './components/apo11tabla5/apo11tabla5.component';
import { Apo12tabla1Component } from './components/apo12tabla1/apo12tabla1.component';
import { Apo12tabla2Component } from './components/apo12tabla2/apo12tabla2.component';
import { Apo12tabla3Component } from './components/apo12tabla3/apo12tabla3.component';
import { Apo12tabla4Component } from './components/apo12tabla4/apo12tabla4.component';
import { Apo12tabla5Component } from './components/apo12tabla5/apo12tabla5.component';
import { Apo13tabla1Component } from './components/apo13tabla1/apo13tabla1.component';
import { Apo13tabla2Component } from './components/apo13tabla2/apo13tabla2.component';
import { Apo13tabla3Component } from './components/apo13tabla3/apo13tabla3.component';
import { Apo06casillaComponent } from './components/apo06casilla/apo06casilla.component';
import { Apo06raciComponent } from './components/apo06raci/apo06raci.component';
import { Apo06tituloComponent } from './components/apo06titulo/apo06titulo.component';
import { Apo03casillaComponent } from './components/apo03casilla/apo03casilla.component';
import { Apo03raciComponent } from './components/apo03raci/apo03raci.component';
import { Apo03tituloComponent } from './components/apo03titulo/apo03titulo.component';
import { Apo04casillaComponent } from './components/apo04casilla/apo04casilla.component';
import { Apo04raciComponent } from './components/apo04raci/apo04raci.component';
import { Apo04tituloComponent } from './components/apo04titulo/apo04titulo.component';
import { Apo05casillaComponent } from './components/apo05casilla/apo05casilla.component';
import { Apo07casillaComponent } from './components/apo07casilla/apo07casilla.component';
import { Apo08casillaComponent } from './components/apo08casilla/apo08casilla.component';
import { Apo05tituloComponent } from './components/apo05titulo/apo05titulo.component';
import { Apo07tituloComponent } from './components/apo07titulo/apo07titulo.component';
import { Apo08tituloComponent } from './components/apo08titulo/apo08titulo.component';
import { Apo08raciComponent } from './components/apo08raci/apo08raci.component';
import { Apo05raciComponent } from './components/apo05raci/apo05raci.component';
import { Apo07raciComponent } from './components/apo07raci/apo07raci.component';
import { Apo09casillaComponent } from './components/apo09casilla/apo09casilla.component';
import { Apo010casillaComponent } from './components/apo010casilla/apo010casilla.component';
import { Apo011casillaComponent } from './components/apo011casilla/apo011casilla.component';
import { Apo011tituloComponent } from './components/apo011titulo/apo011titulo.component';
import { Apo010tituloComponent } from './components/apo010titulo/apo010titulo.component';
import { Apo09tituloComponent } from './components/apo09titulo/apo09titulo.component';
import { Apo09raciComponent } from './components/apo09raci/apo09raci.component';
import { Apo010raciComponent } from './components/apo010raci/apo010raci.component';
import { Apo011raciComponent } from './components/apo011raci/apo011raci.component';
import { Apo012casillaComponent } from './components/apo012casilla/apo012casilla.component';
import { Apo013casillaComponent } from './components/apo013casilla/apo013casilla.component';
import { Apo013tituloComponent } from './components/apo013titulo/apo013titulo.component';
import { Apo012tituloComponent } from './components/apo012titulo/apo012titulo.component';
import { Apo012raciComponent } from './components/apo012raci/apo012raci.component';
import { Apo013raciComponent } from './components/apo013raci/apo013raci.component';
import { Dsso1tabla1Component } from './components/dsso1tabla1/dsso1tabla1.component';
import { Dsso1tabla2Component } from './components/dsso1tabla2/dsso1tabla2.component';
import { Dsso1tabla3Component } from './components/dsso1tabla3/dsso1tabla3.component';
import { Dsso1tabla4Component } from './components/dsso1tabla4/dsso1tabla4.component';
import { Dsso1tabla5Component } from './components/dsso1tabla5/dsso1tabla5.component';
import { Dsso1tabla6Component } from './components/dsso1tabla6/dsso1tabla6.component';
import { Dsso1tabla7Component } from './components/dsso1tabla7/dsso1tabla7.component';
import { Dsso2tabla1Component } from './components/dsso2tabla1/dsso2tabla1.component';
import { Dsso2tabla2Component } from './components/dsso2tabla2/dsso2tabla2.component';
import { Dsso2tabla3Component } from './components/dsso2tabla3/dsso2tabla3.component';
import { Dsso2tabla4Component } from './components/dsso2tabla4/dsso2tabla4.component';
import { Dsso2tabla5Component } from './components/dsso2tabla5/dsso2tabla5.component';
import { Dsso2tabla6Component } from './components/dsso2tabla6/dsso2tabla6.component';
import { Dsso2tabla7Component } from './components/dsso2tabla7/dsso2tabla7.component';
import { Dsso2tabla8Component } from './components/dsso2tabla8/dsso2tabla8.component';
import { Dsso2tabla9Component } from './components/dsso2tabla9/dsso2tabla9.component';
import { Dsso3tabla1Component } from './components/dsso3tabla1/dsso3tabla1.component';
import { Dsso3tabla2Component } from './components/dsso3tabla2/dsso3tabla2.component';
import { Dsso3tabla3Component } from './components/dsso3tabla3/dsso3tabla3.component';
import { Dsso3tabla4Component } from './components/dsso3tabla4/dsso3tabla4.component';
import { Dsso3tabla5Component } from './components/dsso3tabla5/dsso3tabla5.component';
import { Dsso3tabla6Component } from './components/dsso3tabla6/dsso3tabla6.component';
import { Dsso3tabla7Component } from './components/dsso3tabla7/dsso3tabla7.component';
import { Dsso4tabla1Component } from './components/dsso4tabla1/dsso4tabla1.component';
import { Dsso4tabla2Component } from './components/dsso4tabla2/dsso4tabla2.component';
import { Dsso4tabla3Component } from './components/dsso4tabla3/dsso4tabla3.component';
import { Dsso4tabla4Component } from './components/dsso4tabla4/dsso4tabla4.component';
import { Dsso4tabla5Component } from './components/dsso4tabla5/dsso4tabla5.component';
import { Dsso4tabla6Component } from './components/dsso4tabla6/dsso4tabla6.component';
import { Dsso4tabla7Component } from './components/dsso4tabla7/dsso4tabla7.component';
import { Dsso4tabla8Component } from './components/dsso4tabla8/dsso4tabla8.component';
import { Dsso4tabla9Component } from './components/dsso4tabla9/dsso4tabla9.component';
import { Dsso4tabla10Component } from './components/dsso4tabla10/dsso4tabla10.component';
import { Dsso5tabla1Component } from './components/dsso5tabla1/dsso5tabla1.component';
import { Dsso5tabla2Component } from './components/dsso5tabla2/dsso5tabla2.component';
import { Dsso5tabla3Component } from './components/dsso5tabla3/dsso5tabla3.component';
import { Dsso5tabla4Component } from './components/dsso5tabla4/dsso5tabla4.component';
import { Dsso5tabla5Component } from './components/dsso5tabla5/dsso5tabla5.component';
import { Dsso5tabla6Component } from './components/dsso5tabla6/dsso5tabla6.component';
import { Dsso5tabla7Component } from './components/dsso5tabla7/dsso5tabla7.component';
import { Dsso5tabla8Component } from './components/dsso5tabla8/dsso5tabla8.component';
import { Dsso5tabla9Component } from './components/dsso5tabla9/dsso5tabla9.component';
import { Dsso6tabla1Component } from './components/dsso6tabla1/dsso6tabla1.component';
import { Dsso6tabla2Component } from './components/dsso6tabla2/dsso6tabla2.component';
import { Dsso6tabla3Component } from './components/dsso6tabla3/dsso6tabla3.component';
import { Dsso6tabla4Component } from './components/dsso6tabla4/dsso6tabla4.component';
import { Dsso6tabla5Component } from './components/dsso6tabla5/dsso6tabla5.component';
import { Dsso6tabla6Component } from './components/dsso6tabla6/dsso6tabla6.component';
import { Dsso6tabla7Component } from './components/dsso6tabla7/dsso6tabla7.component';
import { Dsso6tabla8Component } from './components/dsso6tabla8/dsso6tabla8.component';
import { Listraci01Component } from './components/listraci01/listraci01.component';
import { Listraci02Component } from './components/listraci02/listraci02.component';
import { Listraci03Component } from './components/listraci03/listraci03.component';
import { Listraci04Component } from './components/listraci04/listraci04.component';
import { Listraci05Component } from './components/listraci05/listraci05.component';
import { Listraci06Component } from './components/listraci06/listraci06.component';
import { Raci01Component } from './components/raci01/raci01.component';
import { Raci02Component } from './components/raci02/raci02.component';
import { Raci04Component } from './components/raci04/raci04.component';
import { Raci05Component } from './components/raci05/raci05.component';
import { Raci06Component } from './components/raci06/raci06.component';
import { Racicabe01Component } from './components/racicabe01/racicabe01.component';
import { Racicabe02Component } from './components/racicabe02/racicabe02.component';
import { Racicabe04Component } from './components/racicabe04/racicabe04.component';
import { Racicabe03Component } from './components/racicabe03/racicabe03.component';
import { Racicabe05Component } from './components/racicabe05/racicabe05.component';
import { Racicabe06Component } from './components/racicabe06/racicabe06.component';
import { Raci03Component } from './components/raci03/raci03.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	//EDM
    Edm01tabla1Component,
    Edm01tabla2Component,
    Edm01tabla3Component,
    Edm01tabla4Component,
    Edm01tabla5Component,
    Edm02tabla1Component,
    Edm02tabla2Component,
    Edm02tabla3Component,
    Edm02tabla4Component,
    Edm02tabla5Component,
    Edm03tabla1Component,
    Edm03tabla2Component,
    Edm03tabla3Component,
    Edm03tabla4Component,
    Edm03tabla5Component,
    Edm04tabla1Component,
    Edm04tabla2Component,
    Edm04tabla3Component,
    Edm04tabla4Component,
    Edm05tabla1Component,
    Edm05tabla2Component,
    Edm05tabla3Component,
    Edm05tabla4Component,
    Edm01titulosComponent,
    Edm01casillasComponent,
    CrearSecondComponent,
    ListarSecondComponent,
    CrearHeadComponent,
    CrearSecondComponent,
    ListarSecondComponent,
    CrearHeadComponent,
    CrearHead3Component,
    CrearThreeComponent,
    ListarThreeComponent,
    CrearHead4Component,
    CrearFourComponent,
    ListarFourComponent,
    Edm05titulosComponent,
    Edm05casillasComponent,
    //FIN EDM
    Mea01Component,
    Mea01aComponent,
    Mea01bComponent,
    Mea02Component,
    Mea02aComponent,
    Mea02bComponent,
    Mea02cComponent,
    Mea02dComponent,
    Meao3tabla1Component,
    Meao3tabla2Component,
    Meao3tabla3Component,
    Meao3tabla4Component,
    ListarTablazComponent,
    ListarTablaxComponent,

    CrearTablazComponent,
    CrearTablaxComponent,

    CrearCabecerazComponent,
    CrearCabeceraxComponent,
    CrearCabeceraDosComponent,
    CrearTabladosComponent,
    ListarTabladosComponent,
    //BAI
    Pagina133Component,
    Pagina134Component,
    Pagina135Component,
    Pagina136Component,
    Pagina137Component,
    Pagina138Component,
    Pagina139Component,
    ListarTabla3Component,
    CrearTabla3Component,
    CrearCabecerab03Component,
    Pagina141Component,
    Pagina142Component,
    Pagina143Component,
    Pagina144Component,
    ListarRacicuatroComponent,
    CrearRacicuatroComponent,
    CrearCabecerab04Component,
    Pagina145Component,
    Pagina146Component,
    Pagina147Component,
    Pagina148Component,
    ListarBai05Component,
    CrearBai05Component,
    CrearCabecerab05Component,
    Pagina163Component,
    Pagina164Component,
    Pagina165Component,
    Pagina166Component,
    ListarBai09Component,
    CrearCabecerab09Component,
    CrearBai09Component,
    Pagina167Component,
    Pagina168Component,
    Pagina169Component,
    ListarBai10Component,
    CrearBai10Component,
    CrearCabecerab10Component,
    Pagina119Component,
    Pagina120Component,
    Pagina121Component,
    Pagina122Component,
    Pagina123Component,
    Pagina124Component,
    Pagina125Component,
    Pagina126Component,
    Pagina127Component,
    Pagina129Component,
    Pagina130Component,
    Pagina131Component,
    Pagina132Component,
    Pagina149Component,
    Pagina150Component,
    Pagina151Component,
    Pagina153Component,
    Pagina154Component,
    Pagina155Component,
    Pagina156Component,
    Pagina157Component,
    Pagina158Component,
    Pagina159Component,
    Pagina160Component,
    Pagina161Component,
    CrearCabecera1Component,
    CrearCabecera3Component,
    CrearCabecera6Component,
    CrearCabecera7Component,
    CrearCabecera8Component,
    CrearTablaunoComponent,
    CrearTablatresComponent,
    CrearTablaseisComponent,
    CrearTablasieteComponent,
    CrearTablaochoComponent,
    ListarTablaunoComponent,
    ListarTablatresComponent,
    ListarTablaseisComponent,
    ListarTablasieteComponent,
    ListarTablaochoComponent,
	//APO 
    
	  Pagina51Component,
    Pagina52Component,
    Pagina53Component,
    Pagina54Component,
    Pagina55Component,
    Pagina56Component,
    Pagina57Component,
    Pagina58Component,
    Pagina59Component,
    Pagina60Component,
    Pagina61Component,
    Pagina62Component,
    Pagina63Component,
    Pagina64Component,
    Pagina65Component,
    Pagina66Component,
    Pagina67Component,
    Pagina69Component,
    Pagina70Component,
    Pagina71Component,
    Pagina72Component,
    Pagina73Component,
    Pagina74Component,
    Pagina75Component,
    Pagina76Component,
    Pagina77Component,
	  Apo7tabla1Component,
    Apo7tabla2Component,
    Apo7tabla3Component,
    Apo7tabla4Component,
    Apo7tabla5Component,
    Apo8tabla1Component,
    Apo8tabla2Component,
    Apo8tabla3Component,
    Apo8tabla4Component,
    Apo9tabla1Component,
    Apo9tabla2Component,
    Apo9tabla3Component,
    Apo9tabla4Component,
	  Apo6tabla1Component,
    Apo6tabla2Component,
    Apo6tabla3Component,
    Apo6tabla4Component,
	  Apo10tabla1Component,
    Apo10tabla2Component,
    Apo10tabla3Component,
    Apo11tabla1Component,
    Apo11tabla2Component,
    Apo11tabla3Component,
    Apo11tabla4Component,
    Apo11tabla5Component,
    Apo12tabla1Component,
    Apo12tabla2Component,
    Apo12tabla3Component,
    Apo12tabla4Component,
    Apo12tabla5Component,
    Apo13tabla1Component,
    Apo13tabla2Component,
    Apo13tabla3Component,
    Apo06casillaComponent,
    Apo06raciComponent,
    Apo06tituloComponent,
    Apo03casillaComponent,
    Apo03raciComponent,
    Apo03tituloComponent,
    Apo04casillaComponent,
    Apo04raciComponent,
    Apo04tituloComponent,
    Apo05casillaComponent,
    Apo07casillaComponent,
    Apo08casillaComponent,
    Apo05tituloComponent,
    Apo07tituloComponent,
    Apo08tituloComponent,
    Apo08raciComponent,
    Apo05raciComponent,
    Apo07raciComponent,
    Apo09casillaComponent,
    Apo010casillaComponent,
    Apo011casillaComponent,
    Apo011tituloComponent,
    Apo010tituloComponent,
    Apo09tituloComponent,
    Apo09raciComponent,
    Apo010raciComponent,
    Apo011raciComponent,
    Apo012casillaComponent,
    Apo013casillaComponent,
    Apo013tituloComponent,
    Apo012tituloComponent,
    Apo012raciComponent,
    Apo013raciComponent,
    Dsso1tabla1Component,
    Dsso1tabla2Component,
    Dsso1tabla3Component,
    Dsso1tabla4Component,
    Dsso1tabla5Component,
    Dsso1tabla6Component,
    Dsso1tabla7Component,
    Dsso2tabla1Component,
    Dsso2tabla2Component,
    Dsso2tabla3Component,
    Dsso2tabla4Component,
    Dsso2tabla5Component,
    Dsso2tabla6Component,
    Dsso2tabla7Component,
    Dsso2tabla8Component,
    Dsso2tabla9Component,
    Dsso3tabla1Component,
    Dsso3tabla2Component,
    Dsso3tabla3Component,
    Dsso3tabla4Component,
    Dsso3tabla5Component,
    Dsso3tabla6Component,
    Dsso3tabla7Component,
    Dsso4tabla1Component,
    Dsso4tabla2Component,
    Dsso4tabla3Component,
    Dsso4tabla4Component,
    Dsso4tabla5Component,
    Dsso4tabla6Component,
    Dsso4tabla7Component,
    Dsso4tabla8Component,
    Dsso4tabla9Component,
    Dsso4tabla10Component,
    Dsso5tabla1Component,
    Dsso5tabla2Component,
    Dsso5tabla3Component,
    Dsso5tabla4Component,
    Dsso5tabla5Component,
    Dsso5tabla6Component,
    Dsso5tabla7Component,
    Dsso5tabla8Component,
    Dsso5tabla9Component,
    Dsso6tabla1Component,
    Dsso6tabla2Component,
    Dsso6tabla3Component,
    Dsso6tabla4Component,
    Dsso6tabla5Component,
    Dsso6tabla6Component,
    Dsso6tabla7Component,
    Dsso6tabla8Component,
    Listraci01Component,
    Listraci02Component,
    Listraci03Component,
    Listraci04Component,
    Listraci05Component,
    Listraci06Component,
    Raci01Component,
    Raci02Component,
    Raci04Component,
    Raci05Component,
    Raci06Component,
    Racicabe01Component,
    Racicabe02Component,
    Racicabe04Component,
    Racicabe03Component,
    Racicabe05Component,
    Racicabe06Component,
    Raci03Component,
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
