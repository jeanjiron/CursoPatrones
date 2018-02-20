import abc, six

@six.add_metaclass(abc.ABCMeta)
class Command:
    def execute(self):
        pass

class Light:
    """Clase Receiver"""
    def turnOn(self):
        print("foco encendido")

    def turnOff(self):
        print("foco apagado")


class Switch:
    """Clase Invoker"""
    def __init__(self, onCommand, offCommand):
        self._onCommand = onCommand
        self._offCommand = offCommand

    def on(self):
        self._onCommand.execute()

    def off(self):
        self._offCommand.execute()


class OnCommand(Command):
    def __init__(self, light):
        self._light = light

    def execute(self):
        self._light.turnOn()


class OffCommand(Command):
    def __init__(self, light):
        self._light = light

    def execute(self):
        self._light.turnOff()


class LightSwitch:
    """Clase cliente"""
    def __init__(self):
        self.foco = Light()
        self.switchUp = OnCommand(self.foco)
        self.switchDown = OffCommand(self.foco)
        self.switch = Switch(self.switchUp, self.switchDown)

    def operation(self, cmd):
        if cmd == "ON":
            self.switch.on()
        elif cmd == "OFF":
            self.switch.off()
        else:
            print "opcion invalida"

if __name__ == "__main__":
    client = LightSwitch()
    client.operation("ON")
    client.operation("OFF")