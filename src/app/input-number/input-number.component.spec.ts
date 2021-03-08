import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumberComponent } from './input-number.component';

describe('InputNumberComponent', () => {
  let component: InputNumberComponent;
  let fixture: ComponentFixture<InputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputNumberComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should broadcast value after init', () => {
    spyOn(component.emitValue, 'emit');
    component.ngOnInit();
    expect(component.emitValue.emit).toHaveBeenCalled();
  });

  it('should emit max value when out of scope', () => {
    spyOn(component.emitValue, 'emit');
    component.value = 999999;
    component.increase();
    expect(component.value).toEqual(component.max);
    expect(component.emitValue.emit).toHaveBeenCalled();
  });

  it('should emit increased value', () => {
    spyOn(component.emitValue, 'emit');
    component.value = 5;
    component.increase();
    expect(component.emitValue.emit).toHaveBeenCalledWith(6);
  });

  it('should emit min value when out of scope', () => {
    spyOn(component.emitValue, 'emit');
    component.value = -15;
    component.decrease();
    expect(component.value).toEqual(component.min);
    expect(component.emitValue.emit).toHaveBeenCalled();
  });

  it('should emit decreased value', () => {
    spyOn(component.emitValue, 'emit');
    component.value = 5;
    component.decrease();
    expect(component.emitValue.emit).toHaveBeenCalledWith(4);
  });

  it('should emit value on blur', () => {
    spyOn(component.emitValue, 'emit');
    component.onBlur();
    expect(component.emitValue.emit).toHaveBeenCalled();
  });

  it('should setup default value when entered min out of scope', () => {
    component.value = -15;
    component.onBlur();
    expect(component.value).toEqual(component.min);
  });


  it('should setup default value when entered min out of scope', () => {
    component.value = 150000;
    component.onBlur();
    expect(component.value).toEqual(component.min);
  });


});
