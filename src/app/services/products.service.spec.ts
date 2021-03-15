import { inject, TestBed } from '@angular/core/testing';

import { ProductModel, ProductsService } from './products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from API', inject([HttpClient], (http: HttpClient) => {
      spyOn(http, 'get').and.callThrough();
      service.getProductsList();
      expect(http.get).toHaveBeenCalled();
    })
  );

});
