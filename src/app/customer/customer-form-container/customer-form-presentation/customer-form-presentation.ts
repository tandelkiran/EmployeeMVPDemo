import {
  Component, OnInit, Input, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory, OnDestroy, TemplateRef, AfterViewInit, ElementRef
} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { CustomerFormPresenter } from '../customer-form-presenter/customer-form.presenter';
import { DynamicComponent } from '../../dynamic/dynamic.component';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.html',
  styleUrls: ['./customer-form-presentation.scss'],
  providers: [CustomerFormPresenter]
})

export class CustomerFormPresentation implements OnInit, AfterViewInit, OnDestroy {

  componentRef: any;

  nextPosition: number = 0;

  @ViewChild('componentFactoryContainer', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  @ViewChild('cdkPortalContent', { read: ViewContainerRef, static: true }) cdkContainer: TemplateRef<any>;
  private _counter = 1;


  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<DynamicComponent>;
  templatePortal: TemplatePortal<any>;

  constructor(private resolver: ComponentFactoryResolver, private _viewContainerRef: ViewContainerRef,public overlay: Overlay) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(DynamicComponent);
    this.templatePortal = new TemplatePortal(this.cdkContainer, this._viewContainerRef);
  }

  addComponentFactory(): void {
    this.container.clear();
    const componentFactory = this.resolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.index = this._counter;
    //this.customerFormPresenter.add();
  }

  addCDKPortal(): void {

  }

  addOverlay(): void {

  }
  showGlobalOverlay() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    overlayRef.attach(new ComponentPortal(DynamicComponent))
  }

  // 3
  openRotiniPanel() {
    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
        .global()
        .left(`${this.nextPosition}px`)
        .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  
    overlayRef.attach(new ComponentPortal(DynamicComponent, this._viewContainerRef));
  }

  closeComponentFactory() {
    this.container.clear();
  }

  closeCDKPortal() {
    debugger
    this.componentPortal.detach();
  }

  closeOverlay() {

  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.container.detach();

    }
  }
}
