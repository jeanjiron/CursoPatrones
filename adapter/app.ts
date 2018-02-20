
/**
*clase anterior
*/
class AdapterShipping{
  private origen:any;
  private peso:any;
  private destino:any;
  private total:any;

  public request( origen:any, destino:any, peso:any){
    this.origen = origen;
    this.destino = destino;
    this.peso = peso;
    this.total = peso * 100;
    return this.total;
  }
}

/**
*clase nueva
*/
class TargetShipping{

  private origen:any;
  private peso:any;
  private destino:any;
  private total:any;

  public login(credenciales:any){
    //TODO
  }

  public setOrigen(origen:any){
      this.origen = origen
  }

  public setDestino(destino:any){
    this.destino = destino;
  }

  public calculate(peso:any){
    this.peso = peso;
    this.total = peso * 100;
    return this.total;
  }

}

/**
*Adaptador que recibe los parametros de la forma antigua pero los procesa con la
*nueva clase
*/
class ShippingAdapter{
  private targetShipping:TargetShipping;

  constructor(private credentials:any){
    this.targetShipping = new TargetShipping();
    this.targetShipping.login(this.credentials);
  }
  public request(origen:any,destino:any,peso:any){
    this.targetShipping.setOrigen(origen);
    this.targetShipping.setDestino(destino);
    return this.targetShipping.calculate(peso);
  }
}

class Client{
  public run(){
    let oldInterface = new AdapterShipping();
    let cost = oldInterface.request(123,456,6);
    console.log(cost);
    let credentials = "user/password";
    let shippingAdapter: ShippingAdapter = new ShippingAdapter(credentials);
    let newCost = shippingAdapter.request(123,456,6);
    console.log(newCost);

  }
}

let client = new Client();
client.run();
