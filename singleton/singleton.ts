class aSingleton {
  private static instance:aSingleton;
  private privateNumber = Math.round(Math.random()*1000);

  private constructor(){

  }
  
   public static getInstance(){
    if(!this.instance){
      this.instance = new aSingleton();
    }
    return this.instance;
  }


  private privateMethod(){
    console.log("Iḿ a private method");
  }

  public getRandomNumber(){
    return this.privateNumber;
  }

  public publicMethod(){
      console.log("entrandoa a public method");
      this.privateMethod();
      console.log("saliendo de public method");
    }
}


const testOne:aSingleton = aSingleton.getInstance()
const testTwo:aSingleton = aSingleton.getInstance();

testTwo.publicMethod()
console.log("testOne" + testOne.getRandomNumber());
console.log("testTwo" + testTwo.getRandomNumber());
