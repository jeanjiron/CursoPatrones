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

    def doSomething(self):
        print(self.car)

#====================================================

@six.add_metaclass(abc.ABCMeta)
class AbstractFactory():
    def __init__(self):
        self.manufacture = None

    @staticmethod
    def get_factory(factoryName):
        if factoryName == "vw":
            return VWFactory()
        raise TypeError("unknown Factory")

    @abc.abstractmethod
    def createCar(self, carType):pass

    def __str__(self):
        return "manufacture is {}".format(self.manufacture)

#====================================================

class VWFactory(AbstractFactory):
    def __init__(self):
        self.manufacture ="VW"

    def createCar(self, carType):
        self.car = None
        if carType == "sports":
            self.car = SportCar();
        elif carType == "family":
            self.car = FamilyCar()
        else:
            print("Car type {} is not defined".format(carType))
        return self.car


if __name__ == "__main__":
    myFactory = AbstractFactory.get_factory("vw");
    s = myFactory.createCar("sports")
    f = myFactory.createCar("family")

    print(s)
    print(f)



