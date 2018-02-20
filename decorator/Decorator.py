import abc, six

@six.add_metaclass(abc.ABCMeta)
class Shape:
    def draw(self):
        pass

class Circle(Shape):
    def draw(self):
        print("I'm a circle")

class Rectangle(Shape):
    def draw(self):
        print("I'm a rectangle")

class ShapeDecorator(Shape):
    def __init__(self, decoratedShape):
        self.decoratedShape = decoratedShape

    def doSomethingElse(self):
        pass

    def draw(self):
        self.decoratedShape.draw()

class ColorRedShapeDecorator(ShapeDecorator):
    def draw(self):
        self.decoratedShape.draw()
        self.doSomethingElse()

    def doSomethingElse(self):
        print ("Coloring red")

if __name__ == "__main__":
    circle = Circle()
    redCircle = ColorRedShapeDecorator(Circle())

    circle.draw()
    print("#####")
    redCircle.draw()
