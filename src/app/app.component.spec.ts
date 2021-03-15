import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductModel, ProductsService } from './services/products.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AppComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get product list', inject([ProductsService], (productsService: ProductsService) => {
      const output = [new ProductModel({name: 'abc'})];
      spyOn(productsService, 'getProductsList').and.returnValue(of(output));
      component.getProducts();
      expect(productsService.getProductsList).toHaveBeenCalled();
      expect(component.data[0].name).toEqual('abc');
    })
  );

  it('should change background', () => {
    component.changeBackground();
    fixture.detectChanges();
    const spiedBg = fixture.debugElement.query(By.css('.isChecked'))?.styles;
    expect(component.isChecked).toEqual(true);
    expect(spiedBg).toBeTruthy();
  });

  it('should change background - turn off', () => {
    component.changeBackground();
    component.changeBackground();
    fixture.detectChanges();
    const spiedBg = fixture.debugElement.query(By.css('.isChecked'))?.styles;
    expect(component.isChecked).toEqual(false);
    expect(spiedBg).toBeFalsy();
  });

});
