import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ListInvestimentsService } from './list-investiments.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { signal } from '@angular/core';
import { Investiments } from '../model/investiments';
import { MOCK_LIST } from './list-investiments.mock';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const url = signal<string>(
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json'
  );

  const mockList: Array<Investiments> = MOCK_LIST;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListInvestimentsService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should be list all investiments', (done) => {
    service.list().subscribe((res: Array<Investiments>) => {
      expect(res[0].name).toEqual('Banco 1');
      expect(res[0].value).toEqual(100);

      expect(res[4].name).toEqual('Banco 5');
      expect(res[4].value).toEqual(100);
      done();
    });

    const req = httpTestingController.expectOne(url());
    req.flush(mockList);

    expect(req.request.method).toEqual('GET');
  });
});
