import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountPayload, TransferPayload } from 'src/app/models/payloads/account.payload';
import { AccountMovementsProxy, AccountProxy } from 'src/app/models/proxies/account.proxy';
import { AccountService } from 'src/app/services/account/account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public account: AccountProxy;

  public loading: boolean = false;

  public onCreate: boolean = false;

  public onTransfer: boolean = false;

  public onMovements: boolean = false;

  public formGroup: FormGroup;

  public formGroupTransfer: FormGroup;

  public movements: AccountMovementsProxy[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private service: AccountService,
    private toastr: ToastrService,
  ) {
    this.loadAccount();

    this.formGroup = this.fb.group({
      number: ['', [Validators.required]]
    });

    this.formGroupTransfer = this.fb.group({
      number: ['', [Validators.required]],
      agency: ['', [Validators.required]],
      amount: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public createNewAccount(): void {
    this.onCreate = !this.onCreate;
  }

  public createTransfer(): void {
    this.onTransfer = !this.onTransfer;
    this.onMovements = false;
  }

  public showMoviments(): void {
    this.onMovements = !this.onMovements;
    this.onTransfer = false;
  }

  private errorNoAccount(): void {
    this.loading = false;
    this.toastr.error('Nenhuma conta encontrada!');
  }

  private loadAccount(): void {
    this.loading = true;

    this.service.findStatement()
      .then((response) => {
        this.loading = false;
        if (response) {
          this.account = response
          this.movements = response.movements || [];
        }
      })
      .catch((ex) => this.errorNoAccount())
  }

  public toNumber(value: string): number {
    return Number(value);
  }

  public newTransfer(): void {
    this.loading = true;
    const { agency, amount, number } = this.formGroupTransfer.value
    let values = new TransferPayload();
    values.agency = agency;
    values.number = number;
    values.amount = Number((amount + '').replace(',', '.'));

    this.formGroupTransfer.disable();


    this.service.transfer(values)
      .then((response) => {
        this.toastr.success('Valor enviado com sucesso!');
        this.formGroupTransfer.enable();
        this.formGroupTransfer.reset();
        this.loading = false;
        this.onTransfer = false;
        this.loadAccount();
      })
      .catch((ex) => {
        console.log(ex);
        this.formGroupTransfer.enable();
        this.loading = false;
        this.toastr.error(ex.message);
      })
  }

  public newAccount(): void {
    this.loading = true;
    const values = <AccountPayload>{ ...this.formGroup.value, balance: 2000 };
    this.formGroup.disable();

    this.service.create(values)
      .then((response) => {
        this.toastr.success('Nova Conta Criada!');
      })
      .catch((ex) => {
        console.log(ex);
        this.formGroup.enable();
        this.loading = false;
        this.toastr.error(ex.message);
      })
  }
}
