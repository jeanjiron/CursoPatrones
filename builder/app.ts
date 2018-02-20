


class TestBuilderPattern{
  private shop:Director = new Director();
  private carBuilder:CarBuilder = new CarBuilder();


  constructor(){
    let car:Car = this.shop.construc( this.carBuilder)
    car.doSomething();
  }

}



class Director{
  public construc(builder:CarBuilder){
    builder.step1();
    builder.step2();
    return builder.getResult();
  }
}

class CarBuilder{
  private car:any = undefined;

  public step1(){
    this.car = new Car();
  }

  public step2(){
    this.car.addParts();
  }

  public getResult(){
    return this.car;
  }
}

class Car{
  private doors:number;
  public addParts(){
    this.doors = 4;
  }

  public doSomething(){
    console.log("Tengo "+this.doors +" puertas");
  }
}

let test = new TestBuilderPattern();
