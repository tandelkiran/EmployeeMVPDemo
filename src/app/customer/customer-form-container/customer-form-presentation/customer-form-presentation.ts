import {Component, OnInit, Input, ViewChild, ViewContainerRef,ComponentFactoryResolver, 
  ComponentRef, ComponentFactory, OnDestroy, TemplateRef, AfterViewInit, ElementRef
} from '@angular/core';
import {ComponentPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';

import { CustomerFormPresenter } from '../customer-form-presenter/customer-form.presenter';
import { DynamicComponent } from '../../dynamic/dynamic.component';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.html',
  styleUrls: ['./customer-form-presentation.scss'],
  providers: [CustomerFormPresenter]
})

export class CustomerFormPresentation implements OnInit, OnDestroy {

  componentRef: any;

  // @ViewChild('',{ read: OverlayRef, static: true }) _overlayOrigin: OverlayRef;
  @ViewChild('componentFactoryContainer', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DynamicComponent>;

  private _counter = 1;

  constructor(private resolver: ComponentFactoryResolver, public overlay: Overlay, 
    public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  addComponentFactory(): void {
    this.container.clear();
    const componentFactory = this.resolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.index = this._counter;
    //this.customerFormPresenter.add();
  }

  addCDKPortal(): void {
    this.componentPortal = new ComponentPortal(DynamicComponent);
    this.selectedPortal=this.componentPortal;
  }

  addOverlay(): void {
    debugger
    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .left(`600px`)
        .top(`300px`);

    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  
    overlayRef.attach(new ComponentPortal(DynamicComponent, this.viewContainerRef));
  }

  closeComponentFactory() {
    this.container.clear();
  }

  closeCDKPortal() {
    debugger
    this.selectedPortal.detach();
  }

  closeOverlay() {

  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.container.detach();
    }
  }
}
