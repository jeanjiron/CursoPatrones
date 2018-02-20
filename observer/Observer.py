import abc, six

@six.add_metaclass(abc.ABCMeta)
class Publisher:
    def __init__(self):
        pass

    def addObserver(self, observer):
        pass

    def removeObserver(self, observer):
        pass

    def notifyAll(self):
        pass

class PlatziForum(Publisher):
    def __init__(self):
        self.userList = []
        self.post = None

    def addObserver(self, observer):
        if observer not in self.userList:
            self.userList.append(observer)

    def removeObserver(self, observer):
        self.userList.remove(observer)

    def notifyAll(self):
        for observer in self.userList:
            observer.notify(self.post)

    def writePost(self, post):
        self.post = post

class Subscriber:
    def __init__(self):
        pass

    def notify(self, post):
        pass

class UserA(Subscriber):
    def __init__(self):
        pass

    def notify(self, post):
        print "userA ha sido notificado de {}".format(post)

if __name__ == "__main__":
    foroPlatzi = PlatziForum()
    user1 = UserA()
    user2 = UserA()
    user3 = UserA()
    user4 = UserA()

    foroPlatzi.addObserver(user1)
    foroPlatzi.addObserver(user2)
    foroPlatzi.addObserver(user3)
    foroPlatzi.addObserver(user4)

    foroPlatzi.writePost("Black Friday")
    foroPlatzi.notifyAll()

    foroPlatzi.removeObserver(user2)

    foroPlatzi.writePost("Black Friday2")
    foroPlatzi.notifyAll()