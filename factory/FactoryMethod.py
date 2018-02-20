import abc, six

@six.add_metaclass(abc.ABCMeta)
class Car():
    def __init__(self):
        self.name = None
        self.maxSpeed = None

    def __str__(self):
        return "name is {}, maxSpeed is {}".format(self.name, self.maxSpeed)

class SportCar(Car):
    def __init__(self):
        self.name = "Deportivo"
        self.maxSpeed = "250 km/hr"


class FamilyCar(Car):
    def __init__(self):
        self.name = "Familiar"
        self.maxSpeed = "150 km/hr"


class MyFactory:
    def createCar(self, carType):
        self.car = None
        if carType == "sports":
            self.car = SportCar();
        elif carType == "family":
            self.car = FamilyCar()
        else:
            print("Car type (:s) is not defined".format(carType))
        return  self.car

    def doSomething(self):
        print(self.car)

if __name__ == "__main__":
    myFactory = MyFactory();
    s = myFactory.createCar("sports")
    f = myFactory.createCar("family")

    print(s)
    print(f)



